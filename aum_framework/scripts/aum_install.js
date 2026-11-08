#!/usr/bin/env node
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
const { STAGE_ORDER, QUARTERS, diagram, summarizeAll } = require('./lib/mandukya');
const { FAMILIES } = require('./lib/agents');
const { runInstallInterview, DEFAULT_INTENT } = require('./lib/install_interview');
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
    human_intent: { text: '', captured_at: '' },
    aligned_agents: { families: [], detected: [] },
    architecture: 'mandukya',
    sphota: {
      pasyanti_vision: '',
      madhyama_blueprint: {},
      vaikhari_files: []
    },
    tala_beat: 'intake',
    mandukya: {
      phoneme: 'A',
      state: 'jāgrat',
      state_en: 'waking',
      cpa: 'clarify'
    }
  };
}

function defaultConfig() {
  return {
    project_name: 'AUM Global Hub',
    mode: 'global',
    architecture: 'mandukya',
    domain_profiles: ['general', 'development', 'diagnostic'],
    active_domain: 'general',
    yamas: [
      'Do not discard captured human intent without confirmation',
      'Do not skip clarification when the prompt is ambiguous or wrong',
      'Do not bypass Māṇḍūkya quarters / Clarify→Plan→Act',
      'Do not claim hard sandbox enforcement that does not exist',
      'Do not rewrite home agent configs outside aum hook|install|sync'
    ],
    niyamas: [
      'Read ~/.aum/ACTIVE_CONTEXT.md, ORCHESTRATOR.md, INTENT.md, and manifest.json before acting',
      'Align agent actions with the stored human_intent',
      'Route work A intake → U blueprint → M verification → · manifest',
      'Emit SPG receipts on state transitions',
      'If a local .aum exists, local overrides global for that workspace'
    ],
    tala_stages: ['intake', 'blueprint', 'verification', 'manifest'],
    architecture_dir: 'docs/architecture'
  };
}

function writeOrchestrator(hub) {
  const content = `# ॐ AUM Intent Orchestrator (Māṇḍūkya)

**What AUM is:** an intent orchestration and guardrail layer for AI coding agents.  
**Foundation:** Māṇḍūkya Upaniṣad — **A · U · M · Silence (Turīya)**.  
**How agents walk it:** **Clarify → Plan → Act** (through the quarters, not instead of them).

Also read: \`ACTIVE_CONTEXT.md\` (human intent + aligned agents) · \`INTENT.md\` · \`CORE_RULES.md\`

## Quarters = orchestration spine

| Phoneme | State | Beat | CPA | Commands |
|---|---|---|---|---|
| **A** | Jāgrat | \`intake\` | Clarify | spark · concern · resolve · distill |
| **U** | Svapna | \`blueprint\` | Plan | beat · anchor |
| **M** | Suṣupti | \`verification\` | Plan/still | lock · audit |
| **·** | Turīya | \`manifest\` | Act | unlock · verify · code after Proceed |

## One approval gate
Echo distilled intent → list planned files → wait for Proceed / \`aum beat\` to \`manifest\`.

## Skills
- **Yogi** — A / Clarify · **Om** — Turīya witness · **Developer** — sync package → hub
`;
  fs.writeFileSync(path.join(hub, 'ORCHESTRATOR.md'), content, 'utf8');

  for (const name of ['INTENT.md', 'CORE_RULES.md']) {
    const src = path.join(frameworkRoot(), name);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(hub, name));
  }
}

function seedMandukya(hub) {
  const archDir = path.join(hub, 'architecture');
  ensureDir(archDir);
  const lines = [
    '# Māṇḍūkya foundation (seeded at install)',
    '',
    diagram(),
    '',
    'Spine: ' + summarizeAll(),
    '',
    '| Beat | Phoneme | State | CPA | Code? |',
    '|---|---|---|---|---|',
    ...STAGE_ORDER.map((b) => {
      const q = QUARTERS[b];
      return `| ${b} | ${q.phoneme} | ${q.state_en} | ${q.cpa} | ${q.may_write_code ? 'yes' : 'no'} |`;
    }),
    '',
    'Runtime map: `runtime/scripts/lib/mandukya.js`',
    'Lineage: framework `docs/architecture/arb_000_mandukya_foundation.md`',
    ''
  ];
  fs.writeFileSync(path.join(archDir, 'MANDUKYA.md'), lines.join('\n'), 'utf8');

  // Copy ARB-000 if present in monorepo
  const arb = path.join(frameworkRoot(), '..', 'docs', 'architecture', 'arb_000_mandukya_foundation.md');
  if (fs.existsSync(arb)) {
    fs.copyFileSync(arb, path.join(archDir, 'arb_000_mandukya_foundation.md'));
  }
}

