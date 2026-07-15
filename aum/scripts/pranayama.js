function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM PRĀṆĀYĀMA CONTEXT VENTILATION ENGINE`);
  console.log(`======================================================`);
}

function ventilateContext(inputLines) {
  // Purges build traces and debug logs while retaining pinned instructions
  return inputLines.filter(line => {
    const lower = line.toLowerCase();
    if (lower.includes('built in') || lower.includes('transforming...') || lower.includes('rendering chunks...')) {
      return false;
    }
    if (lower.includes('npm run') || lower.includes('vite build')) {
      return false;
    }
    return true;
  });
}

function run() {
  logHeader();
  console.log(`[ Pūraka (Inhale) ]: loading active targeting context...`);
  
  const sampleLogInput = [
    "# Target Task: Fix Portal Styling",
    "transforming...✓ 1775 modules transformed.",
    "rendering chunks...",
    "dist/assets/index-BnCVu9tD.css   13.85 kB",
    "✓ built in 186ms",
    "🧘 [ DHĀRAṆĀ FOCUS LOCK ]: Styling refined"
  ];
  
  console.log(`[ Recaka (Exhale) ]: Purging build and tool printout traces...`);
  const cleanContext = ventilateContext(sampleLogInput);
  
  console.log(`\n--- Pinned Context Result ---`);
  cleanContext.forEach(line => console.log(`  ${line}`));
  console.log(`======================================================`);
}

run();
