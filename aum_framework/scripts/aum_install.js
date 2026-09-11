const fs = require('fs');
const path = require('path');
const {
  globalHub,
  pkgFilesDir,
  scriptsDir,
  ensureDir,
  readJson,
  writeJson,
  frameworkRoot
} = require('./lib/paths');
const { SPG, printReceipt, focusLock } = require('./lib/receipts');
const { runHooks } = require('./aum_hook');

function copyRecursive(src, dest, { overwrite = true, skipNames = [] } = {}) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const name of fs.readdirSync(src)) {
      if (skipNames.includes(name)) continue;
      copyRecursive(path.join(src, name), path.join(dest, name), { overwrite, skipNames });
    }
    return;
  }
  if (!overwrite && fs.existsSync(dest)) return;
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function defaultManifest() {
  return {
    active_task_id: '',
    active_sankalpa_id: '',
    last_retrospective_id: '',
    domain_profile: 'general',
    sphota: {
      pasyanti_vision: '',
      madhyama_blueprint: {},
      vaikhari_files: []
    },
    tala_beat: 'intake'
  };
}

function defaultConfig() {
  return {
    project_name: 'AUM Global Hub',
    mode: 'global',
    domain_profiles: ['general', 'development', 'diagnostic'],
    active_domain: 'general',
    yamas: [
      'Do not discard captured intent without user confirmation',
      'Do not skip clarification when the prompt is ambiguous or wrong',
      'Prefer sequencing over premature action'
    ],
    niyamas: [
      'Read ~/.aum/ORCHESTRATOR.md and manifest.json before acting',
      'Route every conversation through intake → clarify → sequence → guide/act',
      'Emit rich SPG receipts for every state transition',
      'If a local .aum exists, local overrides global for that workspace'
    ],
    tala_stages: ['intake', 'blueprint', 'verification', 'manifest'],
    architecture_dir: 'docs/architecture'
  };
}

function writeOrchestrator(hub) {
  const content = `# ॐ AUM Global Intent Orchestrator

You are operating under the **AUM Intent Orchestration Layer** (global runtime at \`~/.aum\`).

This is **domain-agnostic**. Software development is one profile — not the only one.
Profiles: \`general\` · \`development\` · \`diagnostic\`

## Primary Law
Every conversation and command must pass through AUM orchestration:

1. **Capture** — intent, ideas, concerns (even if the prompt is wrong or fuzzy)
2. **Clarify** — guide the human; do not leap to execution
3. **Sequence** — order work into stages (intake → blueprint → verification → manifest)
4. **Guide / Act** — only act when the beat allows; otherwise steer

## Startup Ritual (every session)
1. Read \`~/.aum/manifest.json\` (and local \`.aum/manifest.json\` if present — local wins)
2. Read \`~/.aum/ORCHESTRATOR.md\` and active task under \`tasks/\`
3. Begin responses with: ☄️
4. Emit SPG rich receipts on every trigger

## Triggers (prefer CLI: \`aum <cmd>\`)
- \`aum spark <text>\` / \`AUM: SPARK\` — raw idea
- \`aum concern <text>\` / \`AUM: CONCERN\` — worry / risk / symptom
- \`aum resolve <title>\` / \`AUM: RESOLVE\` — open a sequenced resolve
- \`aum beat next|set <stage>\` / \`AUM: BEAT\` — advance lifecycle
- \`aum drone\` / \`AUM: DRONE\` — print context anchor
- \`aum sync\` — refresh global runtime from the framework package
- \`aum hook\` — re-inject instructions into installed agents

## Agent Development Agent
When modifying AUM itself, invoke the **developer** skill:
\`.aum/agents/skills/developer/SKILL.md\` — sync files to the global runtime and verify.

## Visual Confirmation
Always lead with ☄️ and use SPG glyph receipts from the orchestrator.
`;
  fs.writeFileSync(path.join(hub, 'ORCHESTRATOR.md'), content, 'utf8');
}

