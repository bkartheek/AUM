const fs = require('fs');
const path = require('path');
const os = require('os');

// Resolve global ~/.aum directory, fallback to local or packaged fallback
let aumDir = path.join(os.homedir(), '.aum');
if (!fs.existsSync(aumDir)) {
  aumDir = path.join(process.cwd(), '.aum');
  if (!fs.existsSync(aumDir)) {
    aumDir = path.join(__dirname, '..', 'pkg_files', '.aum');
    if (!fs.existsSync(aumDir)) {
      aumDir = path.join(__dirname, '..', 'pkg_files', '.aum_en');
    }
  }
}

// Target output path
let outputJsonPath = path.join(process.cwd(), 'docs_portal', 'src', 'docs_data.json');
if (!fs.existsSync(path.dirname(outputJsonPath))) {
  outputJsonPath = path.join(process.cwd(), '.aum', 'docs_data.json');
}

function parseFrontmatter(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) {
    return { attributes: {}, body: content };
  }
  const fmText = fmMatch[1];
  const body = fmMatch[2];
  const attributes = {};
  fmText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      let val = line.substring(colonIndex + 1).trim();
      val = val.replace(/^['"]|['"]$/g, ''); // strip outer quotes
      attributes[key] = val;
    }
  });
  return { attributes, body };
}

function processFile(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');
  const { attributes, body } = parseFrontmatter(content);
  return {
    filename: path.basename(filePath),
    attributes,
    body
  };
}

function scanDir(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md'))
    .map(file => processFile(path.join(dirPath, file)))
    .filter(Boolean);
}

function findFile(filename) {
  // Check ~/.aum
  const inAum = path.join(aumDir, filename);
  if (fs.existsSync(inAum)) return inAum;
  // Check workspace root
  const inRoot = path.join(process.cwd(), filename);
  if (fs.existsSync(inRoot)) return inRoot;
  // Check aum_framework
  const inPkg = path.join(__dirname, '..', filename);
  if (fs.existsSync(inPkg)) return inPkg;
  return null;
}

function main() {
  console.log('Starting SPHOTA OS documentation compilation...');
  
  // Manifest & Core instructions
  let manifestPath = findFile('MANIFEST.md') || findFile('MULA_SPHOTA.md');
  const manifest = processFile(manifestPath);
  const instructions = processFile(findFile('INSTRUCTIONS.md'));
  const activeContext = processFile(findFile('ACTIVE_CONTEXT.md'));
  const intent = processFile(findFile('INTENT.md'));
  const coreRules = processFile(findFile('CORE_RULES.md'));
  const philosophy = processFile(findFile('PHILOSOPHY.md'));
  
  // Configuration
  const configPath = findFile('config.json');
  const config = configPath && fs.existsSync(configPath) 
    ? JSON.parse(fs.readFileSync(configPath, 'utf8'))
    : null;
  
  // Architecture documents (all 34+ ARBs and ADRs)
  let architectureDir = path.join(process.cwd(), 'docs', 'architecture');
  if (!fs.existsSync(architectureDir)) {
    architectureDir = path.join(aumDir, 'architecture');
    if (!fs.existsSync(architectureDir)) {
      architectureDir = path.join(__dirname, '..', 'pkg_files', 'architecture_templates');
    }
  }
  
  const arbs = scanDir(architectureDir);
  const adrs = scanDir(path.join(architectureDir, 'decisions'));
  
  // Saṃskāras Memory
  let samskarasDir = path.join(aumDir, 'memory');
  if (!fs.existsSync(samskarasDir)) samskarasDir = path.join(aumDir, 'samskaras');
  const samskaras = [];
  if (fs.existsSync(samskarasDir)) {
    fs.readdirSync(samskarasDir)
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        const filePath = path.join(samskarasDir, file);
        try {
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          samskaras.push({
            filename: file,
            ...content
          });
        } catch (e) {
          console.error(`Error parsing memory log ${file}:`, e);
        }
      });
  }

  // Patterns
  let patternRegistry = null;
  const patternPath = path.join(aumDir, 'patterns', 'pattern_registry.json');
  if (fs.existsSync(patternPath)) {
    try {
      patternRegistry = JSON.parse(fs.readFileSync(patternPath, 'utf8'));
    } catch (_) {}
  }
  
  const docsData = {
    version: '1.8.1',
    title: 'SĀKSHĪ (साक्षी) & SPHOTA OS Documentation Portal',
    manifest,
    instructions,
    activeContext,
    intent,
    coreRules,
    philosophy,
    config,
    arbs,
    adrs,
    samskaras,
    patternRegistry,
    compiledAt: new Date().toISOString()
  };

  const outputDir = path.dirname(outputJsonPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputJsonPath, JSON.stringify(docsData, null, 2), 'utf8');
  console.log(`Successfully compiled docs data (${arbs.length} ARBs, ${adrs.length} ADRs, ${samskaras.length} Saṃskāras) to: ${outputJsonPath}`);
}

main();
