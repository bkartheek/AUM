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

  let humanIntent = flags.intent;
  let agentFamilies = flags.agents != null ? parseAgentList(flags.agents) : null;

  const interactive = !flags.nonInteractive && process.stdin.isTTY && !flags.intent;

  if (interactive) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    console.log('\nॐ  AUM install — align human intent with your AI agent\n');
    console.log('Foundation: Māṇḍūkya A · U · M · Turīya  →  Clarify → Plan → Act\n');

    humanIntent = await ask(
      rl,
      '1) What do you want AUM to do for you?\n   (your primary intent — one or two sentences)\n> '
    );
    if (!humanIntent) {
      humanIntent = DEFAULT_INTENT;
      console.log(`   (using default intent)\n`);
    }

    console.log('\n2) AI agents detected on this machine:');
    if (detected.length === 0) {
      console.log('   (none detected — you can still choose families to prepare)');
    } else {
      detected.forEach((f) => console.log(`   • ${FAMILIES[f].label} (${f})`));
    }
    console.log('\n   Known families: ' + Object.keys(FAMILIES).join(', '));
    const agentAns = await ask(
      rl,
      '   Hook which agents? [detected | all | none | comma list]\n> '
    );
    agentFamilies = parseAgentList(agentAns || 'detected');
    if ((agentAns || 'detected') === 'detected' && detected.length === 0) {
      agentFamilies = [];
    }

    if (agentFamilies.length > 0) {
      const ok = await ask(
        rl,
        `\n3) Write AUM routing into home configs for: ${agentFamilies.join(', ')}?\n   (required for day-one alignment; say no to skip hooks)\n   [Y/n] > `
      );
      if (/^n/i.test(ok)) {
        flags.skipHooks = true;
      }
    } else {
      flags.skipHooks = true;
    }

    rl.close();
  } else {
    humanIntent = humanIntent || DEFAULT_INTENT;
    if (agentFamilies == null) {
      agentFamilies = detected.length ? detected : ['cursor'];
    }
  }

  return {
    humanIntent,
    agentFamilies,
    detectedFamilies: detected,
    runHooks: !flags.skipHooks && agentFamilies.length > 0,
    nonInteractive: !!flags.nonInteractive
  };
}

module.exports = {
  DEFAULT_INTENT,
  parseInstallArgs,
  runInstallInterview
};
