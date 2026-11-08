/**
 * AI agent catalog for AUM install / hook alignment.
 * Home-config writes are opt-in (install interview or --agents / aum hook --agents).
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();

/** @type {Array<{id:string,family:string,name:string,dest:string,type:string,detect:string[]}>} */
const toolHooks = [
  {
    id: 'cursor-rules',
    family: 'cursor',
    name: 'Cursor (Global Rules)',
    dest: path.join(homeDir, '.cursorrules'),
    type: 'file',
    detect: [path.join(homeDir, '.cursor')]
  },
  {
    id: 'cursor-mdc',
    family: 'cursor',
    name: 'Cursor (User Rules Dir)',
    dest: path.join(homeDir, '.cursor', 'rules', 'aum-routing.mdc'),
    type: 'dir',
    detect: [path.join(homeDir, '.cursor')]
  },
  {
    id: 'vscode-copilot',
    family: 'copilot',
    name: 'VS Code Copilot Instructions',
    dest: path.join(homeDir, '.vscode', 'copilot-instructions.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.vscode')]
  },
  {
    id: 'continue',
    family: 'continue',
    name: 'VS Code / Continue',
    dest: path.join(homeDir, '.continue', 'config.json'),
    type: 'special-continue',
    detect: [path.join(homeDir, '.continue')]
  },
  {
    id: 'cline',
    family: 'cline',
    name: 'Cline / Claude Dev',
    dest: path.join(homeDir, '.clinerules'),
    type: 'file',
    detect: [path.join(homeDir, '.cline'), path.join(homeDir, '.clinerules')]
  },
  {
    id: 'roo',
    family: 'roo',
    name: 'Roo Code',
    dest: path.join(homeDir, '.roocode'),
    type: 'file',
    detect: [path.join(homeDir, '.roocode'), path.join(homeDir, '.roo')]
  },
  {
    id: 'claude-code',
    family: 'claude',
    name: 'Claude Code',
    dest: path.join(homeDir, '.claude', 'CLAUDE.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.claude')]
  },
  {
    id: 'claude-root',
    family: 'claude',
    name: 'Claude (Root fallback)',
    dest: path.join(homeDir, 'CLAUDE.md'),
    type: 'file',
    detect: [path.join(homeDir, '.claude')]
  },
  {
    id: 'gemini',
    family: 'gemini',
    name: 'Antigravity / Gemini',
    dest: path.join(homeDir, '.gemini', 'config', 'AGENTS.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.gemini')]
  },
  {
    id: 'copilot-cli',
    family: 'copilot',
    name: 'GitHub Copilot (CLI)',
    dest: path.join(homeDir, '.copilot', 'copilot-instructions.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.copilot')]
  },
  {
    id: 'copilot-jb',
    family: 'copilot',
    name: 'GitHub Copilot (JetBrains)',
    dest: path.join(homeDir, '.config', 'github-copilot', 'intellij', 'global-copilot-instructions.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.config', 'github-copilot')]
  },
  {
    id: 'aider',
    family: 'aider',
    name: 'Aider',
    dest: path.join(homeDir, '.aider.conf.yml'),
    type: 'file',
    detect: [path.join(homeDir, '.aider.conf.yml')]
  },
  {
    id: 'windsurf',
    family: 'windsurf',
    name: 'Windsurf',
    dest: path.join(homeDir, '.windsurfrules'),
    type: 'file',
    detect: [path.join(homeDir, '.codeium'), path.join(homeDir, '.windsurfrules')]
  },
  {
    id: 'codex-agents',
    family: 'codex',
    name: 'Codex CLI',
    dest: path.join(homeDir, '.codex', 'AGENTS.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.codex')]
  },
  {
    id: 'codex-instr',
    family: 'codex',
    name: 'OpenAI Codex Instructions',
    dest: path.join(homeDir, '.codex', 'instructions.md'),
    type: 'dir',
    detect: [path.join(homeDir, '.codex')]
  }
];

const FAMILIES = {
  cursor: { label: 'Cursor', workflow: 'IDE agent chat + Composer; rules via .cursorrules / .cursor/rules' },
  claude: { label: 'Claude Code', workflow: 'CLI/IDE via CLAUDE.md; prefer aum CLI triggers in-session' },
  copilot: { label: 'GitHub Copilot', workflow: 'Inline + chat; instructions markdown in Copilot config paths' },
  continue: { label: 'Continue', workflow: 'VS Code Continue; sibling aum-orchestrator.md' },
  cline: { label: 'Cline', workflow: '.clinerules routing' },
  roo: { label: 'Roo Code', workflow: '.roocode routing' },
  gemini: { label: 'Gemini / Antigravity', workflow: 'AGENTS.md under .gemini' },
  aider: { label: 'Aider', workflow: '.aider.conf.yml message hook' },
  windsurf: { label: 'Windsurf', workflow: '.windsurfrules' },
  codex: { label: 'Codex CLI', workflow: '.codex/AGENTS.md + instructions.md' }
};

function familyDetected(family) {
  return toolHooks
    .filter((h) => h.family === family)
    .some((h) => (h.detect || []).some((p) => fs.existsSync(p)) || fs.existsSync(h.dest));
}

function detectFamilies() {
  return Object.keys(FAMILIES).filter(familyDetected);
}

function parseAgentList(raw) {
  if (!raw || raw === 'all') return Object.keys(FAMILIES);
  if (raw === 'detected' || raw === 'auto') return detectFamilies();
  if (raw === 'none') return [];
  return String(raw)
    .split(/[,+\s]+/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => FAMILIES[s]);
}

function hooksForFamilies(families) {
  const set = new Set(families || []);
  return toolHooks.filter((h) => set.has(h.family));
}

module.exports = {
  homeDir,
  toolHooks,
  FAMILIES,
  familyDetected,
  detectFamilies,
  parseAgentList,
  hooksForFamilies
};
