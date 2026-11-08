#!/usr/bin/env node
const path = require('path');
const { SPG, printReceipt } = require('./lib/receipts');
const { diagram, summarizeAll, QUARTERS, STAGE_ORDER } = require('./lib/mandukya');

const scriptsDir = __dirname;

/** Metaphor demos outside the Māṇḍūkya beat cycle — kept, labeled. */
const EXPERIMENTAL = new Set([
  'heal', 'compile', 'assert', 'recognize', 'evolve', 'prune', 'start', 'publish'
]);

function runScript(scriptName, additionalArgs = []) {
  const scriptPath = path.join(scriptsDir, scriptName);
  const { spawnSync } = require('child_process');
  const result = spawnSync(process.execPath, [scriptPath, ...additionalArgs], {
    stdio: 'inherit'
  });
  if (result.status && result.status !== 0) process.exit(result.status);
}

function showHelp() {
  console.log(`
${SPG.aum}  AUM — Māṇḍūkya Intent Orchestrator
${'═'.repeat(64)}
  Foundation: Māṇḍūkya Upaniṣad — A · U · M · Silence (Turīya)
  Practical lens through the quarters: Clarify → Plan → Act

${diagram()}

  Spine: ${summarizeAll()}

  ── A  JĀGRAT (waking) · beat=intake · CLARIFY ─────────────────
  distill <text>     Meet the gross prompt; strip voice noise
  spark <text>       Paśyantī seed — raw idea
  concern <text>     Paśyantī seed — risk / symptom
  resolve <title>    Open Saṅkalpa (starts in Jāgrat / intake)
  drone              Context Anchor under Turīya witness

  ── U  SVAPNA (dreaming) · beat=blueprint · PLAN ─────────────
  beat next|set      Advance / set quarter (intake…manifest)
  anchor             Subtle mental schema (<380 tokens)

  ── M  SUṢUPTI (deep sleep) · beat=verification · PLAN/still ─
  lock [reason]      Hold action in the causal seed
  audit              Hētvābhāsa scan before manifestation

  ── ·  TURĪYA (silence) · beat=manifest · ACT ────────────────
  unlock             Release seed → Vaikharī (code allowed)
  verify             Build check after expression
  intent             Print Māṇḍūkya map + CPA lens
  mandukya           Alias of intent — show four quarters

  ── RUNTIME (Turīya nervous system) ──────────────────────────
  install [--intent "…" --agents cursor,claude --yes --no-hooks]
                     Capture human intent, align agents, seed Māṇḍūkya hub
  sync               Refresh runtime; preserve ACTIVE_CONTEXT + alignment
  hook [--agents …|--all]  Opt-in inject routing into home agent configs
  wrap graph init domain uninstall
  test-global  test-thorough

  ── EXPERIMENTAL (not Māṇḍūkya beats) ────────────────────────
  start prune evolve heal compile assert recognize publish

  Docs: INTENT.md · arb_000_mandukya_foundation.md
${'═'.repeat(64)}
`);
}

function showMandukyaIntent() {
  const rows = STAGE_ORDER.map((b) => {
    const q = QUARTERS[b];
    return [q.phoneme, `${q.beat} · ${q.state_en} · ${q.cpa}`];
  });
  printReceipt(SPG.aum, 'MĀṆḌŪKYA QUARTERS', [
    ['Syllable', 'A · U · M · Amātra (silence)'],
    ...rows,
    ['CPA', 'Clarify→Plan→Act expressed through the quarters'],
    ['Witness', 'Turīya = Om / ORCHESTRATOR / drone'],
    ['Code', 'Only in Turīya beat (manifest) or Proceed'],
    ['Doc', 'aum_framework/INTENT.md']
  ], SPG.sequence);
  console.log('\n' + diagram());
}

function main() {
  const args = process.argv.slice(2);
  const command = (args[0] || '').toLowerCase();

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    return;
  }

  if (EXPERIMENTAL.has(command)) {
    console.error(
      `${SPG.warn} "${command}" is experimental (outside Māṇḍūkya beats). ` +
      `Quarters: A intake · U blueprint · M verification · · manifest. See INTENT.md`
    );
  }

  switch (command) {
    case 'intent':
    case 'mandukya':
      showMandukyaIntent();
      break;
    case 'anchor':
      runScript('aum_anchor.js', args.slice(1));
      break;
    case 'distill':
      runScript('aum_distiller.js', args.slice(1));
      break;
    case 'graph':
      runScript('aum_intent_graph.js', args.slice(1));
      break;
    case 'lock':
    case 'unlock':
      runScript('aum_lock.js', [command, ...args.slice(1)]);
      break;
    case 'wrap':
      runScript('aum_wrap.js', args.slice(1));
      break;
    case 'install':
      // Supports: --intent "…" --agents cursor,claude --yes|--non-interactive --no-hooks
      runScript('aum_install.js', args.slice(1));
      break;
    case 'sync':
      runScript('aum_sync.js', args.slice(1));
      break;
    case 'uninstall':
      runScript('aum_uninstall.js', args.slice(1));
      break;
    case 'hook':
      // Supports: --agents cursor,claude | --all
      runScript('aum_hook.js', args.slice(1));
      break;
    case 'spark':
    case 'concern':
    case 'resolve':
    case 'beat':
    case 'drone':
    case 'domain':
      runScript('aum_intent.js', args);
      break;
    case 'start':
      runScript('prune_context.js');
      break;
    case 'verify':
      runScript('run_tests_with_healing.js');
      break;
    case 'audit':
      runScript('aum_audit.js');
      break;
    case 'publish':
      runScript('parse_docs.js');
      break;
    case 'prune':
      runScript('pranayama.js');
      break;
    case 'evolve':
      runScript('bhavana.js');
      break;
    case 'heal':
      runScript('upaya.js');
      break;
    case 'compile':
      runScript('panini.js');
      break;
    case 'assert':
      runScript('catuskoti.js');
      break;
    case 'recognize':
      runScript('pratyabhijna.js');
      break;
    case 'init':
      if (args.includes('--global')) {
        runScript('aum_install.js', args.slice(1).filter(a => a !== '--global'));
      } else {
        runScript('aum_init.js', args.slice(1));
      }
      break;
    case 'test-global':
      runScript('aum_selftest.js', args.slice(1));
      break;
    case 'test-thorough':
      runScript('aum_thorough_test.js', args.slice(1));
      break;
    default:
      console.error(`${SPG.fail} Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

main();
