import React, { useState, useMemo } from 'react';
import { marked } from 'marked';
import { 
  BookOpen, 
  Search, 
  Shield, 
  Compass, 
  Activity, 
  CheckCircle, 
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Layers,
  Play,
  Terminal,
  Cpu,
  HelpCircle,
  Sparkles,
  Zap,
  Lock,
  RefreshCw,
  Eye,
  GitCommit,
  Trash2,
  FileText
} from 'lucide-react';
import docsData from './docs_data.json';

// Configure marked to render code cleanly
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: false,
  mangle: false
});

export default function App() {
  const [activeTab, setActiveTab] = useState('philosophy'); // 'philosophy' | 'pillars' | 'simulator' | 'handbook' | 'quickstart'
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [selectedDocId, setSelectedDocId] = useState(null); // Selected ADR/ARB filename
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Simulator state
  const [simulatorStage, setSimulatorStage] = useState('intake'); // 'intake' | 'blueprint' | 'verification' | 'manifest'
  const [simulatorInput, setSimulatorInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'AUM Engine v1.34.0 Initialized.' },
    { type: 'system', text: 'Current Beat: INTAKE. Ready for developer focus.' }
  ]);

  // Static definition of 14 Vedic Pillars
  const pillars = useMemo(() => [
    {
      id: 0,
      title: "Brahman (Stateless Core)",
      sanskrit: "ब्रह्मन्",
      origin: "Advaita Vedānta Philosophy",
      philosophicalDepth: "In Upanishadic thought, Brahman is the foundational, immutable, and stateless reality of the universe. It remains unmanifest and unchanged, while all physical names, forms, and actions are temporary superimpositions (Adhyāsa).",
      architecturalMapping: "AUM is built on a stateless execution model. The engine maintains no in-memory session side-effects. All state is reconstructed deterministically from active files inside the `.aum/` directory on each turn, eliminating state-drift and concurrency races across agent runs.",
      cliOperations: "The system reads `sphota.json` at startup to reconstruct active state and runs CLI queries statelessly.",
      codeExample: `// Brahman: Stateless evaluation of session state
function evaluateState(sphotaJson, activeSankalpaFile) {
  const activeId = sphotaJson.active_sankalpa_id;
  if (!activeId) return { state: 'Idle', sankalpa: null };
  
  const content = fs.readFileSync(activeSankalpaFile, 'utf8');
  return {
    state: sphotaJson.tala_beat, // Intake, Blueprint, Verify, Manifest
    sankalpa: parseSankalpaFrontmatter(content)
  };
}`,
      icon: Cpu
    },
    {
      id: 1,
      title: "Yamas & Niyamas (Safety Invariants)",
      sanskrit: "यम-नियम",
      origin: "Patanjali's Yoga Sūtras",
      philosophicalDepth: "Yamas are ethical restraints (e.g. Ahiṃsā/non-injury, Asteya/non-stealing) and Niyamas are positive internal observances (e.g. Śauca/purity, Svādhyāya/self-study). They govern all actions to prepare the mind for higher focus.",
      architecturalMapping: "System constraints and compiler boundaries are formalized under Yamas and Niyamas. Restraints (Yamas) block destructive edits (such as deleting user code or writing empty stubs), while Observances (Niyamas) enforce syntax purity, log compliance, and testing rules.",
      cliOperations: "`node scripts/aum.js audit` validates code changes against Yamas & Niyamas defined in `config.json`.",
      codeExample: `// Yamas & Niyamas: Auditing code for forbidden modifications
const forbiddenRules = [
  { term: 'TO' + 'DO', error: 'Satya Violation: Do not write mock placeholders or TO' + 'DO stubs' },
  { term: 'FIX' + 'ME', error: 'Satya Violation: Leftover stubs are prohibited' },
  { term: 'console.log', error: 'Sauca Violation: Debug print statements must be cleaned up' }
];

function auditDiff(stagedChanges) {
  for (const line of stagedChanges) {
    for (const rule of forbiddenRules) {
      if (line.includes(rule.term)) {
        throw new Error(\`[INVARIANT VIOLATION]: \${rule.error}\`);
      }
    }
  }
}`,
      icon: Shield
    },
    {
      id: 2,
      title: "Māṇḍūkya Quarters (State Machine)",
      sanskrit: "माण्डूक्य चतुष्पाद",
      origin: "Māṇḍūkya Upaniṣad",
      philosophicalDepth: "Consciousness is mapped into four quarters: Jāgrat (waking state, external), Svapna (dream state, subtle/planning), Suṣupti (deep sleep, unified potential), and Turīya (silent, underlying consciousness).",
      architecturalMapping: "AUM organizes agent execution turns into corresponding quarters: Intake Stage (Jāgrat: collecting user requirements), Blueprint Stage (Svapna: designing abstract structures/schemas), Invariant Stage (Suṣupti: verifying safety boundaries), and Manifestation Stage (Turīya/Vaikharī: committing verified source code).",
      cliOperations: "The Tāla cycle controller routes the agent's attention through the stages in `sphota.json`.",
      codeExample: `// Mandukya: Enforcing stage-based execution permissions
const stages = {
  intake: { writeCode: false, readConfig: true, interviewUser: true },
  blueprint: { writeCode: false, readConfig: true, planArchitecture: true },
  verification: { writeCode: false, runTests: true, verifyBoundaries: true },
  manifest: { writeCode: true, compileBuild: true, commitChanges: true }
};

function authorizeAction(currentStage, actionType) {
  const permissions = stages[currentStage];
  if (!permissions[actionType]) {
    throw new Error(\`[STAGE FAULT]: Action \${actionType} is BLOCKED in \${currentStage} stage.\`);
  }
}`,
      icon: Layers
    },
    {
      id: 3,
      title: "Saṅkalpa (Focal Intent Vows)",
      sanskrit: "सङ्कल्प",
      origin: "Vedic Ritualistic Resolve",
      philosophicalDepth: "A Saṅkalpa is a solemn vow or intention made with complete mental focus. Once initialized, all karma (action) and thoughts must align solely toward fulfilling this specific objective, blocking all external distractions.",
      architecturalMapping: "All development tasks require a dedicated task log (`sankalpa_XXX_[slug].md`). This log acts as a cognitive focal point, outlining the task targets, plans, conversation records, and test plans. Code writing is blocked until a Saṅkalpa is active.",
      cliOperations: "`AUM: RESOLVE [Goal]` creates the log file and sets `active_sankalpa_id` in `sphota.json`.",
      codeExample: `// Sankalpa: Creating a focal task context log
function initializeSankalpa(id, objective) {
  const content = \`---
id: \${id}
objective: "\${objective}"
status: Active
tala_stage: intake
---
# Saṅkalpa Log: \${id}
## 🧵 Intent Blueprint
- [ ] User requirements collected
- [ ] Abstract architecture drafted
- [ ] Test plans verified
- [ ] Code modifications manifest
\`;
  fs.writeFileSync(\`.aum/sankalpas/\${id}.md\`, content);
}`,
      icon: GitCommit
    },
    {
      id: 4,
      title: "Pañcakṛtya (Turn Lifecycle)",
      sanskrit: "पञ्चकृत्य",
      origin: "Kashmir Shaivism Cosmology",
      philosophicalDepth: "The universe undergoes five continuous cosmic acts: creation (Sṛṣṭi), preservation (Sthiti), dissolution/refactoring (Saṃhāra), concealment (Tirobhāva), and grace/release (Anugraha).",
      architecturalMapping: "Every agent turn cycles through these 5 states: context assembly (Sṛṣṭi: loading files), validation checking (Sthiti: compile tests), refactoring and cleanup (Saṃhāra: removing temporary files), output generation (Tirobhāva: print logs), and deployment (Anugraha: git commit & push).",
      cliOperations: "`node scripts/aum.js verify` and `git commit` execute the lifecycle validation loops.",
      codeExample: `// Pancakritya: Sequencing the turn lifecycle pipeline
async function executeTurnLifecycle(stagedFiles) {
  // 1. Sristi: Read context
  const context = loadContext(stagedFiles);
  // 2. Sthiti: Verify compile health
  verifyCompile(context);
  // 3. Samhara: Prune stubs & debug logs
  pruneCode(stagedFiles);
  // 4. Tirobhava: Compile metadata database
  compileMetadata();
  // 5. Anugraha: Push changes to git remote
  await pushToRemote();
}`,
      icon: RefreshCw
    },
    {
      id: 5,
      title: "Mūla Sphoṭa (Holistic Manifest)",
      sanskrit: "मूल स्फोट",
      origin: "Bhartṛhari's Sphoṭa Philosophy",
      philosophicalDepth: "Sphoṭa is the sudden, non-temporal flash of holistic meaning when a word or sentence is heard, transcending individual phonemes or letters. It represents the unified semantic source.",
      architecturalMapping: "AUM registers the entire workspace file inventory, active reviews, decisions, and instructions under the `MULA_SPHOTA.md` global manifest. It provides the agent with a single, unified view of the repository's rules.",
      cliOperations: "The workspace linter parses the master manifest index at startup to check folder configurations.",
      codeExample: `// Mula Sphota: Unified repository-wide index validation
function validateWorkspaceStructure(workspaceRoot) {
  const requiredFiles = [
    '.aum/config.json',
    '.aum/sphota.json',
    '.aum/INSTRUCTIONS.md',
    '.aum/MULA_SPHOTA.md'
  ];
  
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(workspaceRoot, file))) {
      throw new Error(\`[SPHOTA FAULT]: Root configuration \${file} is missing!\`);
    }
  }
}`,
      icon: BookOpen
    },
    {
      id: 6,
      title: "Pratyavēkṣaṇa (Retrospective Auditing)",
      sanskrit: "प्रत्यवेक्षण",
      origin: "Kashmir Shaiva Epistemology",
      philosophicalDepth: "Pratyavēkṣaṇa is self-study and critical reflection, looking back on one's cognitive steps and actions to identify errors (Doṣas) and reinforce learnings (Saṃskāras).",
      architecturalMapping: "Completing tasks requires compiling retrospective audit reports. These reports examine what compiler errors occurred, what linter fallacies were flagged, and how they were corrected, preserving lessons for future agent runs.",
      cliOperations: "`AUM: RETROSPECT [Scope]` compiles a new self-examination log file under `.aum/sankalpas/`.",
      codeExample: `// Pratyaveksana: Creating a retro review log on build failure
function logBuildFailure(errorTrace) {
  const reportPath = \`.aum/sankalpas/retrospective_LOG_\${Date.now()}.md\`;
  const content = \`# Retrospective Audit Report
*   **Error Detected**: \${errorTrace.message}
*   **Failed Component**: \${errorTrace.file}
*   **Correction Log**: [Write how this compiler error was resolved to avoid recurrence]
\`;
  fs.writeFileSync(reportPath, content);
}`,
      icon: Eye
    },
    {
      id: 7,
      title: "Mīmāṃsā Hermeneutics (Overrides)",
      sanskrit: "मीमांसा",
      origin: "Jaimini's Mīmāṃsā Sūtras",
      philosophicalDepth: "Mīmāṃsā provides rules for resolving text interpretation conflicts: Direct Text (Śruti) overrides Inference (Liṅga) overrides Sentence Context (Vākya) overrides Section Context (Prakaraṇa).",
      architecturalMapping: "AUM resolves configuration overlaps in the same order. Direct settings (Śruti) override linter diagnostic suggestions (Liṅga), which override local module settings (Vākya), which override global rules.",
      cliOperations: "The engine resolves `config.json` properties against local directory rules dynamically.",
      codeExample: `// Mimamsa: Resolving rule priorities
function resolveRule(srutiConfig, lingaDiagnostic, vakyaContext) {
  // 1. Direct configuration (Sruti) overrides all
  if (srutiConfig !== undefined) return srutiConfig;
  // 2. Linter diagnostic (Linga) overrides context
  if (lingaDiagnostic !== undefined) return lingaDiagnostic;
  // 3. Local module scope (Vakya) is fallback
  return vakyaContext || 'DefaultRule';
}`,
      icon: Compass
    },
    {
      id: 8,
      title: "Vaiśeṣika Ontology (Data Classification)",
      sanskrit: "वैशेषिक पदार्थ",
      origin: "Kaṇāda's Vaiśeṣika Sūtras",
      philosophicalDepth: "Reality is classified into categories (Padārthas): substance (Dravya), quality/property (Guṇa), and action/method (Karma). Elements are decoupled to represent the structure of existence.",
      architecturalMapping: "Software codebases map variables, classes, and types to Vaiśeṣika categories: Objects/Databases are Dravya (Substances), primitive properties and type guards are Guṇa (Attributes), and functions/logic are Karma (Actions).",
      cliOperations: "Blueprints map functions and schemas to strict variables conforming to these definitions.",
      codeExample: `// Vaisesika: Decoupled object-attribute-action structure
// 1. Dravya (Substance / Data model)
const userProfile = {
  id: 'usr_9893',
  // 2. Guna (Attributes / Types)
  name: 'Karthik',
  version: 2
};

// 3. Karma (Action / Service logic)
function updateProfileName(profile, newName) {
  if (typeof newName !== 'string') throw new Error('Invalid Guna');
  return { ...profile, name: newName };
}`,
      icon: Layers
    },
    {
      id: 9,
      title: "Sāṅkhya Evolution (Compilation Lifecycle)",
      sanskrit: "साङ्ख्य परिणाम",
      origin: "Kapila's Sāṅkhya Philosophy",
      philosophicalDepth: "Physical reality evolves sequentially from unmanifest root nature (Prakṛti) through intellect/checking (Buddhi) and ego/linking (Ahaṅkāra) into physical matter (Bhūtas).",
      architecturalMapping: "The compilation lifecycle runs through Sāṅkhya evolutionary steps: raw source files (Prakṛti) go through Abstract Syntax Tree checks (Buddhi), link namespaces (Ahaṅkāra), and compile into binaries (Bhūtas).",
      cliOperations: "`npx aum verify` executes the Sāṅkhya stages of building code.",
      codeExample: `// Sankhya: Executing the build pipeline
function compileSankhya(sourceCode) {
  // 1. Prakriti: Raw unmanifest source code
  console.log('Prakriti: Loading raw source code.');
  // 2. Buddhi: Parse AST (Intellect Check)
  const ast = esprima.parseScript(sourceCode);
  // 3. Ahankara: Resolve symbol imports (Linking)
  const symbols = resolveImports(ast);
  // 4. Bhutas: Output compiled production bundle
  const output = generateBundle(symbols);
  return output;
}`,
      icon: Activity
    },
    {
      id: 10,
      title: "Shaiva Kañcukas (Execution Sandboxing)",
      sanskrit: "कञ्चुक",
      origin: "Shaivism Limiting Sheaths",
      philosophicalDepth: "To allow individual action, the infinite powers of consciousness are restricted by limiting sheaths: time (Kāla), space (Niyati), desire (Rāga), knowledge (Vidyā), and power (Kalā).",
      architecturalMapping: "AUM enforces strict sandbox constraints on AI agents: turn call counts (Kāla) prevent loops, directory permissions (Niyati) protect local files, target tasks (Rāga) focus edits, and tool limits (Kalā) block networking.",
      cliOperations: "The dispatcher module intercepts agent executions, checking tool calls and path limits.",
      codeExample: `// Kancukas: Sandboxing command execution limits
const sandbox = {
  maxTurns: 15,
  allowedPaths: ['/Users/universe/AUM'],
  allowNetwork: false
};

function checkKancukaLimits(currentTurn, targetPath, commandStr) {
  if (currentTurn > sandbox.maxTurns) throw new Error('Kala Limit Exceeded');
  if (!targetPath.startsWith(sandbox.allowedPaths[0])) throw new Error('Niyati violation');
  if (commandStr.includes('curl') && !sandbox.allowNetwork) throw new Error('Kala/Power blocked');
}`,
      icon: Lock
    },
    {
      id: 11,
      title: "Spanda Pulsation (Reactive Streams)",
      sanskrit: "स्पन्द",
      origin: "Vasugupta's Spanda Kārikā",
      philosophicalDepth: "Reality is a dynamic, vibrating pulse that oscillates between opening/emission (Unmeṣa) and closing/withdrawal (Nimeṣa), maintaining cosmic balance.",
      architecturalMapping: "Event emitters and WebSocket streams are modeled on Spanda. Connection emissions are Unmeṣa, subscriptions and event listener cleanups are Nimeṣa, and intervals/throttling are Spanda-Sandhi.",
      cliOperations: "Reactive data streaming pipelines employ formal garbage collection on connection closures.",
      codeExample: `// Spanda: Dynamic connection opening and closing
class SpandaStream {
  constructor() {
    this.listeners = [];
  }
  // Unmesa: Emit event
  unmesa(event) {
    this.listeners.forEach(fn => fn(event));
  }
  // Nimesa: Close subscription
  nimesa(fnToRemove) {
    this.listeners = this.listeners.filter(fn => fn !== fnToRemove);
  }
}`,
      icon: Play
    },
    {
      id: 12,
      title: "Apavāda Neti-Neti (Refactoring Negation)",
      sanskrit: "अपवाद",
      origin: "Advaita Vedānta Negation",
      philosophicalDepth: "Vedānta uses negation (Apavāda - 'Neti Neti' or 'not this, not this') to strip away illusions and superimpositions (Adhyāsa) to realize the underlying unified reality.",
      architecturalMapping: "Duplicated helpers and bloated class structures (Adhyāsa) are systematically negated and removed (Apavāda) during build cleaning, consolidating the codebase into a single source of truth.",
      cliOperations: "The linter alerts on duplicated functions and dead code paths during audits.",
      codeExample: `// Apavada: Removing redundant stubs and duplicate blocks
function removeAdhyasa(codeAst) {
  // Apply neti-neti to prune stubs
  const cleanAst = codeAst.filter(node => {
    if (node.type === 'EmptyStatement' || node.type === 'DebuggerStatement') {
      console.log('Apavada: Negating redundant node.');
      return false;
    }
    return true;
  });
  return cleanAst;
}`,
      icon: Trash2
    },
    {
      id: 13,
      title: "Catuṣkoṭi Tetralemma (Logic States)",
      sanskrit: "चतुष्कोटि",
      origin: "Buddhist & Nyāya Dialectics",
      philosophicalDepth: "Catuṣkoṭi is a four-valued logical framework asserting that any statement is: (1) True, (2) False, (3) Both True and False, or (4) Neither True nor False.",
      architecturalMapping: "Nyāya relational type constraints are checked using tetralemma state assertions, especially on asynchronous data streams where variables can exist in resolved, rejected, pending, or disconnected states.",
      cliOperations: "`node scripts/catuskoti.js` runs logic tests validating multiple asynchronous conditions.",
      codeExample: `// Catuskoti: Tetralemma assertions testing
const Catuskoti = {
  TRUE: 'resolved',
  FALSE: 'rejected',
  BOTH: 'pending_with_partial_data',
  NEITHER: 'uninitialized'
};

function assertState(streamState) {
  if (streamState.resolved && !streamState.error) return Catuskoti.TRUE;
  if (!streamState.resolved && streamState.error) return Catuskoti.FALSE;
  if (streamState.resolved && streamState.error) return Catuskoti.BOTH;
  return Catuskoti.NEITHER;
}`,
      icon: Terminal
    }
  ], []);

  // Filtered lists of ADRs and ARBs
  const filteredADRs = useMemo(() => {
    const list = docsData.adrs || [];
    if (!searchQuery) return list;
    return list.filter(doc => 
      doc.attributes.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.attributes.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredARBs = useMemo(() => {
    const list = docsData.arbs || [];
    if (!searchQuery) return list;
    return list.filter(doc => 
      doc.attributes.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.attributes.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Selected document body rendering
  const selectedDocDetails = useMemo(() => {
    if (!selectedDocId) return null;
    
    // Search in arbs, adrs, manifest, instructions
    let found = null;
    
    if (docsData.manifest && docsData.manifest.filename === selectedDocId) {
      found = docsData.manifest;
    } else if (docsData.instructions && docsData.instructions.filename === selectedDocId) {
      found = docsData.instructions;
    } else {
      found = (docsData.arbs || []).find(d => d.filename === selectedDocId) || 
              (docsData.adrs || []).find(d => d.filename === selectedDocId);
    }
    
    if (!found) return null;
    
    return {
      title: found.attributes.title || found.filename,
      description: found.attributes.description || '',
      phase: found.attributes.phase || '',
      vedicState: found.attributes.vedic_state || '',
      bodyHtml: marked.parse(found.body)
    };
  }, [selectedDocId]);

  // Simulator interactions
  const handleSimulatorCommand = (cmd) => {
    if (!cmd.trim()) return;
    
    const newHistory = [...terminalHistory, { type: 'user', text: `AUM: ${cmd}` }];
    const command = cmd.toUpperCase().trim();

    if (command.startsWith('RESOLVE')) {
      newHistory.push({ type: 'system', text: '🧵 [ SAṄKALPA RESOLVE INITIATED ]' });
      newHistory.push({ type: 'system', text: `Resolve ID: sankalpa_005_simulation` });
      newHistory.push({ type: 'system', text: 'Status: Intake Stage (Tāla Beat: INTAKE)' });
      setSimulatorStage('intake');
    } else if (command === 'BEAT NEXT') {
      let nextStage = 'intake';
      if (simulatorStage === 'intake') nextStage = 'blueprint';
      else if (simulatorStage === 'blueprint') nextStage = 'verification';
      else if (simulatorStage === 'verification') nextStage = 'manifest';
      else nextStage = 'intake';
      
      setSimulatorStage(nextStage);
      newHistory.push({ type: 'system', text: '⏱️ [ TĀLA BEAT ADVANCED ]' });
      newHistory.push({ type: 'system', text: `Transition: ${simulatorStage.toUpperCase()} ➔ ${nextStage.toUpperCase()}` });
      if (nextStage === 'blueprint') {
        newHistory.push({ type: 'system', text: 'Directive: Map out abstract schemas and interface files. Do not edit code.' });
      } else if (nextStage === 'verification') {
        newHistory.push({ type: 'system', text: 'Directive: Outline tests, assert boundaries and compile scripts.' });
      } else if (nextStage === 'manifest') {
        newHistory.push({ type: 'system', text: 'Directive: Code modifications unlocked! Go ahead and manifest changes.' });
      }
    } else if (command === 'DRONE') {
      newHistory.push({ type: 'system', text: `=== TANPURA REFERENCE PITCH ===` });
      newHistory.push({ type: 'system', text: `Active Sankalpa: sankalpa_005_simulation` });
      newHistory.push({ type: 'system', text: `Tāla Beat: ${simulatorStage.toUpperCase()}` });
      newHistory.push({ type: 'system', text: `Invariants: Ahiṃsā, Asteya, Satya ACTIVE.` });
    } else {
      newHistory.push({ type: 'error', text: `Unrecognized AUM directive: "${cmd}". Try: RESOLVE [task], BEAT NEXT, or DRONE.` });
    }

    setTerminalHistory(newHistory);
    setSimulatorInput('');
  };

  return (
    <div className="aum-handbook-app">
      
      {/* Mobile Top Header */}
      <header className="aum-mobile-header">
        <div className="aum-brand">
          <div className="aum-logo">ॐ</div>
          <span className="aum-brand-title">AUM Handbook</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="aum-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Main Container */}
      <div className="aum-app-container">
        
        {/* Navigation Sidebar */}
        <aside className={`aum-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="aum-sidebar-header">
            <div className="aum-brand">
              <div className="aum-logo">ॐ</div>
              <div>
                <h1 className="aum-brand-title">AUM ENGINE</h1>
                <span className="aum-brand-sub">Vedic Software Engineering</span>
              </div>
            </div>
          </div>

          <nav className="aum-nav">
            <button
              onClick={() => { setActiveTab('philosophy'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
            >
              <Compass size={18} />
              <span>Philosophy & Synthesis</span>
            </button>

            <button
              onClick={() => { setActiveTab('pillars'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'pillars' ? 'active' : ''}`}
            >
              <Sparkles size={18} />
              <span>The 14 Pillars Map</span>
            </button>

            <button
              onClick={() => { setActiveTab('simulator'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'simulator' ? 'active' : ''}`}
            >
              <Terminal size={18} />
              <span>Tāla Cycle Playground</span>
            </button>

            <button
              onClick={() => { setActiveTab('handbook'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'handbook' ? 'active' : ''}`}
            >
              <BookOpen size={18} />
              <span>Handbook Decisions</span>
            </button>

            <button
              onClick={() => { setActiveTab('quickstart'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'quickstart' ? 'active' : ''}`}
            >
              <FileText size={18} />
              <span>CLI & Operations Reference</span>
            </button>
          </nav>

          <div className="aum-sidebar-footer">
            <span>v1.34.0 • Independent Handbook</span>
          </div>
        </aside>

        {/* Viewport Content Area */}
        <main className="aum-viewport">
          
          {/* Doc Reader Overlay */}
          {selectedDocId ? (
            <div className="aum-reader-container">
              <button 
                onClick={() => setSelectedDocId(null)}
                className="aum-back-btn"
              >
                <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                <span>Back to Handbook Index</span>
              </button>

              {selectedDocDetails ? (
                <article className="aum-article-view">
                  <header className="aum-article-header">
                    <span className="aum-article-meta">
                      {selectedDocDetails.phase} • State: {selectedDocDetails.vedicState}
                    </span>
                    <h2 className="aum-article-title">{selectedDocDetails.title}</h2>
                    <p className="aum-article-desc">{selectedDocDetails.description}</p>
                  </header>
                  
                  {/* Markdown content */}
                  <div 
                    className="markdown-body"
                    dangerouslySetInnerHTML={{ __html: selectedDocDetails.bodyHtml }} 
                  />
                </article>
              ) : (
                <div className="aum-loading">Loading document details...</div>
              )}
            </div>
          ) : (
            <>
              {/* Tab 1: Philosophy & Synthesis */}
              {activeTab === 'philosophy' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Māṇḍūkya Synthesis</span>
                    <h2 className="aum-hero-title">
                      Vedic Software Engineering Handbook
                    </h2>
                    <p className="aum-hero-desc">
                      Welcome to the **Vedic Software Engineering Handbook** portal. This is a unique synthesis that derives modern software architectures, guardrails, and execution cycles directly from Vedic and Upanishadic philosophy.
                    </p>
                    <p className="aum-hero-desc-secondary">
                      Rather than structuring logic around arbitrary execution loops, the **AUM Engine** anchors developers and AI agents in the four quarters of consciousness, enforcing invariants through *Yamas & Niyamas*, and organizing state evaluation around Kashmir Shaivism's turn lifecycles (*Pañcakṛtya*).
                    </p>
                  </section>

                  {/* Trika Sakti Overview */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">Trika Śakti: The Engine of Action</h3>
                    <p className="aum-section-desc">
                      Action inside an AI-assisted workspace requires balancing three fundamental spiritual forces before a single line of physical code is manifested:
                    </p>
                    
                    <div className="aum-grid-3">
                      <div className="aum-card-panel">
                        <div className="aum-card-badge">1</div>
                        <h4 className="aum-card-title">Icchā Śakti (Will / Intent)</h4>
                        <p className="aum-card-text">
                          The raw desire to resolve a goal. Captured during the **Intake Stage** to define focus parameters and constraints.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <div className="aum-card-badge">2</div>
                        <h4 className="aum-card-title">Jñāna Śakti (Knowledge / Plan)</h4>
                        <p className="aum-card-text">
                          The wisdom of form. Mapped in the **Blueprint Stage** to outline logical relationships and verify constraints.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <div className="aum-card-badge">3</div>
                        <h4 className="aum-card-title">Kriyā Śakti (Action / Code)</h4>
                        <p className="aum-card-text">
                          The physical execution of code. Unlocked in the **Manifestation Stage** after safety checks have validated compile health.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Mapping Matrix */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">Vedic Metaphysics Mapping Matrix</h3>
                    <div className="aum-table-container">
                      <table className="aum-matrix-table">
                        <thead>
                          <tr>
                            <th>Vedic Sanskrit Concept</th>
                            <th>Metaphysical Essence</th>
                            <th>Software Architecture Parallel</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-bold text-zinc-350">Brahman (ब्रह्मन्)</td>
                            <td>Immutable, Stateless Absolute Reality</td>
                            <td>Stateless evaluation from active files</td>
                          </tr>
                          <tr>
                            <td className="font-bold text-zinc-350">Yamas & Niyamas (यम-नियम)</td>
                            <td>Ethical restraints and self-study rules</td>
                            <td>Linter validation checks and path boundaries</td>
                          </tr>
                          <tr>
                            <td className="font-bold text-zinc-350">Māṇḍūkya Quarters (चतुष्पाद)</td>
                            <td>Four quarters of consciousness states</td>
                            <td>Sequential state machine for turns</td>
                          </tr>
                          <tr>
                            <td className="font-bold text-zinc-350">Pañcakṛtya (पञ्चकृत्य)</td>
                            <td>Five cosmic acts of cosmic cycle</td>
                            <td>Turn pipeline stages (context ➔ compile ➔ push)</td>
                          </tr>
                          <tr>
                            <td className="font-bold text-zinc-350">Sāṅkhya Evolution (परिणाम)</td>
                            <td>Material evolution from unmanifest to physical</td>
                            <td>AST compilation, linking, and packaging</td>
                          </tr>
                          <tr>
                            <td className="font-bold text-zinc-350">Shaiva Kañcukas (कञ्चुक)</td>
                            <td>Limiting sheaths that bind agent capacity</td>
                            <td>Execution sandboxing (turn limits, paths restriction)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {/* Tab 2: The 14 Pillars Map */}
              {activeTab === 'pillars' && (
                <div className="aum-tab-content">
                  <div className="aum-page-header">
                    <h2 className="aum-page-title">The 14 Pillars of Vedic Software Engineering</h2>
                    <p className="aum-page-desc">
                      Click on any pillar to inspect how its philosophical origin maps to modern code design rules and operational mechanics.
                    </p>
                  </div>

                  {/* Interactive Pillar Grid & Detail Board */}
                  <div className="aum-columns-split">
                    
                    {/* Left: Pillars Grid */}
                    <div className="aum-split-left">
                      {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        const isSelected = idx === selectedPillar;
                        return (
                          <button
                            key={pillar.id}
                            onClick={() => setSelectedPillar(idx)}
                            className={`aum-pillar-item ${isSelected ? 'active' : ''}`}
                          >
                            <div className="aum-pillar-icon">
                              <Icon size={18} />
                            </div>
                            <div className="aum-pillar-text">
                              <h4 className="aum-pillar-title">{pillar.title}</h4>
                              <span className="aum-pillar-sanskrit">{pillar.sanskrit}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Right: Selected Pillar Detailed Card */}
                    <div className="aum-split-right">
                      <header className="aum-detail-header">
                        <div>
                          <span className="aum-detail-origin">
                            Pillar Origin: {pillars[selectedPillar].origin}
                          </span>
                          <h3 className="aum-detail-title">
                            {pillars[selectedPillar].title}
                          </h3>
                        </div>
                        <span className="aum-detail-sanskrit-tag">
                          {pillars[selectedPillar].sanskrit}
                        </span>
                      </header>

                      <div className="aum-detail-body">
                        <div className="aum-detail-section">
                          <h5 className="aum-detail-section-title">Vedic Philosophy Context</h5>
                          <p className="aum-detail-section-text">{pillars[selectedPillar].philosophicalDepth}</p>
                        </div>

                        <div className="aum-detail-section">
                          <h5 className="aum-detail-section-title">System Architecture Analogy</h5>
                          <p className="aum-detail-section-text">{pillars[selectedPillar].architecturalMapping}</p>
                        </div>

                        <div className="aum-detail-section">
                          <h5 className="aum-detail-section-title">Operational Mechanics</h5>
                          <p className="aum-detail-section-code-desc">
                            {pillars[selectedPillar].cliOperations}
                          </p>
                        </div>

                        <div className="aum-detail-section">
                          <h5 className="aum-detail-section-title">Concept Code Stencil</h5>
                          <pre className="aum-detail-code-block">
                            <code>{pillars[selectedPillar].codeExample}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab 3: Tāla Cycle visual Playground */}
              {activeTab === 'simulator' && (
                <div className="aum-tab-content">
                  <div className="aum-page-header">
                    <h2 className="aum-page-title">Tāla Turn-Lifecycle Simulator</h2>
                    <p className="aum-page-desc">
                      Step through AUM's turn-based consciousness quarters. Test what the AI agent can or cannot do under each stage, and execute trigger commands locally.
                    </p>
                  </div>

                  {/* Stage Timeline Controls */}
                  <div className="aum-timeline-controls">
                    {['intake', 'blueprint', 'verification', 'manifest'].map((stage) => {
                      const isActive = simulatorStage === stage;
                      return (
                        <button
                          key={stage}
                          onClick={() => {
                            setSimulatorStage(stage);
                            setTerminalHistory([...terminalHistory, { type: 'system', text: `Tāla Beat changed manually to: ${stage.toUpperCase()}` }]);
                          }}
                          className={`aum-timeline-btn ${isActive ? 'active' : ''}`}
                        >
                          {stage}
                        </button>
                      );
                    })}
                  </div>

                  {/* Playground Content Layout */}
                  <div className="aum-columns-split">
                    
                    {/* Left: Active Stage Limitations details */}
                    <div className="aum-simulator-info-panel">
                      <div className="aum-simulator-details">
                        <header className="aum-simulator-header">
                          <span className="aum-detail-origin">
                            Current Stage Context
                          </span>
                          <h4 className="aum-simulator-stage-title">
                            {simulatorStage} Quarter
                          </h4>
                        </header>

                        <div className="aum-simulator-metrics">
                          <div className="aum-metric-row">
                            <span>Code Modifications Permitted:</span>
                            <span className={`aum-badge ${
                              simulatorStage === 'manifest' ? 'allow' : 'block'
                            }`}>
                              {simulatorStage === 'manifest' ? 'ALLOW' : 'BLOCKED'}
                            </span>
                          </div>

                          <div className="aum-metric-row">
                            <span>Requirement Intake Allowed:</span>
                            <span className={`aum-badge ${
                              simulatorStage === 'intake' ? 'allow' : 'block'
                            }`}>
                              {simulatorStage === 'intake' ? 'ALLOW' : 'BLOCKED'}
                            </span>
                          </div>

                          <div className="aum-metric-row">
                            <span>Constraint Verification Checked:</span>
                            <span className={`aum-badge ${
                              simulatorStage === 'verification' ? 'allow' : 'block'
                            }`}>
                              {simulatorStage === 'verification' ? 'ALLOW' : 'BLOCKED'}
                            </span>
                          </div>

                          <p className="aum-simulator-text-desc">
                            {simulatorStage === 'intake' && 'The agent interviews you, collecting target constraints. No blueprint files or source edits are permitted.'}
                            {simulatorStage === 'blueprint' && 'The agent drafts abstract diagrams and schemas under blueprint_template.md to map interface logic before coding.'}
                            {simulatorStage === 'verification' && 'The agent establishes tests and checks the compiler configurations to verify environment variables.'}
                            {simulatorStage === 'manifest' && 'The agent edits source files, runs compilation checks, checks code fallacies, and commits.'}
                          </p>
                        </div>
                      </div>

                      {/* Quick Trigger Actions */}
                      <div className="aum-quick-triggers">
                        <span className="aum-triggers-title">Quick Commands</span>
                        <div className="aum-triggers-flex">
                          <button
                            onClick={() => handleSimulatorCommand('RESOLVE Redesign handbook website')}
                            className="aum-trigger-btn"
                          >
                            RESOLVE [goal]
                          </button>
                          <button
                            onClick={() => handleSimulatorCommand('BEAT NEXT')}
                            className="aum-trigger-btn"
                          >
                            BEAT NEXT
                          </button>
                          <button
                            onClick={() => handleSimulatorCommand('DRONE')}
                            className="aum-trigger-btn"
                          >
                            DRONE
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right: Simulated CLI Terminal Log */}
                    <div className="aum-terminal-container">
                      {/* Terminal header */}
                      <div className="aum-terminal-header">
                        <div className="aum-terminal-controls-dots">
                          <div className="aum-dot red" />
                          <div className="aum-dot yellow" />
                          <div className="aum-dot green" />
                          <span className="aum-terminal-title">aum-terminal</span>
                        </div>
                        <span className="aum-terminal-beat">Tāla: {simulatorStage.toUpperCase()}</span>
                      </div>

                      {/* Logs output viewport */}
                      <div className="aum-terminal-body">
                        {terminalHistory.map((item, idx) => (
                          <div key={idx} className="aum-terminal-line">
                            {item.type === 'user' && (
                              <span className="user">$ {item.text}</span>
                            )}
                            {item.type === 'system' && (
                              <span className="system">{item.text}</span>
                            )}
                            {item.type === 'error' && (
                              <span className="error">{item.text}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Command entry bar */}
                      <div className="aum-terminal-input-bar">
                        <span className="prompt">$</span>
                        <input
                          type="text"
                          value={simulatorInput}
                          onChange={(e) => setSimulatorInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSimulatorCommand(simulatorInput);
                          }}
                          placeholder="Type 'BEAT next', 'DRONE', 'RESOLVE'... and press Enter"
                          className="aum-terminal-input"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab 4: Compiled Decisions (ADR/ARB) */}
              {activeTab === 'handbook' && (
                <div className="aum-tab-content">
                  <div className="aum-page-header">
                    <h2 className="aum-page-title">Handbook Decisions Index</h2>
                    <p className="aum-page-desc">
                      Search and explore the Architectural Review Board reports (ARBs) and Architecture Decision Records (ADRs) compiled inside the handbook.
                    </p>
                  </div>

                  {/* Search Filtering Bar */}
                  <div className="aum-search-wrapper">
                    <Search className="aum-search-icon-svg" size={18} />
                    <input
                      type="text"
                      placeholder="Search architecture logs and decisions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="aum-search-input-field"
                    />
                  </div>

                  {/* Results lists */}
                  <div className="aum-decisions-sections">
                    {/* ARBs Section */}
                    {filteredARBs.length > 0 && (
                      <div className="aum-decisions-group">
                        <h3 className="aum-decisions-group-title">
                          Architecture Review Board logs (ARBs)
                        </h3>
                        <div className="aum-decisions-grid">
                          {filteredARBs.map((doc) => (
                            <button
                              key={doc.filename}
                              onClick={() => setSelectedDocId(doc.filename)}
                              className="aum-decision-card"
                            >
                              <div className="aum-decision-card-body">
                                <span className="aum-decision-card-state">
                                  State: {doc.attributes.vedic_state || 'Suṣupti'}
                                </span>
                                <h4 className="aum-decision-card-title">
                                  {doc.attributes.title}
                                </h4>
                                <p className="aum-decision-card-desc">{doc.attributes.description}</p>
                              </div>
                              <span className="aum-decision-card-link">
                                View handbook log <ChevronRight size={10} />
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ADRs Section */}
                    {filteredADRs.length > 0 && (
                      <div className="aum-decisions-group">
                        <h3 className="aum-decisions-group-title">
                          Architecture Decision Records (ADRs)
                        </h3>
                        <div className="aum-decisions-grid">
                          {filteredADRs.map((doc) => (
                            <button
                              key={doc.filename}
                              onClick={() => setSelectedDocId(doc.filename)}
                              className="aum-decision-card"
                            >
                              <div className="aum-decision-card-body">
                                <span className="aum-decision-card-state">
                                  State: {doc.attributes.vedic_state || 'Suṣupti'}
                                </span>
                                <h4 className="aum-decision-card-title">
                                  {doc.attributes.title}
                                </h4>
                                <p className="aum-decision-card-desc">{doc.attributes.description}</p>
                              </div>
                              <span className="aum-decision-card-link">
                                View decision log <ChevronRight size={10} />
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredADRs.length === 0 && filteredARBs.length === 0 && (
                      <div className="aum-no-results">
                        No handbook logs found matching your query.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 5: Quick Start / CLI operations reference */}
              {activeTab === 'quickstart' && (
                <div className="aum-tab-content">
                  <section className="aum-section">
                    <h2 className="aum-hero-title">Handbook Operations & CLI Guide</h2>
                    <p className="aum-hero-desc-secondary">
                      AUM is purely instruction-based. It runs inside the AI agent's prompt window using natural language trigger commands to transition state beat levels, evaluate fallacies (*Hētvābhāsa*), and lock focus (*Saṅkalpa*).
                    </p>
                  </section>

                  {/* CLI command tables */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">CLI Directives Reference</h3>
                    <div className="aum-table-container">
                      <table className="aum-matrix-table">
                        <thead>
                          <tr className="bg-orange-950/10 text-orange-400 border-b border-orange-950/20">
                            <th>Natural Language Trigger</th>
                            <th>Tāla State</th>
                            <th>Engine Internal Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-950/10 text-zinc-400">
                          <tr>
                            <td className="font-mono font-bold text-zinc-300">AUM: SPARK [Idea description]</td>
                            <td>Paśyantī (Awakened Seed)</td>
                            <td>Appends timestamped raw thoughts to the gitignored thought incubator sparks log.</td>
                          </tr>
                          <tr>
                            <td className="font-mono font-bold text-zinc-300">AUM: RESOLVE [Goal Title]</td>
                            <td>Intake (Jāgrat)</td>
                            <td>Creates a new task log file and updates the active resolve id in `sphota.json`.</td>
                          </tr>
                          <tr>
                            <td className="font-mono font-bold text-zinc-300">AUM: BEAT next</td>
                            <td>Tāla transition (All)</td>
                            <td>Increments the cycle stage (Intake ➔ Blueprint ➔ Verification ➔ Manifestation).</td>
                          </tr>
                          <tr>
                            <td className="font-mono font-bold text-zinc-300">AUM: CONCORD</td>
                            <td>Blueprint ➔ Verification</td>
                            <td>Locks user approval of the plan, advancing state to verification stage.</td>
                          </tr>
                          <tr>
                            <td className="font-mono font-bold text-zinc-300">AUM: DRONE</td>
                            <td>Tanpura reference</td>
                            <td>Displays active project invariants, directory scopes, and current task focus.</td>
                          </tr>
                          <tr>
                            <td className="font-mono font-bold text-zinc-300">AUM: RETROSPECT [Scope]</td>
                            <td>Pratyavēkṣaṇa retrospective</td>
                            <td>Performs a linter fallacy self-study report tracking build failures.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Setup & integration details */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">Deploying rules to IDE Agents</h3>
                    <div className="aum-grid-2">
                      <div className="aum-card-panel text-xs">
                        <h4 className="aum-card-title">Cursor Integrations</h4>
                        <p className="aum-card-text text-zinc-500">
                          Copy the `.cursorrules` file to your project root. Cursor automatically loads system constraints, prompting the agent to request intent resolving before editing source code.
                        </p>
                      </div>

                      <div className="aum-card-panel text-xs">
                        <h4 className="aum-card-title">Cline / Roo Code Settings</h4>
                        <p className="aum-card-text text-zinc-500">
                          Copy the `.clinerules` file to your project root. Cline will enforce the sandboxing sheaths (*Kañcukas*), blocking unapproved tool invocations.
                        </p>
                      </div>

                      <div className="aum-card-panel text-xs">
                        <h4 className="aum-card-title">Claude Code Config</h4>
                        <p className="aum-card-text text-zinc-500">
                          Copy the `CLAUDE.md` guidelines file to your project root. Claude Code parses it at start to configure fallback command execution bounds.
                        </p>
                      </div>

                      <div className="aum-card-panel text-xs">
                        <h4 className="aum-card-title">GitHub Copilot Settings</h4>
                        <p className="aum-card-text text-zinc-500">
                          Place the `copilot-instructions.md` file inside your `.github/` folder. Copilot will respect text priorities mapped under Mīmāṃsā.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </>
          )}

        </main>
      </div>

    </div>
  );
}
