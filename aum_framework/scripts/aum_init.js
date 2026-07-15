const fs = require('fs');
const path = require('path');
const readline = require('readline');

let rlInstance = null;
let pipedAnswers = [];
let pipedIndex = 0;

const hasYesFlag = process.argv.includes('-y') || process.argv.includes('--yes') || process.argv.includes('--non-interactive');

async function prepareInput() {
  if (!process.stdin.isTTY && !hasYesFlag) {
    return new Promise(resolve => {
      let data = '';
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', chunk => {
        data += chunk;
      });
      process.stdin.on('end', () => {
        pipedAnswers = data.split(/\r?\n/).map(s => s.trim());
        resolve();
      });
    });
  }
}

async function askQuestion(query) {
  if (!process.stdin.isTTY) {
    const ans = pipedAnswers[pipedIndex] !== undefined ? pipedAnswers[pipedIndex] : '';
    pipedIndex++;
    return ans;
  }
  
  if (!rlInstance) {
    rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  return new Promise(resolve => rlInstance.question(query, ans => {
    resolve(ans);
  }));
}

function closeReadline() {
  if (rlInstance) {
    rlInstance.close();
    rlInstance = null;
  }
}

function copyRecursiveSync(src, dest, options = {}) {
  const { overwrite = true, preserveFiles = [] } = options;
  
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      const childSrc = path.join(src, childItemName);
      const childDest = path.join(dest, childItemName);
      
      // Check if this path should be skipped or preserved
      const shouldPreserve = preserveFiles.some(p => {
        const fullPreservePath = path.join(process.cwd(), p);
        return childDest.startsWith(fullPreservePath);
      });
      
      if (shouldPreserve && fs.existsSync(childDest)) {
        return;
      }
      copyRecursiveSync(childSrc, childDest, options);
    });
  } else {
    if (fs.existsSync(dest) && !overwrite) {
      return;
    }
    fs.copyFileSync(src, dest);
  }
}

async function initProject() {
  try {
    await prepareInput();
    const targetDir = process.cwd();
    const pkgFilesDir = path.join(__dirname, '..', 'pkg_files');
    const isUpgrade = fs.existsSync(path.join(targetDir, '.aum'));
    
    console.log(`======================================================`);
    console.log(`   ॐ AUM COGNITIVE FRAMEWORK: INITIALIZER`);
  console.log(`======================================================`);
  console.log(`  Target Space : ${targetDir}`);
  console.log(`  Mode         : ${isUpgrade ? '🔄 UPGRADE MODE' : '✨ FRESH INSTALLATION'}`);
  console.log(`======================================================\n`);
  
  let projectName = "My Dharmic Project";
  let presetChoice = "1";
  
  if (isUpgrade) {
    console.log(`[ Info ]: Existing AUM installation detected. Preserving history logs, active sankalpas, and samskaras.`);
    console.log(`[ Info ]: Upgrading core rules, Yogi instructions, and static templates...\n`);
    
    // Merge existing config
    const configPath = path.join(targetDir, '.aum', 'config.json');
    if (fs.existsSync(configPath)) {
      try {
        const existingConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        projectName = existingConfig.project_name || projectName;
      } catch (e) {}
    }
  } else if (hasYesFlag) {
    console.log(`[ Info ]: Non-interactive mode activated. Using default configurations.`);
  } else {
    // Fresh setup prompt inputs
    projectName = await askQuestion(`-> Enter Project Name [${projectName}]: `);
    projectName = projectName.trim() || "My Dharmic Project";
    
    console.log(`\nSelect Dharmic Guardrails Preset:`);
    console.log(`  1) Strict Guardrails (Yamas & Niyamas, Pre-commit audits, verification checks) [Recommended]`);
    console.log(`  2) Lightweight Mode (Yogi guidelines and rules only)`);
    presetChoice = await askQuestion(`Select option (1-2) [1]: `);
    presetChoice = presetChoice.trim() || "1";
  }
  
  // List files to copy
  const filesToCopy = [
    '.aum',
    '.agents',
    '.cursorrules',
    '.clinerules',
    'CLAUDE.md'
  ];
  
  // Dynamic user files to preserve during upgrades
  const preserveFiles = [
    path.join('.aum', 'sphota.json'),
    path.join('.aum', 'sankalpas'),
    path.join('.aum', 'samskaras'),
    path.join('.aum', 'intent_awakening')
  ];
  
  filesToCopy.forEach(file => {
    const srcPath = path.join(pkgFilesDir, file);
    const destPath = path.join(targetDir, file);
    
    if (fs.existsSync(srcPath)) {
      if (file === '.aum' && isUpgrade) {
        // Copy recursively but preserve user-owned files
        copyRecursiveSync(srcPath, destPath, { overwrite: true, preserveFiles });
      } else {
        copyRecursiveSync(srcPath, destPath, { overwrite: true });
      }
    } else {
      console.warn(`[ Warning ]: Template source not found: ${srcPath}`);
    }
  });
  
  // Customize config.json
  const destConfigPath = path.join(targetDir, '.aum', 'config.json');
  if (fs.existsSync(destConfigPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(destConfigPath, 'utf8'));
      config.project_name = projectName;
      
      if (!isUpgrade && presetChoice === "2") {
        // Strip out strict yamas and pre-commit niyamas for Lightweight mode
        config.yamas = [
          "Maintain complete file isolation: do not read/write outside the workspace"
        ];
        config.niyamas = [
          "Ensure state alignment using 'AUM: DRONE' at the start of each session",
          "Every communication must respect formatting schema (headings, alerts, bolding)"
        ];
      }
      
      fs.writeFileSync(destConfigPath, JSON.stringify(config, null, 2), 'utf8');
    } catch (e) {
      console.error(`[ Error ]: Failed to customize config.json:`, e);
    }
  }
  closeReadline();
  
  console.log(`\n======================================================`);
  if (isUpgrade) {
    console.log(`[ Success ]: AUM Framework upgrade complete.`);
  } else {
    console.log(`[ Success ]: Project initialized successfully.`);
    console.log(`\nNext Steps:`);
    console.log(`  1. Load the project workspace folder in VS Code, Cursor, or Cline.`);
    console.log(`  2. Yogi will automatically take over using .agents/ and rules!`);
    console.log(`  3. Run 'npx aum start' to begin your first turn resolve.`);
  }
  console.log(`======================================================`);
  } catch (err) {
    console.error(`\n[ Fatal Error ]: Initializer failed:`, err);
    closeReadline();
    process.exit(1);
  }
}

// Check if run directly or imported
if (require.main === module) {
  initProject().catch(err => {
    console.error("Unhandled error:", err);
    process.exit(1);
  });
}

module.exports = { initProject };
