/**
 * Install-time alignment: capture human intent + preferred AI agents.
 */

const readline = require('readline');
const { detectFamilies, FAMILIES, parseAgentList } = require('./agents');

const DEFAULT_INTENT =
  'Orchestrate my work with AI coding agents through Clarify → Plan → Act on the Māṇḍūkya quarters (A·U·M·Turīya), so intent is captured before code.';

function parseInstallArgs(argv = process.argv.slice(2)) {
  const out = {
    intent: null,
    agents: null,
    nonInteractive: false,
    skipHooks: false,
    yes: false
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--non-interactive' || a === '-y' || a === '--yes') {
      out.nonInteractive = true;
      out.yes = true;
    } else if (a === '--no-hooks') {
      out.skipHooks = true;
    } else if (a === '--intent' && argv[i + 1]) {
      out.intent = argv[++i];
    } else if (a.startsWith('--intent=')) {
      out.intent = a.slice('--intent='.length);
    } else if (a === '--agents' && argv[i + 1]) {
      out.agents = argv[++i];
    } else if (a.startsWith('--agents=')) {
      out.agents = a.slice('--agents='.length);
    }
  }
  return out;
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (ans) => resolve(String(ans || '').trim())));
}

async function runInstallInterview(opts = {}) {
  const flags = { ...parseInstallArgs(), ...opts };
  const detected = detectFamilies();

  let humanIntent = flags.intent || DEFAULT_INTENT;
  let agentFamilies = flags.agents != null ? parseAgentList(flags.agents) : (detected.length ? detected : ['cursor']);

  // By default, install silently and smoothly without asking CLI prompts
  // Users who explicitly pass --interactive can still opt into interactive Q&A
  const interactive = flags.interactive === true && process.stdin.isTTY;

  if (interactive) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    console.log('\nॐ  SĀKSHĪ install — align human intent with your AI agents\n');
    console.log('Foundation: Māṇḍūkya A · U · M · Turīya  →  Clarify → Plan → Act\n');

    const ansIntent = await ask(
      rl,
      '1) What do you want SĀKSHĪ to do for you?\n   (your primary intent — press enter for default)\n> '
    );
    if (ansIntent) humanIntent = ansIntent;

    console.log('\n2) AI agents detected on this machine:');
    if (detected.length === 0) {
      console.log('   (none detected — configuring cursor default)');
    } else {
      detected.forEach((f) => console.log(`   • ${FAMILIES[f].label} (${f})`));
    }
    const agentAns = await ask(
      rl,
      '   Hook which agents? [detected | all | none | comma list]\n> '
    );
    agentFamilies = parseAgentList(agentAns || 'detected');
    if ((agentAns || 'detected') === 'detected' && detected.length === 0) {
      agentFamilies = ['cursor'];
    }

    rl.close();
  }

  return {
    humanIntent,
    agentFamilies,
    detectedFamilies: detected,
    runHooks: !flags.skipHooks && agentFamilies.length > 0,
    nonInteractive: !interactive
  };
}

module.exports = {
  DEFAULT_INTENT,
  parseInstallArgs,
  runInstallInterview
};
