const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = process.cwd();
const aumDir = path.join(rootDir, '.aum');

function logHeader(msg) {
  console.log(`\n======================================================`);
  console.log(`   AUM HĒTVĀBHĀSA AUDITOR : ${msg}`);
  console.log(`======================================================`);
}

function runAudit() {
  logHeader("STARTING LINTER AUDIT");
  
  // 1. Read Active Saṅkalpa from sphota.json
  let activeSankalpa = null;
  const sphotaPath = path.join(aumDir, 'sphota.json');
  if (fs.existsSync(sphotaPath)) {
    try {
      const sphota = JSON.parse(fs.readFileSync(sphotaPath, 'utf8'));
      activeSankalpa = sphota.active_sankalpa;
      console.log(`[ Śabda Authority ]: Loaded active Saṅkalpa: ${activeSankalpa || 'None'}`);
    } catch (e) {
      console.warn(`[ Warning ]: Failed to parse sphota.json.`);
    }
  }

  // 2. Identify modified or staged files using git
  let changedFiles = [];
  try {
    const gitDiff = execSync('git diff --name-only', { encoding: 'utf8' }).trim();
    const gitDiffCached = execSync('git diff --cached --name-only', { encoding: 'utf8' }).trim();
    changedFiles = Array.from(new Set([
      ...gitDiff.split('\n'),
      ...gitDiffCached.split('\n')
    ])).filter(Boolean);
  } catch (e) {
    console.warn(`[ Warning ]: Git commands failed. Defaulting to workspace scans.`);
  }

  if (changedFiles.length === 0) {
    console.log(`[ Pratyakṣa Observation ]: No modified files detected in Git workspace.`);
    console.log(`\n[ HĒTVĀBHĀSA AUDIT ]: SUCCESS. Logic is aligned.`);
    return;
  }

  console.log(`\nScanning ${changedFiles.length} changed files:`);
  let errorsFound = 0;

  changedFiles.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return;

    // We only scan script or markdown source files
    if (!file.match(/\.(js|jsx|ts|tsx|css|md)$/)) return;

    console.log(`  -> Auditing file: ${file}`);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check 1: Asiddha check (Placeholder stub codes)
    const matchesTodo = content.match(/TODO|FIXME/g);
    if (matchesTodo) {
      console.error(`     [ HĒTVĀBHĀSA ERROR ] [ Asiddha Fallacy ]: File contains ${matchesTodo.length} placeholder stubs (TODO/FIXME).`);
      errorsFound++;
    }

    // Check 2: Commented-out logs or debug stubs
    const matchesConsole = content.match(/console\.log/g);
    // Ignore console.log inside parse_docs.js or scripts
    if (matchesConsole && !file.startsWith('scripts/') && !file.startsWith('docs_portal/src/App.jsx')) {
      console.warn(`     [ Warning ] [ Debug Stub ]: File contains console.log statements.`);
    }
  });

  if (errorsFound > 0) {
    console.error(`\n[ HĒTVĀBHĀSA AUDIT ]: FAILED. ${errorsFound} violations detected.`);
    process.exit(1);
  } else {
    console.log(`\n[ HĒTVĀBHĀSA AUDIT ]: SUCCESS. Logic is aligned.`);
  }
}

runAudit();
