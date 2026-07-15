const fs = require('fs');
const path = require('path');

let aumDir = path.join(process.cwd(), '.aum');
if (!fs.existsSync(aumDir)) {
  aumDir = path.join(__dirname, '..', 'pkg_files', '.aum');
}
let outputJsonPath = path.join(process.cwd(), '.aum', 'docs_data.json');
const devPortalPath = path.join(process.cwd(), 'docs_portal', 'src', 'docs_data.json');
if (fs.existsSync(path.dirname(devPortalPath))) {
  outputJsonPath = devPortalPath;
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
  if (!fs.existsSync(filePath)) return null;
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

function main() {
  console.log('Starting doc parsing...');
  
  const manifest = processFile(path.join(aumDir, 'MULA_SPHOTA.md'));
  const instructions = processFile(path.join(aumDir, 'INSTRUCTIONS.md'));
  
  const configPath = path.join(aumDir, 'config.json');
  const config = fs.existsSync(configPath) 
    ? JSON.parse(fs.readFileSync(configPath, 'utf8'))
    : null;
  
  let architectureDir = path.join(aumDir, 'architecture');
  if (config && config.architecture_dir) {
    architectureDir = path.resolve(process.cwd(), config.architecture_dir);
  } else if (!fs.existsSync(architectureDir)) {
    const templateArchDir = path.join(__dirname, '..', 'pkg_files', 'architecture_templates');
    if (fs.existsSync(templateArchDir)) {
      architectureDir = templateArchDir;
    }
  }
  
  const arbs = scanDir(architectureDir);
  const adrs = scanDir(path.join(architectureDir, 'decisions'));
  
  const samskarasDir = path.join(aumDir, 'samskaras');
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
  
  const docsData = {
    manifest,
    instructions,
    config,
    arbs,
    adrs,
    samskaras,
    compiledAt: new Date().toISOString()
  };

  const outputDir = path.dirname(outputJsonPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputJsonPath, JSON.stringify(docsData, null, 2), 'utf8');
  console.log(`Successfully compiled docs to: ${outputJsonPath}`);
}

main();
