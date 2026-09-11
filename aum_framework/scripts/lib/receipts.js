/**
 * SPG — Sphota Pictographic Glyphs
 * Rich transactional receipts for the AUM intent orchestrator.
 */

const SPG = {
  aum: 'ॐ',
  spark: '☄️',
  seed: '🌱',
  resolve: '🧵',
  beat: '⏱️',
  drone: '🥁',
  concern: '🌊',
  intake: '👂',
  blueprint: '🗺️',
  verify: '🔍',
  manifest: '✨',
  install: '🌐',
  sync: '🔄',
  uninstall: '🧹',
  hook: '🪝',
  agent: '🤖',
  develop: '🛠️',
  diagnostic: '🩺',
  guide: '🧭',
  memory: '🧠',
  success: '✅',
  warn: '⚠️',
  fail: '❌',
  lock: '🧘',
  portal: '🚪',
  globe: '🌍',
  sequence: '📿',
  intent: '🎯'
};

function line(char = '═', width = 69) {
  return char.repeat(width);
}

function pad(label, value, labelWidth = 12) {
  const l = String(label).padEnd(labelWidth, ' ');
  return `  ${l}: ${value}`;
}

function receipt(titleIcon, title, rows = [], footerIcon = SPG.aum) {
  const header = `${titleIcon}  [ ${title} ]`;
  const body = rows.map(([k, v]) => pad(k, v)).join('\n');
  return [
    line(),
    `            ${header}`,
    line(),
    body,
    line('─'),
    `  ${footerIcon}  AUM Intent Orchestrator  ·  SPG Receipt`,
    line()
  ].join('\n');
}

function printReceipt(titleIcon, title, rows, footerIcon) {
  const text = receipt(titleIcon, title, rows, footerIcon);
  console.log(text);
  return text;
}

function focusLock(sentence) {
  const text = `${SPG.lock} [ DHĀRAṆĀ FOCUS LOCK ]: ${sentence}`;
  console.log(text);
  return text;
}

module.exports = { SPG, receipt, printReceipt, focusLock, line };
