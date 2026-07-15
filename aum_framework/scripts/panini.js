function logHeader() {
  console.log(`======================================================`);
  console.log(`   PĀṆINIAN ŚABDĀNUŚĀSANA CODE SYNTHESIZER`);
  console.log(`======================================================`);
}

function synthesizeClass(root, properties) {
  // Pāṇinian Rule Rewrite: Dhatu (Root) + Pratyaya (Suffix/Properties) = Output code
  const className = root.charAt(0).toUpperCase() + root.slice(1);
  let fieldsStr = properties.map(p => `  public readonly ${p}: string;`).join('\n');
  let constructorParams = properties.map(p => `${p}: string`).join(', ');
  let constructorAssigns = properties.map(p => `    this.${p} = ${p};`).join('\n');
  
  return `class ${className} {\n${fieldsStr}\n\n  constructor(${constructorParams}) {\n${constructorAssigns}\n  }\n}`;
}

function run() {
  logHeader();
  
  const args = process.argv.slice(2);
  const root = args[0] || "samskara";
  const properties = args.slice(1).length > 0 ? args.slice(1) : ["id", "summary", " learnings"];
  
  console.log(`[ Pāṇini Sutra ]: Input root (Dhātu): "${root}"`);
  console.log(`[ Pāṇini Sutra ]: Input properties (Pratyayas): [${properties.join(', ')}]`);
  
  const classOutput = synthesizeClass(root, properties);
  console.log(`\n--- Synthesized AST Output ---`);
  console.log(classOutput);
  console.log(`======================================================`);
}

run();
