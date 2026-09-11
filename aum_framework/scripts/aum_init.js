const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');
let rlInstance = null;
let pipedAnswers = [];
let pipedIndex = 0;

const hasYesFlag = process.argv.includes('-y') || process.argv.includes('--yes') || process.argv.includes('--non-interactive');
const isGlobal = process.argv.includes('--global');
const { runHooks } = require('./aum_hook.js');

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

function appendGitignore(targetDir) {
  const gitignorePath = path.join(targetDir, '.gitignore');
  const aumIgnoreSection = `
# AUM Cognitive Framework ignores
.aum/sphota.json
.aum/samskaras/
.aum/intent_awakening/
.aum/sankalpas/sankalpa_*.md

# English mode ignores
.aum/manifest.json
.aum/memory/
.aum/ideas/
.aum/tasks/task_*.md
`;
  
  if (fs.existsSync(gitignorePath)) {
    let content = fs.readFileSync(gitignorePath, 'utf8');
    if (!content.includes('.aum/sphota.json') && !content.includes('.aum/manifest.json')) {
      content = content.trim() + '\n' + aumIgnoreSection;
      fs.writeFileSync(gitignorePath, content, 'utf8');
      console.log(`[ Config ]: Appended AUM exclusions to existing .gitignore`);
    }
  } else {
    fs.writeFileSync(gitignorePath, aumIgnoreSection.trim() + '\n', 'utf8');
    console.log(`[ Config ]: Created .gitignore with AUM exclusions`);
  }
}

  async function initProject() {
    try {
      await prepareInput();
      const targetDir = isGlobal ? require('os').homedir() : process.cwd();
      const pkgFilesDir = path.join(__dirname, '..', 'pkg_files');
      const isUpgrade = fs.existsSync(path.join(targetDir, '.aum'));
    
    console.log(`======================================================`);
    console.log(`   ॐ AUM COGNITIVE FRAMEWORK: INITIALIZER`);
    console.log(`======================================================`);
    console.log(`  Target Space : ${targetDir} ${isGlobal ? '(GLOBAL)' : ''}`);
    console.log(`  Mode         : ${isUpgrade ? '🔄 UPGRADE MODE' : '✨ FRESH INSTALLATION'}`);
    console.log(`======================================================\n`);
  
  let projectName = "My Dharmic Project";
  let presetChoice = "1";
  let currentLanguage = "1";
  let architectureDir = "docs/architecture";
  
  if (isUpgrade) {
    if (fs.existsSync(path.join(targetDir, '.aum', 'manifest.json'))) {
      currentLanguage = "2";
    }
  }
  let languageChoice = currentLanguage;

  if (isUpgrade) {
    console.log(`[ Info ]: Existing AUM installation detected. Preserving history logs, active sankalpas, and samskaras.`);
    console.log(`[ Info ]: Upgrading core rules, Yogi instructions, and static templates...\n`);
    
    // Merge existing config
    const configPath = path.join(targetDir, '.aum', 'config.json');
    if (fs.existsSync(configPath)) {
      try {
        const existingConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        projectName = existingConfig.project_name || projectName;
        architectureDir = existingConfig.architecture_dir || architectureDir;
      } catch (e) {}
    }

    if (!hasYesFlag) {
      console.log(`\nSelect Framework Language Version for Upgrade:`);
      console.log(`  1) Sanskrit Terminology (Original Vedic Mapping) ${currentLanguage === "1" ? '[Current]' : ''}`);
      console.log(`  2) English Terminology (Localized Software Mapping) ${currentLanguage === "2" ? '[Current]' : ''}`);
      languageChoice = await askQuestion(`Select option (1-2) [${currentLanguage}]: `);
      languageChoice = languageChoice.trim() || currentLanguage;
    }
    
    if (languageChoice !== currentLanguage) {
      console.log(`\n[ Migration ]: Converting workspace structure to new language choice...`);
      const aumDest = path.join(targetDir, '.aum');
      if (languageChoice === "2") {
        // Sanskrit -> English
        const mappings = [
          { src: 'sphota.json', dest: 'manifest.json' },
          { src: 'sankalpas', dest: 'tasks' },
          { src: 'samskaras', dest: 'memory' },
          { src: 'intent_awakening', dest: 'ideas' }
        ];
        mappings.forEach(m => {
          if (fs.existsSync(path.join(aumDest, m.src))) fs.renameSync(path.join(aumDest, m.src), path.join(aumDest, m.dest));
        });
        if (fs.existsSync(path.join(aumDest, 'MULA_SPHOTA.md'))) fs.unlinkSync(path.join(aumDest, 'MULA_SPHOTA.md'));
      } else {
        // English -> Sanskrit
        const mappings = [
          { src: 'manifest.json', dest: 'sphota.json' },
          { src: 'tasks', dest: 'sankalpas' },
          { src: 'memory', dest: 'samskaras' },
          { src: 'ideas', dest: 'intent_awakening' }
        ];
        mappings.forEach(m => {
          if (fs.existsSync(path.join(aumDest, m.src))) fs.renameSync(path.join(aumDest, m.src), path.join(aumDest, m.dest));
        });
        if (fs.existsSync(path.join(aumDest, 'MANIFEST.md'))) fs.unlinkSync(path.join(aumDest, 'MANIFEST.md'));
      }
    }

  } else if (hasYesFlag) {
    console.log(`[ Info ]: Non-interactive mode activated. Using default configurations.`);
  } else {
    // Fresh setup prompt inputs
    projectName = await askQuestion(`-> Enter Project Name [${projectName}]: `);
    projectName = projectName.trim() || "My Dharmic Project";
    
    architectureDir = await askQuestion(`-> Enter architecture records directory [${architectureDir}]: `);
    architectureDir = architectureDir.trim() || "docs/architecture";
    
    console.log(`\nSelect Dharmic Guardrails Preset:`);
    console.log(`  1) Strict Guardrails (Yamas & Niyamas, Pre-commit audits, verification checks) [Recommended]`);
    console.log(`  2) Lightweight Mode (Yogi guidelines and rules only)`);
    presetChoice = await askQuestion(`Select option (1-2) [1]: `);
    presetChoice = presetChoice.trim() || "1";

    console.log(`\nSelect Framework Language Version:`);
    console.log(`  1) Sanskrit Terminology (Original Vedic Mapping) [Recommended]`);
    console.log(`  2) English Terminology (Localized Software Mapping)`);
    languageChoice = await askQuestion(`Select option (1-2) [1]: `);
    languageChoice = languageChoice.trim() || "1";
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
    path.join('.aum', 'intent_awakening'),
    path.join('.aum', 'manifest.json'),
    path.join('.aum', 'tasks'),
    path.join('.aum', 'memory'),
    path.join('.aum', 'ideas')
  ];
  
  filesToCopy.forEach(file => {
    let srcFile = file;
    if (file === '.aum' && languageChoice === "2") {
      srcFile = '.aum_en';
    }
    const srcPath = path.join(pkgFilesDir, srcFile);
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

  // Copy architecture templates to target architectureDir
  const archTemplatesSrc = path.join(pkgFilesDir, 'architecture_templates');
  const archTemplatesDest = path.join(targetDir, architectureDir);
  if (fs.existsSync(archTemplatesSrc)) {
    // Upgrade mode should preserve existing custom ADRs/blueprints inside this folder
    copyRecursiveSync(archTemplatesSrc, archTemplatesDest, { overwrite: !isUpgrade });
  }
  
  // Customize config.json
  const destConfigPath = path.join(targetDir, '.aum', 'config.json');
  if (fs.existsSync(destConfigPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(destConfigPath, 'utf8'));
      config.project_name = projectName;
      config.architecture_dir = architectureDir;
      
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
  
  if (!isGlobal) {
    appendGitignore(targetDir);
  } else {
    console.log(`[ Config ]: Skipping .gitignore creation for global install.`);
  }
  
  closeReadline();
  
  console.log(`\n======================================================`);
  if (isUpgrade) {
    console.log(`[ Success ]: AUM Framework upgrade complete.`);
  } else {
    console.log(`[ Success ]: Project initialized successfully.`);
    if (isGlobal) {
        console.log(`[ Notice ]: Global Central Nervous System is active at ~/.aum`);
        try {
          execSync('npm run embed:start &', { stdio: 'ignore' });
        } catch (e) { /* ignore */ }
    } else {
      console.log(`\nNext Steps:`);
      console.log(`  1. Load the project workspace folder in VS Code, Cursor, or Cline.`);
      console.log(`  2. Yogi will automatically take over using .agents/ and rules!`);
      console.log(`  3. Run 'npx aum start' to begin your first turn resolve.`);
    }
  }
  console.log(`======================================================`);

  if (isGlobal) {
    runHooks();
  }

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
