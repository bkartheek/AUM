const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function initProject() {
  const targetDir = process.cwd();
  console.log(`======================================================`);
  console.log(`   AUM FRAMEWORK: INITIALIZING PROJECT`);
  console.log(`======================================================`);
  console.log(`Target Directory: ${targetDir}`);
  
  const pkgFilesDir = path.join(__dirname, '..', 'pkg_files');
  
  const filesToCopy = [
    '.aum',
    '.agents',
    '.cursorrules',
    '.clinerules',
    'CLAUDE.md'
  ];
  
  filesToCopy.forEach(file => {
    const srcPath = path.join(pkgFilesDir, file);
    const destPath = path.join(targetDir, file);
    
    if (fs.existsSync(srcPath)) {
      console.log(`-> Copying ${file}...`);
      copyRecursiveSync(srcPath, destPath);
    } else {
      console.warn(`[ Warning ]: Source file not found: ${srcPath}`);
    }
  });
  
  console.log(`\n[ Success ]: Project initialized with AUM Framework successfully.`);
  console.log(`======================================================`);
}

initProject();