function writeActiveContext(hub, { humanIntent, agentFamilies, detectedFamilies }) {
  const agentBlock = (agentFamilies || [])
    .map((f) => {
      const meta = FAMILIES[f] || { label: f, workflow: '' };
      return `  • **${meta.label}** (\`${f}\`) — ${meta.workflow}`;
    })
    .join('\n');

  const content = `---
# ॐ AUM SPHOTA INTENT ANCHOR [Hub: ~/.aum]
• Human Intent (primary): ${humanIntent}
• Aligned Agents: ${(agentFamilies || []).join(', ') || '(none)'}
• Detected on install: ${(detectedFamilies || []).join(', ') || '(none)'}
• Architecture: Māṇḍūkya A · U · M · Turīya
• Operational lens: Clarify → Plan → Act through the quarters
• Active beat default: intake (A / Jāgrat / Clarify)
• Guards:
  • Honor-system beat gating (not an OS sandbox)
  • No code until manifest or Proceed
  • Home config writes only via aum hook|install|sync
• Startup: Read this file + ORCHESTRATOR.md + INTENT.md + manifest.json
---

## Human ↔ Agent alignment

**Person wants:**  
${humanIntent}

**Agents operating under that intent:**
${agentBlock || '  • (none hooked — run `aum hook --agents cursor,claude`)'}

## Māṇḍūkya default architecture
${diagram()}

Capture: \`aum spark|concern|resolve\` · Stage: \`aum beat\` · Witness: \`aum drone\` · Map: \`aum mandukya\`
`;
  fs.writeFileSync(path.join(hub, 'ACTIVE_CONTEXT.md'), content, 'utf8');
}

function writeAlignment(hub, interview) {
  writeJson(path.join(hub, 'alignment.json'), {
    human_intent: interview.humanIntent,
    agent_families: interview.agentFamilies,
    detected_families: interview.detectedFamilies,
    architecture: 'mandukya',
    cpa: ['clarify', 'plan', 'act'],
    quarters: STAGE_ORDER,
    aligned_at: new Date().toISOString()
  });
}

