const fs = require('fs');
const path = require('path');
const { globalHub } = require('./lib/paths');
const { SPG, printReceipt, focusLock } = require('./lib/receipts');

const HOOK_MARKER = 'AUM GLOBAL NERVOUS SYSTEM HOOK';

function stripHook(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(HOOK_MARKER)) return false;
  const regex = /---\n# ॐ AUM GLOBAL NERVOUS SYSTEM HOOK[\s\S]*?---\n?/g;
  content = content.replace(regex, '').trim();
  // Aider style
  content = content.replace(/\n# AUM Hook\nmessage: \|[\s\S]*?(?=\n[^\s]|$)/, '').trim();
  if (content) fs.writeFileSync(filePath, content + '\n', 'utf8');
  else fs.unlinkSync(filePath);
  return true;
}

function uninstallGlobal({ removeHub = false } = {}) {
  focusLock('Uninstalling AUM global hooks' + (removeHub ? ' and hub' : ''));
  const { toolHooks } = require('./aum_hook');
  let stripped = 0;
  for (const hook of toolHooks) {
    try {
      if (hook.type === 'special-continue') {
        const sibling = path.join(path.dirname(hook.dest), 'aum-orchestrator.md');
        if (fs.existsSync(sibling)) {
          fs.unlinkSync(sibling);
          stripped++;
        }
        continue;
      }
      if (stripHook(hook.dest)) stripped++;
    } catch (_) { /* ignore */ }
  }

  const hub = globalHub();
  if (removeHub && fs.existsSync(hub)) {
    fs.rmSync(hub, { recursive: true, force: true });
  }

  printReceipt(SPG.uninstall, 'GLOBAL UNINSTALL COMPLETE', [
    ['Hooks stripped', String(stripped)],
    ['Hub removed', removeHub ? 'yes' : 'no (state preserved)'],
    ['Hub path', hub]
  ], SPG.warn);
}

if (require.main === module) {
  const removeHub = process.argv.includes('--purge');
  uninstallGlobal({ removeHub });
}

module.exports = { uninstallGlobal };
