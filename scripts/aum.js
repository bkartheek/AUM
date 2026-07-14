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
  console.log(`\nAvailable Pañcakṛtya turn lifecycle commands:`);
  console.log(`  start   - Runs [Sṛṣṭi] context pruner (prune_context.js)`);
  console.log(`  verify  - Runs [Sthiti] self-healing test runner (run_tests_with_healing.js)`);
  console.log(`  audit   - Runs [Saṃhāra] logical fallacy auditor (aum_audit.js)`);
  console.log(`  publish - Runs [Tirobhāva] static document parser (parse_docs.js)`);
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
    default:
      console.error(`[ Error ]: Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

main();