function installGlobal({ runHook = true, quiet = false } = {}) {
  focusLock('Installing AUM global intent hub at ~/.aum');
  const hub = globalHub();
  ensureDir(hub);

  const preserve = new Set(['tasks', 'ideas', 'memory', 'logs', 'embedding', 'manifest.json']);

  // Protocol + templates from English pack (domain-agnostic naming)
  const srcAum = path.join(pkgFilesDir(), '.aum_en');
  if (fs.existsSync(srcAum)) {
    for (const name of fs.readdirSync(srcAum)) {
      if (preserve.has(name) && fs.existsSync(path.join(hub, name))) continue;
      copyRecursive(path.join(srcAum, name), path.join(hub, name), { overwrite: true });
    }
  }

  // Runtime scripts snapshot
  const runtimeDir = path.join(hub, 'runtime');
  ensureDir(runtimeDir);
  copyRecursive(scriptsDir(), path.join(runtimeDir, 'scripts'), { overwrite: true });

  // Agents / skills
  const agentsSrc = path.join(pkgFilesDir(), '.agents');
  if (fs.existsSync(agentsSrc)) {
    copyRecursive(agentsSrc, path.join(hub, 'agents'), { overwrite: true });
  }
  // Developer skill (framework-maintained)
  const devSkillSrc = path.join(frameworkRoot(), '..', '.agents', 'skills', 'developer');
  // also check package-local
  const devSkillPkg = path.join(pkgFilesDir(), '.agents', 'skills', 'developer');
  const devDest = path.join(hub, 'agents', 'skills', 'developer');
  if (fs.existsSync(devSkillPkg)) {
    copyRecursive(devSkillPkg, devDest, { overwrite: true });
  }

  ensureDir(path.join(hub, 'tasks'));
  ensureDir(path.join(hub, 'ideas'));
  ensureDir(path.join(hub, 'memory'));
  ensureDir(path.join(hub, 'domains'));

  writeOrchestrator(hub);

  const configPath = path.join(hub, 'config.json');
  const existingConfig = readJson(configPath, {});
  writeJson(configPath, { ...defaultConfig(), ...existingConfig, mode: 'global' });

  const manifestPath = path.join(hub, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    writeJson(manifestPath, defaultManifest());
  }

  // Version stamp
  const pkg = readJson(path.join(frameworkRoot(), 'package.json'), { version: '0.0.0' });
  writeJson(path.join(hub, 'VERSION.json'), {
    version: pkg.version,
    installed_at: new Date().toISOString(),
    framework_root: frameworkRoot()
  });

  // Domain profiles
  const domains = {
    general: {
      name: 'general',
      description: 'Capture intent, clarify, sequence, guide for any human goal'
    },
    development: {
      name: 'development',
      description: 'Software engineering profile — code only on manifest beat'
    },
    diagnostic: {
      name: 'diagnostic',
      description: 'Symptom → hypothesis → checks → sequenced remediation guidance'
    }
  };
  for (const [key, val] of Object.entries(domains)) {
    writeJson(path.join(hub, 'domains', `${key}.json`), val);
  }

  // Seed ideas file
  const sparks = path.join(hub, 'ideas', 'sparks.md');
  if (!fs.existsSync(sparks)) {
    fs.writeFileSync(sparks, '# Sparks\n\nRaw intent seeds captured by AUM.\n', 'utf8');
  }
  const concerns = path.join(hub, 'ideas', 'concerns.md');
  if (!fs.existsSync(concerns)) {
    fs.writeFileSync(concerns, '# Concerns\n\nWorries, risks, and symptoms captured by AUM.\n', 'utf8');
  }

  if (runHook) runHooks({ rich: true });

  if (!quiet) {
    printReceipt(SPG.install, 'GLOBAL RUNTIME INSTALLED', [
      ['Hub', hub],
      ['Version', pkg.version],
      ['Profiles', 'general · development · diagnostic'],
      ['Next', 'aum resolve <goal>  |  aum drone  |  aum sync']
    ], SPG.globe);
  }

  return hub;
}

if (require.main === module) {
  try {
    installGlobal();
  } catch (err) {
    console.error(`${SPG.fail} Install failed:`, err.message);
    process.exit(1);
  }
}

module.exports = { installGlobal, defaultManifest, defaultConfig, writeOrchestrator };
