#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { SPG, printReceipt } = require('./lib/receipts');

const scriptsDir = __dirname;

function runScript(scriptName, additionalArgs = []) {
  const scriptPath = path.join(scriptsDir, scriptName);
  const { spawnSync } = require('child_process');
  const result = spawnSync(process.execPath, [scriptPath, ...additionalArgs], {
    stdio: 'inherit'
  });
  if (result.status && result.status !== 0) process.exit(result.status);
}

function showHelp() {
  printReceipt(SPG.aum, 'AUM SPHOTA INTENT ORCHESTRATOR', [
    ['Usage', 'aum <command> [args]'],
    ['anchor', 'Synthesize <380 token context anchor'],
    ['distill', 'Sub-15ms local voice/speech intent filter'],
    ['lock / unlock', 'Engage/release mechanical write lock'],
    ['wrap', 'Save session snapshot (Yoga Saṃskāra)'],
    ['graph', 'View/manage multi-intent DAG'],
    ['install', 'Install global hub (~/.aum) + bridge hooks'],
    ['sync', 'Sync package → global runtime (preserve state)'],
    ['hook', 'Re-inject instructions into AI agents'],
    ['spark', 'Capture raw idea'],
    ['concern', 'Capture worry / symptom'],
    ['resolve', 'Open sequenced resolve'],
    ['beat', 'next | set <stage>'],
    ['drone', 'Print context anchor'],
    ['audit', 'Fallacy audit on git changes'],
    ['verify', 'Build / heal runner']
  ], SPG.globe);
}

function main() {
  const args = process.argv.slice(2);
  const command = (args[0] || '').toLowerCase();

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    return;
  }

  switch (command) {
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
      runScript('aum_install.js', args.slice(1));
      break;
    case 'sync':
      runScript('aum_sync.js', args.slice(1));
      break;
    case 'uninstall':
      runScript('aum_uninstall.js', args.slice(1));
      break;
    case 'hook':
      runScript('aum_hook.js', args.slice(1));
      break;
    case 'spark':
    case 'concern':
    case 'resolve':
    case 'beat':
    case 'drone':
    case 'domain':
      runScript('aum_intent.js', args); // pass --global to force ~/.aum even inside a local project
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
      // Prefer new global install when --global
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
