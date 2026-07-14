const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const ignorePatterns = [
  /node_modules/,
  /dist/,
  /\.git/,
  /\.gemini/,
  /\.github/,
  /package-lock\.json/,
  /yarn\.lock/,
  /\.DS_Store/
];

function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM PRATYĀHĀRA CONTEXT COMPRESSOR`);
  console.log(`======================================================`);
}

function shouldIgnore(name) {
  return ignorePatterns.some(pattern => pattern.test(name));
}

function scan(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(rootDir, fullPath);
    
    if (shouldIgnore(relativePath)) return;
    
    if (fs.statSync(fullPath).isDirectory()) {
      scan(fullPath, fileList);
    } else {
      fileList.push(relativePath);
    }
  });
  return fileList;
}

function main() {
  logHeader();
  console.log(`[ Pratyāhāra ]: Abstracting senses. Scanning directory tree...\n`);
  
  const files = scan(rootDir);
  console.log(`Filtered File Inventory (${files.length} active files):`);
  files.forEach(f => {
    console.log(`  [ Dharmin ]: ${f}`);
  });
  
  console.log(`\n[ PRATYĀHĀRA ]: Abstraction complete. Context is pruned.`);
}

main();
