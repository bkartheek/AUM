const { execSync } = require('child_process');
const path = require('path');

const scriptsDir = __dirname;

function logHeader(title) {
  console.log(`======================================================`);
  console.log(`   AUM INTEGRATED INTENT ORCHESTRATOR : ${title}`);
  console.log(`======================================================`);
}

function runScript(scriptName) {
  const scriptPath = path.join(scriptsDir, scriptName);
  try {
    execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
  } catch (error) {
    process.exit(1);
  }
}

function showHelp() {
  logHeader("HELP MENU");
  console.log(`Usage: node scripts/aum.js <command>`);
  console.log(`\nAvailable turn lifecycle commands:`);
  console.log(`  start     - Runs [Sṛṣṭi] context pruner (prune_context.js)`);
  console.log(`  verify    - Runs [Sthiti] build checks (run_tests_with_healing.js)`);
  console.log(`  audit     - Runs [Saṃhāra] logical fallacy auditor (aum_audit.js)`);
  console.log(`  publish   - Runs [Tirobhāva] static document parser (parse_docs.js)`);
  console.log(`  prune     - Runs [Prāṇāyāma] context ventilator (pranayama.js)`);
  console.log(`  evolve    - Runs [Sphoṭa-Bhāvanā] rules incubator (bhavana.js)`);
  console.log(`  heal      - Runs [Catur-Upāya] error recovery resolver (upaya.js)`);
  console.log(`  compile   - Runs [Pāṇini] generative code synthesizer (panini.js)`);
  console.log(`  assert    - Runs [Catuṣkoṭi] tetralemma assertion test (catuskoti.js)`);
  console.log(`  recognize - Runs [Pratyabhijñā] environmental auditor (pratyabhijna.js)`);
  console.log(`\n======================================================`);
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    showHelp();
    return;
  }

  switch (command.toLowerCase()) {
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
    default:
      console.error(`[ Error ]: Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

main();
