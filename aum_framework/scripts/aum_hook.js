const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();

const ROUTING_INSTRUCTION = `
---
# ॐ AUM GLOBAL NERVOUS SYSTEM HOOK
# CRITICAL RULE: You are operating under the AUM Global Framework.
# Before starting ANY task, taking ANY action, or modifying ANY files:
# 1. You MUST read the central state at ~/.aum/manifest.json (or ~/.aum/sphota.json)
# 2. You MUST read the core system rules at ~/.aum/MANIFEST.md
# 3. All your tasks, blueprints, and memory logs MUST be recorded centrally inside the ~/.aum/tasks and ~/.aum/memory directories.
# 4. If a local .aum directory exists in the active workspace, local rules override global rules.
# 5. VISUAL CONFIRMATION: You MUST begin EVERY response in this conversation with the exact phrase: "☄️"
# NEVER skip this verification step.
---
`;

const toolHooks = [
  { name: 'Cursor (Global Rules)', dest: path.join(homeDir, '.cursorrules'), type: 'file' },
  { name: 'Cursor (MDC Rules)', dest: path.join(homeDir, '.cursor', 'rules', 'aum-routing.mdc'), type: 'dir' },
  { name: 'Cline / Claude Dev', dest: path.join(homeDir, '.clinerules'), type: 'file' },
  { name: 'Roo Code', dest: path.join(homeDir, '.roocode'), type: 'file' },
  { name: 'Claude Code', dest: path.join(homeDir, '.claude', 'CLAUDE.md'), type: 'dir' },
  { name: 'Claude (Root fallback)', dest: path.join(homeDir, 'CLAUDE.md'), type: 'file' },
  { name: 'Antigravity / Gemini', dest: path.join(homeDir, '.gemini', 'config', 'AGENTS.md'), type: 'dir' },
  { name: 'GitHub Copilot (CLI)', dest: path.join(homeDir, '.copilot', 'copilot-instructions.md'), type: 'dir' },
  { name: 'GitHub Copilot (JetBrains)', dest: path.join(homeDir, '.config', 'github-copilot', 'intellij', 'global-copilot-instructions.md'), type: 'dir' },
  { name: 'Aider', dest: path.join(homeDir, '.aider.conf.yml'), type: 'file' },
  { name: 'Windsurf', dest: path.join(homeDir, '.windsurfrules'), type: 'file' }
];

function runHooks() {
  console.log(`======================================================`);
  console.log(`   ॐ AUM CENTRAL NERVOUS SYSTEM: OMNISCIENT HOOKS`);
  console.log(`======================================================`);
  console.log(`[ Scanning ]: Searching for top AI Coding Assistant configurations in ${homeDir}...\n`);
  
  let hookedCount = 0;

  toolHooks.forEach(hook => {
    const parentDir = path.dirname(hook.dest);
    
    if (hook.type === 'dir' && !fs.existsSync(parentDir)) {
      return; // Skip, tool not installed or configured yet
    }
    
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }

    try {
      let currentContent = '';
      if (fs.existsSync(hook.dest)) {
        currentContent = fs.readFileSync(hook.dest, 'utf8');
      }

      if (currentContent.includes('AUM GLOBAL NERVOUS SYSTEM HOOK')) {
        // Already hooked. We should replace the old hook block with the updated one.
        const regex = /---\n# ॐ AUM GLOBAL NERVOUS SYSTEM HOOK[\s\S]*?---\n/;
        if (regex.test(currentContent)) {
          const newContent = currentContent.replace(regex, ROUTING_INSTRUCTION + '\n');
          fs.writeFileSync(hook.dest, newContent.trim() + '\n', 'utf8');
          console.log(`[ Updated ]: Refreshed AUM routing instructions in ${hook.name}`);
          hookedCount++;
        } else {
          console.log(`[ Verified ]: ${hook.name} is already hooked.`);
          hookedCount++;
        }
        return;
      }

      const newContent = hook.name === 'Aider' 
        ? currentContent + `\n# AUM Hook\nmessage: |\n  ${ROUTING_INSTRUCTION.replace(/\n/g, '\n  ')}\n`
        : ROUTING_INSTRUCTION + '\n' + currentContent;

      fs.writeFileSync(hook.dest, newContent.trim() + '\n', 'utf8');
      console.log(`[ Injected ]: Successfully attached AUM routing instructions to ${hook.name}`);
      hookedCount++;
    } catch (e) {
      console.error(`[ Error ]: Failed to inject into ${hook.name}:`, e.message);
    }
  });

  console.log(`\n======================================================`);
  console.log(`[ Success ]: AUM Global Central Nervous System is actively monitoring ${hookedCount} tools.`);
  console.log(`======================================================`);
}

// Check if run directly or imported
if (require.main === module) {
  runHooks();
}

module.exports = { runHooks };
