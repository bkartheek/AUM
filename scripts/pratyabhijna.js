const os = require('os');
const fs = require('fs');
const path = require('path');

function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM PRATYABHIJÑĀ SELF-RECOGNITION AUDITOR`);
  console.log(`======================================================`);
}

function run() {
  logHeader();
  console.log(`[ Pratyabhijñā ]: Auditing host system attributes...`);
  
  const platform = os.platform();
  const nodeVersion = process.version;
  const targetDir = path.join(__dirname, '..');
  
  let hasWriteAccess = false;
  try {
    fs.accessSync(targetDir, fs.constants.W_OK);
    hasWriteAccess = true;
  } catch (e) {
    // Write access denied
  }
  
  console.log(`\n--- System Diagnostics ---`);
  console.log(`  [ Locus Platform ]   : ${platform}`);
  console.log(`  [ Node Engine ]      : ${nodeVersion}`);
  console.log(`  [ Directory Space ]  : ${targetDir}`);
  console.log(`  [ Write Authority ]  : ${hasWriteAccess ? 'GRANTED' : 'DENIED'}`);
  
  console.log(`\n[ PRATYABHIJÑĀ ]: Recognition complete. Agent capabilities aligned.`);
  console.log(`======================================================`);
}

run();
