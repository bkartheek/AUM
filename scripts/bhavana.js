const fs = require('fs');
const path = require('path');

function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM SPHOṬA-BHĀVANĀ RULE INCUBATOR`);
  console.log(`======================================================`);
}

function run() {
  logHeader();
  console.log(`[ Bhāvanā ]: Incubation starting. Loading Saṃskāras caches...`);
  
  const samskarasDir = path.join(__dirname, '..', '.aum', 'samskaras');
  const learnings = [];
  
  if (fs.existsSync(samskarasDir)) {
    fs.readdirSync(samskarasDir)
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        try {
          const content = JSON.parse(fs.readFileSync(path.join(samskarasDir, file), 'utf8'));
          if (content.critical_learnings) {
            learnings.push(...content.critical_learnings);
          }
        } catch (e) {
          console.error(`Error reading ${file}:`, e);
        }
      });
  }
  
  console.log(`[ Bhāvanā ]: Synthesized ${learnings.length} learned rules.`);
  learnings.forEach((rule, idx) => console.log(`  Rule ${idx + 1}: ${rule}`));
  console.log(`[ Bhāvanā ]: Evolved rules block successfully compiled.`);
  console.log(`======================================================`);
}

run();
