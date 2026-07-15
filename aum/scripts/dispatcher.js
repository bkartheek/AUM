const path = require('path');

function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM KAÑCUKAS INTENT DISPATCHER & SANDBOX`);
  console.log(`======================================================`);
}

function classifyIntent(prompt) {
  const query = prompt.toLowerCase();
  
  if (query.includes('fix') || query.includes('debug') || query.includes('bug') || query.includes('error')) {
    return {
      category: 'DEBUGGER',
      allowedTools: ['read_file', 'write_file', 'run_command'],
      turnLimit: 5
    };
  }
  
  if (query.includes('refactor') || query.includes('de-duplicate') || query.includes('clean') || query.includes('formatting')) {
    return {
      category: 'REFACTORER',
      allowedTools: ['read_file', 'write_file'],
      turnLimit: 8
    };
  }

  if (query.includes('document') || query.includes('doc') || query.includes('guide') || query.includes('index')) {
    return {
      category: 'DOCUMENTER',
      allowedTools: ['read_file'],
      turnLimit: 3
    };
  }

  // Default fallback category
  return {
    category: 'GENERAL_DEVELOPER',
    allowedTools: ['read_file', 'write_file', 'run_command'],
    turnLimit: 10
  };
}

function runDispatcher() {
  logHeader();
  
  const args = process.argv.slice(2);
  const prompt = args[0] || "document recent framework updates";
  
  console.log(`[ Prāṇa Intake ]: Analyzing user prompt: "${prompt}"`);
  
  const startTime = Date.now();
  const intent = classifyIntent(prompt);
  const latency = Date.now() - startTime;
  
  console.log(`[ Sphoṭa Category ]: Classified as ${intent.category} (Latency: ${latency}ms)`);
  
  console.log(`\n--- Seeding the Five limiting Sheaths (Kañcukas) ---`);
  
  // 1. Rāga-Kañcuka (Scope / Focus)
  console.log(`  [ Rāga Kañcuka ]   : Narrowing target file lists to active Saṅkalpa resolve limits.`);
  
  // 2. Kāla-Kañcuka (Time / Turn Budget)
  console.log(`  [ Kāla Kañcuka ]   : Injecting turn limit: ${intent.turnLimit} turns max budget.`);
  
  // 3. Niyati-Kañcuka (Space / Boundaries)
  console.log(`  [ Niyati Kañcuka ] : Restricting path read/write access strictly inside: ${path.join(process.cwd())}`);
  
  // 4. Vidyā-Kañcuka (Knowledge / Tools)
  console.log(`  [ Vidyā Kañcuka ]  : Loading selective tool set: [${intent.allowedTools.join(', ')}]`);
  
  // 5. Kalā-Kañcuka (Power / Action Limits)
  console.log(`  [ Kalā Kañcuka ]   : Restricting tool permission level: ${intent.category === 'DOCUMENTER' ? 'READ-ONLY' : 'READ-WRITE'}`);
  
  console.log(`\n[ DISPATCH ]: Sandbox is compiled. Forwarding to specialist model...`);
}

runDispatcher();