async function installGlobal(opts = {}) {
  focusLock('Installing AUM global intent hub — capture human intent + align agents');

  const interview = opts.interview || (await runInstallInterview(opts));
  const hub = globalHub();
  ensureDir(hub);

  const preserve = new Set([
    'tasks',
    'ideas',
    'memory',
    'logs',
    'embedding',
    'manifest.json',
    'ACTIVE_CONTEXT.md',
    'alignment.json'
  ]);

  const srcAum = path.join(pkgFilesDir(), '.aum_en');
  if (fs.existsSync(srcAum)) {
    for (const name of fs.readdirSync(srcAum)) {
      if (preserve.has(name) && fs.existsSync(path.join(hub, name))) continue;
      copyRecursive(path.join(srcAum, name), path.join(hub, name), { overwrite: true });
    }
  }

  const runtimeDir = path.join(hub, 'runtime');
  ensureDir(runtimeDir);
  copyRecursive(scriptsDir(), path.join(runtimeDir, 'scripts'), { overwrite: true });

  const agentsSrc = path.join(pkgFilesDir(), '.agents');
  if (fs.existsSync(agentsSrc)) {
    copyRecursive(agentsSrc, path.join(hub, 'agents'), { overwrite: true });
  }
  // Prefer workspace skills (with CORE_RULES openers) when developing from monorepo
  const workspaceSkills = path.join(frameworkRoot(), '..', '.agents', 'skills');
  if (fs.existsSync(workspaceSkills)) {
    copyRecursive(workspaceSkills, path.join(hub, 'agents', 'skills'), { overwrite: true });
  }
  const devSkillPkg = path.join(pkgFilesDir(), '.agents', 'skills', 'developer');
  if (fs.existsSync(devSkillPkg) && !fs.existsSync(path.join(hub, 'agents', 'skills', 'developer'))) {
    copyRecursive(devSkillPkg, path.join(hub, 'agents', 'skills', 'developer'), { overwrite: true });
  }

  ensureDir(path.join(hub, 'tasks'));
  ensureDir(path.join(hub, 'ideas'));
  ensureDir(path.join(hub, 'memory'));
  ensureDir(path.join(hub, 'domains'));

  writeOrchestrator(hub);
  seedMandukya(hub);
  writeActiveContext(hub, interview);
  writeAlignment(hub, interview);

  const configPath = path.join(hub, 'config.json');
  const existingConfig = readJson(configPath, {});
  writeJson(configPath, {
    ...defaultConfig(),
    ...existingConfig,
    mode: 'global',
    architecture: 'mandukya',
    preferred_agents: interview.agentFamilies
  });

  const manifestPath = path.join(hub, 'manifest.json');
  const existingManifest = readJson(manifestPath, defaultManifest());
  const q = QUARTERS.intake;
  writeJson(manifestPath, {
    ...defaultManifest(),
    ...existingManifest,
    human_intent: {
      text: interview.humanIntent,
      captured_at: new Date().toISOString()
    },
    aligned_agents: {
      families: interview.agentFamilies,
      detected: interview.detectedFamilies
    },
    architecture: 'mandukya',
    sphota: {
      ...(existingManifest.sphota || {}),
      pasyanti_vision:
        (existingManifest.sphota && existingManifest.sphota.pasyanti_vision) ||
        interview.humanIntent.slice(0, 200)
    },
    tala_beat: existingManifest.tala_beat || 'intake',
    mandukya: {
      phoneme: q.phoneme,
      state: q.state,
      state_en: q.state_en,
      cpa: q.cpa
    }
  });

  const pkg = readJson(path.join(frameworkRoot(), 'package.json'), { version: '0.0.0' });
  writeJson(path.join(hub, 'VERSION.json'), {
    version: pkg.version,
    installed_at: new Date().toISOString(),
    framework_root: frameworkRoot(),
    architecture: 'mandukya'
  });

  const domains = {
    general: { name: 'general', description: 'Capture intent, clarify, sequence, guide for any human goal' },
    development: {
      name: 'development',
      description: 'Software engineering — code only on Turīya / manifest beat'
    },
    diagnostic: {
      name: 'diagnostic',
      description: 'Symptom → hypothesis → checks → sequenced remediation'
    }
  };
  for (const [key, val] of Object.entries(domains)) {
    writeJson(path.join(hub, 'domains', `${key}.json`), val);
  }

  const sparks = path.join(hub, 'ideas', 'sparks.md');
  if (!fs.existsSync(sparks)) {
    fs.writeFileSync(sparks, '# Sparks\n\nRaw intent seeds (Paśyantī) captured by AUM.\n', 'utf8');
  }
  // Seed install intent as first spark
  fs.appendFileSync(
    sparks,
    `\n### install_${new Date().toISOString().replace(/[:.]/g, '')}\n- **Seed**: ${interview.humanIntent}\n- **Aligned agents**: ${(interview.agentFamilies || []).join(', ')}\n`,
    'utf8'
  );
  const concerns = path.join(hub, 'ideas', 'concerns.md');
  if (!fs.existsSync(concerns)) {
    fs.writeFileSync(concerns, '# Concerns\n\nWorries, risks, and symptoms captured by AUM.\n', 'utf8');
  }

  let hookResult = { hookedCount: 0, families: [] };
  if (interview.runHooks !== false && opts.runHook !== false) {
    hookResult = runHooks({
      rich: true,
      families: interview.agentFamilies,
      humanIntent: interview.humanIntent
    });
  } else {
    console.log(`${SPG.warn} Skipping home-config hooks (opt-in not granted). Run: aum hook --agents …`);
  }

  if (!opts.quiet) {
    printReceipt(SPG.install, 'GLOBAL HUB ALIGNED', [
      ['Hub', hub],
      ['Version', pkg.version],
      ['Human intent', interview.humanIntent.slice(0, 64) + (interview.humanIntent.length > 64 ? '…' : '')],
      ['Agents', (interview.agentFamilies || []).join(' · ') || '(none)'],
      ['Hooks', String(hookResult.hookedCount || 0)],
      ['Architecture', 'Māṇḍūkya A·U·M·Turīya'],
      ['CPA', 'Clarify → Plan → Act'],
      ['Next', 'aum drone  |  aum resolve <goal>  |  aum mandukya']
    ], SPG.globe);
  }

  return { hub, interview, hookResult };
}

if (require.main === module) {
  installGlobal()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(`${SPG.fail} Install failed:`, err.message);
      process.exit(1);
    });
}

module.exports = {
  installGlobal,
  defaultManifest,
  defaultConfig,
  writeOrchestrator,
  seedMandukya,
  writeActiveContext,
  DEFAULT_INTENT
};
