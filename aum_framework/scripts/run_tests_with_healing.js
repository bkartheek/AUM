const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

let portalDir = path.join(__dirname, '..', 'docs_portal');
if (!fs.existsSync(portalDir)) {
  portalDir = path.join(__dirname, '..', '..', 'docs_portal');
}

function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM PRĀYAŚCITTA SELF-HEALING RUNNER`);
  console.log(`======================================================`);
}

function runBuild(attempt = 1) {
  console.log(`[ Build Attempt ${attempt} ]: Compiling Vite application...`);
  try {
    const output = execSync('npm run build', { cwd: portalDir, encoding: 'utf8', stdio: 'pipe' });
    console.log(output);
    console.log(`\n[ PRĀYAŚCITTA ]: Compilation completed successfully. No healing required.`);
  } catch (error) {
    const errorLog = error.stdout + '\n' + error.stderr;
    console.error(`\n[ Compilation Failure Detected ]: Analysis in progress...`);
    
    // Check for Rolldown native binding skipped installer bugs
    if (errorLog.includes('rolldown') || errorLog.includes('binding') || errorLog.includes('native')) {
      console.log(`\n[ Prāyaścitta Profile matched ]: Missing Rolldown native compiler bindings.`);
      console.log(`[ Action ]: Executing corrective installation...`);
      
      try {
        execSync('npm install @rolldown/binding-linux-x64-gnu --legacy-peer-deps', { cwd: portalDir, stdio: 'inherit' });
        console.log(`\n[ Prāyaścitta ]: Recovery complete. Retrying compile...`);
        runBuild(attempt + 1);
      } catch (installErr) {
        console.error(`[ Error ]: Self-healing installation failed. Cannot recover.`, installErr);
        process.exit(1);
      }
    } else {
      console.error(`[ Error ]: Unrecognized compilation error. Cannot self-heal.`, errorLog);
      process.exit(1);
    }
  }
}

function main() {
  logHeader();
  runBuild();
}

main();
