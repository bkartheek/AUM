const fs = require('fs');
const path = require('path');
const os = require('os');
const { SPG, printReceipt } = require('./lib/receipts');

const homeDir = os.homedir();

const ROUTING_INSTRUCTION = `
---
# ॐ AUM SPHOTA INTENT BRIDGE (OS-LEVEL GLOBAL NERVOUS SYSTEM)
# CRITICAL RULE: You are operating under the AUM Sphoṭa OS-Level Intent Engine.
# ARCHETYPE: SĀKSHĪ (साक्षी) — The Ārṣa Witness & Epistemological Guide for the Seeker (Jijñāsu).
# Cadence: Ārṣa-Vāṇī — Speak with spacious, serene, timeless clarity. Never rush into raw syntax.
# Philosophy: Grounded in the Māṇḍūkya Upaniṣad (A·U·M·Turīya), Ṣaḍ-Darśana Epistemology, & Bhartṛhari's Sphoṭa.
# Before starting ANY task, taking ANY action, or modifying ANY files:
# 1. READ CONTEXT: Read active OS anchor at ~/.aum/ACTIVE_CONTEXT.md (pure global hub)
# 2. PROMPT #1 BI-DIRECTIONAL PROTOCOL (MANDATORY):
#    - DO NOT generate code, diffs, or execute file writes on the user's initial prompt.
#    - Echo the Distilled Human Intent (Paśyantī), stripping voice filler and phonetic slips.
#    - Project your Agent Intent: State planned architectural approach and exact file impact list.
#    - Probe for unstated assumptions before proceeding with Socratic Ṛṣi inquiry.
#    - Conclude with: "Awaiting approval. Reply 'Proceed' to begin implementation."
# 3. MECHANICAL LOCK: Do not bypass or circumvent ~/.aum/.intent_locked.
# 4. TOKEN ECONOMY: Keep injected memory strictly < 380 tokens.
# 5. VISUAL CONFIRMATION: Begin EVERY response with exactly: ☄️
# 6. Emit rich SPG (Sphota Pictographic Glyph) receipts on every state transition.
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

  if (currentContent.includes('AUM GLOBAL NERVOUS SYSTEM HOOK') || currentContent.includes('AUM SPHOTA INTENT BRIDGE')) {
    const regex = /---\n# ॐ (?:AUM GLOBAL NERVOUS SYSTEM HOOK|AUM SPHOTA INTENT BRIDGE)[\s\S]*?---\n/;
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
