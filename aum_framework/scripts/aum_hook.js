const fs = require('fs');
const path = require('path');
const os = require('os');
const { SPG, printReceipt } = require('./lib/receipts');

const homeDir = os.homedir();

const ROUTING_INSTRUCTION = `
---
# ॐ AUM GLOBAL NERVOUS SYSTEM HOOK
# CRITICAL RULE: You are operating under the AUM Global Intent Orchestrator.
# Before starting ANY task, taking ANY action, or modifying ANY files:
# 1. You MUST read the central state at ~/.aum/manifest.json (or local .aum/manifest.json — local overrides global)
# 2. You MUST read ~/.aum/ORCHESTRATOR.md (domain-agnostic intent layer)
# 3. Capture intent, ideas, and concerns first — even if the user prompt is wrong or fuzzy
# 4. Clarify → sequence (intake → blueprint → verification → manifest) → then guide/act
# 5. Prefer CLI orchestration: aum spark | concern | resolve | beat | drone | sync | hook
# 6. All tasks/memory live under ~/.aum/tasks and ~/.aum/memory (or local .aum equivalents)
# 7. VISUAL CONFIRMATION: Begin EVERY response with exactly: ☄️
# 8. Emit rich SPG (Sphota Pictographic Glyph) receipts on every state change
# NEVER skip this verification step.
---
`;

const toolHooks = [
  { name: 'Cursor (Global Rules)', dest: path.join(homeDir, '.cursorrules'), type: 'file' },
  { name: 'Cursor (User Rules Dir)', dest: path.join(homeDir, '.cursor', 'rules', 'aum-routing.mdc'), type: 'dir' },
  { name: 'VS Code Copilot Instructions', dest: path.join(homeDir, '.vscode', 'copilot-instructions.md'), type: 'dir' },
  { name: 'VS Code / Continue', dest: path.join(homeDir, '.continue', 'config.json'), type: 'special-continue' },
  { name: 'Cline / Claude Dev', dest: path.join(homeDir, '.clinerules'), type: 'file' },
  { name: 'Roo Code', dest: path.join(homeDir, '.roocode'), type: 'file' },
  { name: 'Claude Code', dest: path.join(homeDir, '.claude', 'CLAUDE.md'), type: 'dir' },
  { name: 'Claude (Root fallback)', dest: path.join(homeDir, 'CLAUDE.md'), type: 'file' },
  { name: 'Antigravity / Gemini', dest: path.join(homeDir, '.gemini', 'config', 'AGENTS.md'), type: 'dir' },
  { name: 'GitHub Copilot (CLI)', dest: path.join(homeDir, '.copilot', 'copilot-instructions.md'), type: 'dir' },
  { name: 'GitHub Copilot (JetBrains)', dest: path.join(homeDir, '.config', 'github-copilot', 'intellij', 'global-copilot-instructions.md'), type: 'dir' },
  { name: 'Aider', dest: path.join(homeDir, '.aider.conf.yml'), type: 'file' },
  { name: 'Windsurf', dest: path.join(homeDir, '.windsurfrules'), type: 'file' },
  { name: 'Codex CLI', dest: path.join(homeDir, '.codex', 'AGENTS.md'), type: 'dir' },
  { name: 'OpenAI Codex Instructions', dest: path.join(homeDir, '.codex', 'instructions.md'), type: 'dir' }
];

function injectMarkdownFile(dest, name) {
  const parentDir = path.dirname(dest);
  if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true });

  let currentContent = '';
  if (fs.existsSync(dest)) currentContent = fs.readFileSync(dest, 'utf8');

  if (currentContent.includes('AUM GLOBAL NERVOUS SYSTEM HOOK')) {
    const regex = /---\n# ॐ AUM GLOBAL NERVOUS SYSTEM HOOK[\s\S]*?---\n/;
    if (regex.test(currentContent)) {
      fs.writeFileSync(dest, currentContent.replace(regex, ROUTING_INSTRUCTION + '\n').trim() + '\n', 'utf8');
      return 'updated';
    }
    return 'verified';
  }

  const newContent = name === 'Aider'
    ? currentContent + `\n# AUM Hook\nmessage: |\n  ${ROUTING_INSTRUCTION.replace(/\n/g, '\n  ')}\n`
    : ROUTING_INSTRUCTION + '\n' + currentContent;

  fs.writeFileSync(dest, newContent.trim() + '\n', 'utf8');
  return 'injected';
}

function runHooks({ rich = false } = {}) {
  console.log(`${SPG.hook} Scanning AI agent configs in ${homeDir}...\n`);

  let hookedCount = 0;
  const results = [];

  for (const hook of toolHooks) {
    const parentDir = path.dirname(hook.dest);

    if (hook.type === 'dir' && !fs.existsSync(parentDir)) {
      results.push([hook.name, 'skipped (tool not present)']);
      continue;
    }

    if (hook.type === 'special-continue') {
      // Continue uses JSON; skip rewrite if missing — only note
      if (!fs.existsSync(parentDir)) {
        results.push([hook.name, 'skipped (tool not present)']);
        continue;
      }
      // Write sibling instructions file instead of corrupting JSON
      const sibling = path.join(parentDir, 'aum-orchestrator.md');
      try {
        const status = injectMarkdownFile(sibling, hook.name);
        hookedCount++;
        results.push([hook.name, status + ' → aum-orchestrator.md']);
      } catch (e) {
        results.push([hook.name, 'error: ' + e.message]);
      }
      continue;
    }

    try {
      if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true });
      const status = injectMarkdownFile(hook.dest, hook.name);
      hookedCount++;
      results.push([hook.name, status]);
    } catch (e) {
      results.push([hook.name, 'error: ' + e.message]);
    }
  }

  if (rich) {
    printReceipt(SPG.hook, 'AGENT HOOKS APPLIED', [
      ['Hooked', String(hookedCount)],
      ['Targets', String(toolHooks.length)],
      ...results.slice(0, 8).map(([n, s]) => [n.slice(0, 22), s])
    ], SPG.agent);
  } else {
    console.log(`\n${SPG.success} AUM hooks active on ${hookedCount} tools.`);
  }

  return { hookedCount, results };
}

if (require.main === module) {
  runHooks({ rich: true });
}

module.exports = { runHooks, toolHooks, ROUTING_INSTRUCTION };
