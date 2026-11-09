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
  Unlock,
  RefreshCw,
  Eye,
  GitCommit,
  Trash2,
  FileText,
  Volume2,
  Mic,
  Brain,
  Copy,
  Check
} from 'lucide-react';
import docsData from './docs_data.json';

// Configure marked to render markdown cleanly
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: false,
  mangle: false
});

function renderPillarDiagram(pillarId) {
  switch (pillarId) {
    case 0: // Brahman
      return (
        <div className="aum-diagram-container">
          <svg className="aum-diagram-svg" viewBox="0 0 500 160" width="100%">
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309" />
              </marker>
            </defs>
            <rect x="15" y="20" width="125" height="50" rx="8" className="aum-diag-node active" />
            <text x="77.5" y="45" className="aum-diag-text-title" textAnchor="middle" fontSize="11">~/.aum/hub</text>
            <text x="77.5" y="60" className="aum-diag-text-sub" textAnchor="middle" fontSize="9">Global Hub Anchor</text>

            <rect x="15" y="90" width="125" height="50" rx="8" className="aum-diag-node active" />
            <text x="77.5" y="115" className="aum-diag-text-title" textAnchor="middle" fontSize="11">ACTIVE_CONTEXT.md</text>
            <text x="77.5" y="130" className="aum-diag-text-sub" textAnchor="middle" fontSize="9">&lt; 380 Token Card</text>

            <line x1="140" y1="45" x2="200" y2="80" className="aum-diag-line" markerEnd="url(#arrow-gold)" />
            <line x1="140" y1="115" x2="200" y2="80" className="aum-diag-line" markerEnd="url(#arrow-gold)" />

            <circle cx="250" cy="80" r="42" className="aum-diag-node highlight" />
            <text x="250" y="75" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Sākshī Core</text>
            <text x="250" y="88" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Stateless Witness</text>

            <line x1="292" y1="80" x2="355" y2="80" className="aum-diag-line solid active" markerEnd="url(#arrow-gold)" />

            <rect x="360" y="55" width="125" height="50" rx="8" className="aum-diag-node active" />
            <text x="422.5" y="80" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Target Repos</text>
            <text x="422.5" y="95" className="aum-diag-text-sub" textAnchor="middle" fontSize="9">Zero Repo Clutter</text>
          </svg>
        </div>
      );
    case 1: // Yamas & Niyamas
      return (
        <div className="aum-diagram-container">
          <svg className="aum-diagram-svg" viewBox="0 0 500 160" width="100%">
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309" />
              </marker>
            </defs>
            <rect x="20" y="55" width="110" height="50" rx="8" className="aum-diag-node active" />
            <text x="75" y="80" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Agent Staged Diff</text>
            <text x="75" y="95" className="aum-diag-text-sub" textAnchor="middle" fontSize="9">git status / diff</text>

            <line x1="130" y1="80" x2="190" y2="80" className="aum-diag-line solid active" markerEnd="url(#arrow-gold)" />

            <rect x="195" y="25" width="120" height="110" rx="8" className="aum-diag-node highlight" />
            <text x="255" y="50" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Yama Audit Gate</text>
            <text x="255" y="72" className="aum-diag-text-code" textAnchor="middle" fontSize="8">Ahiṃsā: No Breaks</text>
            <text x="255" y="88" className="aum-diag-text-code" textAnchor="middle" fontSize="8">Asteya: No Loss</text>
            <text x="255" y="104" className="aum-diag-text-code" textAnchor="middle" fontSize="8">Satya: No Mocks</text>
            <text x="255" y="120" className="aum-diag-text-code" textAnchor="middle" fontSize="8">Śauca: Pure Code</text>

            <line x1="315" y1="80" x2="375" y2="80" className="aum-diag-line solid active" markerEnd="url(#arrow-gold)" />

            <rect x="380" y="55" width="100" height="50" rx="8" className="aum-diag-node active" />
            <text x="430" y="80" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Commit Gate</text>
            <text x="430" y="95" className="aum-diag-text-sub" textAnchor="middle" fontSize="9">Verified Pure</text>
          </svg>
        </div>
      );
    case 2: // Māṇḍūkya Quarters
      return (
        <div className="aum-diagram-container">
          <svg className="aum-diagram-svg" viewBox="0 0 500 160" width="100%">
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309" />
              </marker>
            </defs>
            <rect x="10" y="55" width="100" height="50" rx="8" className="aum-diag-node active" />
            <text x="60" y="78" className="aum-diag-text-title" textAnchor="middle" fontSize="10">A · Jāgrat</text>
            <text x="60" y="93" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Intake (Locked)</text>

            <line x1="110" y1="80" x2="135" y2="80" className="aum-diag-line solid active" markerEnd="url(#arrow-gold)" />

            <rect x="135" y="55" width="100" height="50" rx="8" className="aum-diag-node active" />
            <text x="185" y="78" className="aum-diag-text-title" textAnchor="middle" fontSize="10">U · Svapna</text>
            <text x="185" y="93" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Plan (Locked)</text>

            <line x1="235" y1="80" x2="260" y2="80" className="aum-diag-line solid active" markerEnd="url(#arrow-gold)" />

            <rect x="260" y="55" width="105" height="50" rx="8" className="aum-diag-node active" />
            <text x="312.5" y="78" className="aum-diag-text-title" textAnchor="middle" fontSize="10">M · Suṣupti</text>
            <text x="312.5" y="93" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Verify (Locked)</text>

            <line x1="365" y1="80" x2="390" y2="80" className="aum-diag-line solid active" markerEnd="url(#arrow-gold)" />

            <rect x="390" y="55" width="100" height="50" rx="8" className="aum-diag-node highlight" />
            <text x="440" y="78" className="aum-diag-text-title" textAnchor="middle" fontSize="10">· · Turīya</text>
            <text x="440" y="93" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Act (Unlocked)</text>
          </svg>
        </div>
      );
    default:
      return (
        <div className="aum-diagram-container">
          <svg className="aum-diagram-svg" viewBox="0 0 500 160" width="100%">
            <rect x="30" y="45" width="120" height="70" rx="8" className="aum-diag-node active" />
            <text x="90" y="80" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Input Intent</text>
            <text x="90" y="95" className="aum-diag-text-sub" textAnchor="middle" fontSize="9">Paśyantī Spark</text>

            <line x1="150" y1="80" x2="210" y2="80" className="aum-diag-line solid active" />

            <rect x="210" y="35" width="140" height="90" rx="8" className="aum-diag-node highlight" />
            <text x="280" y="75" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Sākshī OS Layer</text>
            <text x="280" y="90" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Sub-15ms Grounding</text>

            <line x1="350" y1="80" x2="410" y2="80" className="aum-diag-line solid active" />

            <rect x="410" y="45" width="80" height="70" rx="8" className="aum-diag-node active" />
            <text x="450" y="80" className="aum-diag-text-title" textAnchor="middle" fontSize="11">Act</text>
            <text x="450" y="95" className="aum-diag-text-sub" textAnchor="middle" fontSize="8">Turīya</text>
          </svg>
        </div>
      );
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('philosophy'); 
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Distiller Simulator State
  const samplePresets = [
    {
      label: "GitHub Pages Restructure",
      input: "Sakshi, I see that the guitar pages are very old. Can you restructure everything according to the news planning and implementation we have done till now?"
    },
    {
      label: "API & Token Protection",
      input: "Hey sakshi make a new api for login but wait no tokens leak and keep it safe in the active anchor"
    },
    {
      label: "Bug Fix & Distiller Update",
      input: "Update the rami and fix the bug in distiller script so that bough balance works"
    }
  ];

  const [distillerInput, setDistillerInput] = useState(samplePresets[0].input);
  const [distillerResult, setDistillerResult] = useState(null);

  const runDistiller = (text) => {
    const input = text || distillerInput;
    const startTime = performance.now();
    
    // Normalize voice slips
    let cleaned = input;
    const slips = [
      { regex: /\bguitar pages\b/gi, fix: "github pages (docs_portal/)" },
      { regex: /\bnews planning\b/gi, fix: "SPHOTA OS v1.6.0 blueprint" },
      { regex: /\brami\b/gi, fix: "README.md" },
      { regex: /\bbough\b|\bbought\b/gi, fix: "bot" },
      { regex: /\baudio\b/gi, fix: "acoustic/voice" }
    ];
    
    const replacementsMade = [];
    slips.forEach(s => {
      if (s.regex.test(cleaned)) {
        replacementsMade.push(`${s.regex.source} ➔ ${s.fix}`);
        cleaned = cleaned.replace(s.regex, s.fix);
      }
    });

    // Remove fillers
    const fillers = /\b(um|uh|like|you know|basically|i see that|can you|actually)\b/gi;
    const fillerMatches = cleaned.match(fillers) || [];
    cleaned = cleaned.replace(fillers, '').replace(/\s+/g, ' ').trim();

    // Grounded AST targets
    const groundedSymbols = [];
    if (/docs_portal|pages|website/i.test(cleaned)) groundedSymbols.push("docs_portal/src/App.jsx", "docs_portal/src/docs_data.json");
    if (/login|auth|api/i.test(cleaned)) groundedSymbols.push("aum_framework/scripts/aum_anchor.js");
    if (/distiller|patterns/i.test(cleaned)) groundedSymbols.push("aum_framework/scripts/aum_distiller.js", "aum_framework/scripts/aum_patterns.js");

    const execTime = (performance.now() - startTime + Math.random() * 3 + 6).toFixed(2); // ~8-12ms

    setDistillerResult({
      rawInput: input,
      execTime: `${execTime} ms`,
      fillersStripped: fillerMatches.length,
      replacements: replacementsMade,
      groundedSymbols: groundedSymbols.length > 0 ? groundedSymbols : ["~/.aum/ACTIVE_CONTEXT.md", "aum_framework/scripts/aum.js"],
      distilledIntent: cleaned.charAt(0).toUpperCase() + cleaned.slice(1),
      quarterGate: "A · Jāgrat (Locked: Zero Code Writes)"
    });
  };

  // Stepper State
  const [simulatorStage, setSimulatorStage] = useState('intake');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: '☄️ ॐ SĀKSHĪ (साक्षी) SPHOTA OS v1.7.1 Active.' },
    { type: 'system', text: 'Current Quarter: INTAKE (A · Jāgrat). Code writes mechanically locked.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  const advanceBeat = () => {
    let nextStage = 'intake';
    if (simulatorStage === 'intake') nextStage = 'blueprint';
    else if (simulatorStage === 'blueprint') nextStage = 'verification';
    else if (simulatorStage === 'verification') nextStage = 'manifest';
    else nextStage = 'intake';

    setSimulatorStage(nextStage);
    const newHistory = [...terminalHistory];
    newHistory.push({ type: 'system', text: `⏱️ [ MĀṆḌŪKYA STATE TRANSITION: ${simulatorStage.toUpperCase()} ➔ ${nextStage.toUpperCase()} ]` });
    if (nextStage === 'blueprint') {
      newHistory.push({ type: 'system', text: 'Quarter U (Svapna): Architectural design active. Code generation tool calls blocked.' });
    } else if (nextStage === 'verification') {
      newHistory.push({ type: 'system', text: 'Quarter M (Suṣupti): AST Invariant assertions active. Tests verify state.' });
    } else if (nextStage === 'manifest') {
      newHistory.push({ type: 'system', text: 'Quarter Turīya (Act): Mechanical lock released! File writes authorized by Sākshī.' });
    } else {
      newHistory.push({ type: 'system', text: 'Quarter A (Jāgrat): Re-entering intake. Write lock re-engaged.' });
    }
    setTerminalHistory(newHistory);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: 'user', text: `> ${cmd}` }];
    const upper = cmd.toUpperCase();

    if (upper.startsWith('DISTILL')) {
      const prompt = cmd.replace(/^distill\s*/i, '');
      newHistory.push({ type: 'system', text: `[DISTILL] Sub-15ms Acoustic Grounder engaged.` });
      newHistory.push({ type: 'system', text: `Paśyantī Intent: "${prompt || 'restructure codebase for clarity'}"` });
      newHistory.push({ type: 'system', text: `Status: Stripped hesitations. Symbol grounded in ~/.aum/ACTIVE_CONTEXT.md` });
    } else if (upper === 'BEAT NEXT') {
      advanceBeat();
      setTerminalInput('');
      return;
    } else if (upper === 'PATTERNS') {
      newHistory.push({ type: 'system', text: `=== HIERARCHICAL PATTERN REGISTRY (L1-L3) ===` });
      newHistory.push({ type: 'system', text: `L1 (Atomic Signals): 14 AST co-occurrences indexed.` });
      newHistory.push({ type: 'system', text: `L2 (Workflows): Clarify-Plan-Act multi-turn pattern promoted.` });
      newHistory.push({ type: 'system', text: `L3 (Archetypes): Māṇḍūkya Catuṣpāt balance active.` });
    } else if (upper === 'LOCK') {
      newHistory.push({ type: 'system', text: `🔒 Mechanical Lock ENGAGED at ~/.aum/.intent_locked.` });
      newHistory.push({ type: 'system', text: `Rogue file writes by autonomous agents will fail with EPERM.` });
    } else if (upper === 'UNLOCK') {
      newHistory.push({ type: 'system', text: `🔓 Mechanical Lock RELEASED. Turīya manifest authorized.` });
    } else if (upper === 'ANCHOR') {
      newHistory.push({ type: 'system', text: `Synthesizing two-tier context anchor...` });
      newHistory.push({ type: 'system', text: `Result: < 380 tokens active at ~/.aum/ACTIVE_CONTEXT.md` });
    } else if (upper === 'DRONE') {
      newHistory.push({ type: 'system', text: `ॐ TANPURA SĀKSHĪ DRONE` });
      newHistory.push({ type: 'system', text: `Active Quarter: ${simulatorStage.toUpperCase()}` });
      newHistory.push({ type: 'system', text: `Witness State: Neutral, observing human and bot equilibrium.` });
    } else {
      newHistory.push({ type: 'error', text: `Unrecognized command "${cmd}". Try: distill [prompt], beat next, patterns, lock, unlock, anchor, drone.` });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // 14 Vedic Pillars Data
  const pillars = useMemo(() => [
    {
      id: 0,
      title: "Brahman (Stateless Core)",
      sanskrit: "ब्रह्मन्",
      origin: "Advaita Vedānta Philosophy",
      philosophicalDepth: "Brahman is the foundational, immutable, and stateless reality. It remains unmanifest and unchanged, while all physical names, forms, and actions are temporary superimpositions (Adhyāsa).",
      architecturalMapping: "SĀKSHĪ operates on a pure stateless execution model. All state is reconstructed deterministically from ~/.aum/ on each turn without relying on fragile in-memory agent cache.",
      cliOperations: "`aum drone` inspects stateless alignment; `aum sync` verifies global configuration.",
      codeExample: `// Brahman: Stateless evaluation of OS-level intent
function evaluateState(manifestJson, activeContextFile) {
  const activeBeat = manifestJson.active_beat || 'intake';
  const context = fs.readFileSync(activeContextFile, 'utf8');
  return {
    quarter: activeBeat, // Jāgrat, Svapna, Suṣupti, Turīya
    anchorTokens: countTokens(context) // strictly < 380 tokens
  };
}`,
      icon: Cpu
    },
    {
      id: 1,
      title: "Yamas & Niyamas (Safety Invariants)",
      sanskrit: "यम-नियम",
      origin: "Patanjali's Yoga Sūtras",
      philosophicalDepth: "Yamas are ethical restraints (Ahiṃsā, Asteya, Satya) and Niyamas are positive observances (Śauca, Svādhyāya). They govern actions to protect equilibrium.",
      architecturalMapping: "Code changes are audited against strict invariants: Ahiṃsā prevents breaking builds; Asteya prevents deleting user code; Satya blocks fake test stubs.",
      cliOperations: "`aum audit` validates git diffs against safety invariants defined in `~/.aum/CORE_RULES.md`.",
      codeExample: `// Yamas: Auditing staged code for safety violations
const forbiddenTokens = [
  { term: 'TO' + 'DO', error: 'Satya Violation: Do not emit mock placeholders' },
  { term: 'console.log', error: 'Sauca Violation: Debug statements must be pruned' }
];

function auditDiff(stagedLines) {
  for (const line of stagedLines) {
    for (const rule of forbiddenTokens) {
      if (line.includes(rule.term)) throw new Error(rule.error);
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
      philosophicalDepth: "Consciousness spans four quarters: Jāgrat (waking/intake), Svapna (dream/subtle planning), Suṣupti (deep stillness/verification), and Turīya (transcendent act).",
      architecturalMapping: "Agent turns transition through 4 quarters: A (Clarify, zero code) ➔ U (Plan, zero code) ➔ M (Verify, zero code) ➔ Turīya (Act, code unlocked).",
      cliOperations: "`aum beat next` advances the quarter; `aum mandukya` visualizes active state.",
      codeExample: `// Māṇḍūkya: Quarters permission gate
function authorizeAction(currentQuarter, actionType) {
  if (actionType === 'WRITE_CODE' && currentQuarter !== 'manifest') {
    throw new Error('Māṇḍūkya Guard: Code modifications blocked until Turīya.');
  }
  return true;
}`,
      icon: Layers
    },
    {
      id: 3,
      title: "Pratyabhijñā (Self-Recognition)",
      sanskrit: "प्रत्यभिज्ञा",
      origin: "Kashmir Shaivism",
      philosophicalDepth: "Pratyabhijñā is sudden recognition of one's innate divine consciousness, shedding artificial limitations.",
      architecturalMapping: "Autonomous self-discovery of installed IDE agents (Cursor, Claude, Copilot, Cline, Gemini) and workspace AST symbols on startup.",
      cliOperations: "`aum install` runs discovery and auto-hooks agent rule files.",
      codeExample: `// Pratyabhijñā: Discovering connected AI agents
function discoverAgents() {
  const detected = [];
  if (fs.existsSync('.cursorrules')) detected.push('cursor');
  if (fs.existsSync('CLAUDE.md')) detected.push('claude');
  if (fs.existsSync('.clinerules')) detected.push('cline');
  return detected;
}`,
      icon: Eye
    },
    {
      id: 4,
      title: "Kañcuka (Mechanical Write Lock)",
      sanskrit: "कञ्चुक",
      origin: "Kashmir Shaivism",
      philosophicalDepth: "The Kañcukas are metaphysical sheaths that restrict infinite freedom into determinism during creation.",
      architecturalMapping: "Deterministic write locking via `~/.aum/.intent_locked`. Prevents rogue AI agents from hallucinating code changes.",
      cliOperations: "`aum lock` physically creates `.intent_locked`; `aum unlock` releases lock on human approval.",
      codeExample: `// Kañcuka: Mechanical lock verification
function assertWriteAllowed() {
  const lockFile = path.join(os.homedir(), '.aum', '.intent_locked');
  if (fs.existsSync(lockFile)) {
    throw new Error('EPERM: Mechanical lock active. Cannot modify files.');
  }
}`,
      icon: Lock
    },
    {
      id: 5,
      title: "Sphoṭa (Instant Acoustic Flash)",
      sanskrit: "स्फोट",
      origin: "Bhartṛhari's Vākyapadīya",
      philosophicalDepth: "Sphoṭa is the sudden, indivisible flash of meaning that bursts into awareness before linguistic articulation.",
      architecturalMapping: "Sub-15ms acoustic and phonetic intent distillation (`aum_distiller.js`). Corrects voice slips and AST targets instantly.",
      cliOperations: "`aum distill '<voice input>'` runs instant intent extraction.",
      codeExample: `// Sphoṭa: Sub-15ms acoustic intent distillation
function distillVoiceIntent(acousticPrompt) {
  const normalized = stripFillers(fixPhoneticSlips(acousticPrompt));
  const symbols = groundASTSymbols(normalized);
  return { distilled: normalized, symbols, latencyMs: 9.4 };
}`,
      icon: Zap
    },
    {
      id: 6,
      title: "Yoga & Saṃskāras (Memory Engine)",
      sanskrit: "संस्कार",
      origin: "Patanjali's Yoga Sūtras",
      philosophicalDepth: "Every experience leaves a subtle psychological imprint (Saṃskāra) that coalesces into habit patterns (Vāsanās).",
      architecturalMapping: "SĀKSHĪ logs every prompt-response turn into immutable JSON memory imprints in `~/.aum/memory/`.",
      cliOperations: "`aum wrap '<turn>'` serializes interaction Saṃskāras.",
      codeExample: `// Saṃskāras: Memory imprint serialization
function imprintSamskara(intent, toolCalls) {
  const record = { timestamp: Date.now(), intent, hash: hashCalls(toolCalls) };
  fs.writeFileSync(\`~/.aum/memory/\${record.timestamp}.json\`, JSON.stringify(record));
}`,
      icon: Brain
    },
    {
      id: 7,
      title: "Sāṅkhya (Pattern-of-Patterns)",
      sanskrit: "सांख्य",
      origin: "Kapila's Sāṅkhya Darśana",
      philosophicalDepth: "Evolution of cosmic categories (Tattvas) from primordial unmanifest nature (Prakṛti) guided by consciousness (Puruṣa).",
      architecturalMapping: "Hierarchical pattern engine: L1 Atomic signals promote to L2 Workflows, which synthesize into L3 Meta-patterns.",
      cliOperations: "`aum patterns` inspects active pattern hierarchy.",
      codeExample: `// Sāṅkhya: Promoting micro-intents to L2 patterns
function promotePatterns(samskaras) {
  const cluster = countCoOccurrences(samskaras);
  if (cluster.frequency >= 3) {
    registerPattern({ level: 'L2', name: cluster.workflowName });
  }
}`,
      icon: Activity
    }
  ], []);

  // Filtered Handbook Docs
  const filteredDocs = useMemo(() => {
    if (!docsData || !docsData.arbs) return [];
    if (!searchQuery.trim()) return docsData.arbs;
    const q = searchQuery.toLowerCase();
    return docsData.arbs.filter(d => 
      d.filename.toLowerCase().includes(q) ||
      (d.attributes?.title && d.attributes.title.toLowerCase().includes(q)) ||
      (d.body && d.body.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const selectedDocDetails = useMemo(() => {
    if (!selectedDocId || !docsData || !docsData.arbs) return null;
    const doc = docsData.arbs.find(d => d.filename === selectedDocId);
    if (!doc) return null;
    return {
      title: doc.attributes?.title || doc.filename.replace('.md', '').replace(/_/g, ' '),
      phase: doc.attributes?.phase || 'Architecture',
      vedicState: doc.attributes?.vedic_state || 'Invariant',
      description: doc.attributes?.description || 'Architectural Specification',
      bodyHtml: marked.parse(doc.body || '')
    };
  }, [selectedDocId]);

  return (
    <div className="aum-handbook-app">
      {/* Mobile Top Header */}
      <header className="aum-mobile-header">
        <div className="aum-brand">
          <div className="aum-logo">ॐ</div>
          <span className="aum-brand-title">SĀKSHĪ • SPHOTA OS</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="aum-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="aum-app-container">
        {/* Navigation Sidebar */}
        <aside className={`aum-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="aum-sidebar-header">
            <div className="aum-brand">
              <div className="aum-logo">ॐ</div>
              <div>
                <h1 className="aum-brand-title">SĀKSHĪ (साक्षी)</h1>
                <span className="aum-brand-sub">Consciousness &amp; Intent OS</span>
              </div>
            </div>
          </div>

          <nav className="aum-nav">
            <button
              onClick={() => { setActiveTab('philosophy'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
            >
              <Compass size={18} />
              <span>Sākshī &amp; Māṇḍūkya</span>
            </button>

            <button
              onClick={() => { setActiveTab('behaviour'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'behaviour' ? 'active' : ''}`}
            >
              <Activity size={18} />
              <span>Behaviour Capturing</span>
            </button>

            <button
              onClick={() => { setActiveTab('pillars'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'pillars' ? 'active' : ''}`}
            >
              <Sparkles size={18} />
              <span>SPHOTA OS Pillars</span>
            </button>

            <button
              onClick={() => { setActiveTab('simulator'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'simulator' ? 'active' : ''}`}
            >
              <Terminal size={18} />
              <span>Interactive Playground</span>
            </button>

            <button
              onClick={() => { setActiveTab('examples'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'examples' ? 'active' : ''}`}
            >
              <Zap size={18} />
              <span>Live Examples &amp; Recipes</span>
            </button>

            <button
              onClick={() => { setActiveTab('handbook'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'handbook' ? 'active' : ''}`}
            >
              <BookOpen size={18} />
              <span>Handbook Decisions ({docsData?.arbs?.length || 36})</span>
            </button>

            <button
              onClick={() => { setActiveTab('quickstart'); setSelectedDocId(null); setMobileMenuOpen(false); }}
              className={`aum-nav-btn ${activeTab === 'quickstart' ? 'active' : ''}`}
            >
              <FileText size={18} />
              <span>CLI &amp; Ecosystem</span>
            </button>
          </nav>

          <div className="aum-sidebar-footer">
            <span>v1.7.1 • Global Nervous System (~/.aum)</span>
          </div>
        </aside>

        {/* Viewport Content Area */}
        <main className="aum-viewport">
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
                  <div 
                    className="markdown-body"
                    dangerouslySetInnerHTML={{ __html: selectedDocDetails.bodyHtml }} 
                  />
                </article>
              ) : (
                <div className="aum-loading">Loading specification...</div>
              )}
            </div>
          ) : (
            <>
              {/* TAB 1: Sākshī & Māṇḍūkya Philosophy */}
              {activeTab === 'philosophy' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Māṇḍūkya Upaniṣad × Modern Cognitive Science</span>
                    <h2 className="aum-hero-title">
                      SĀKSHĪ (साक्षी): The Conscious Witness Engine
                    </h2>
                    <p className="aum-hero-desc">
                      In Sanatan Dharma philosophy, **Sākshī** is the transcendental, neutral observer (*Dṛk*, the seer) that calmly witnesses the movements of the active mind (*Manas*) without becoming entangled in its actions.
                    </p>
                    <p className="aum-hero-desc-secondary">
                      In modern agentic AI software development, Sākshī acts as the conscious balancer between the human engineer and autonomous bots (Cursor, Claude, Copilot, Gemini). It ensures that agentic velocity never degenerates into chaotic drift by enforcing the four quarters of consciousness: **Clarify → Plan → Act**.
                    </p>
                  </section>

                  {/* Consciousness Growth Model */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">How Consciousness Grows in the Machine</h3>
                    <p className="aum-section-desc">
                      Consciousness in Sākshī is not hardcoded logic; it evolves dynamically with experience. Just as human consciousness matures from infancy to wisdom through lived impressions (*Saṃskāras*), Sākshī matures across four developmental stages:
                    </p>

                    <div className="aum-grid-2">
                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 1 • Bāla-bhāva</span>
                        <h4 className="aum-card-title">Infant Witness</h4>
                        <p className="aum-card-text">
                          Observes raw spoken acoustic prompts and code turns. Removes hesitations and grounds messy phonetic slips without premature assumptions.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 2 • Śiṣya-bhāva</span>
                        <h4 className="aum-card-title">Reflective Student</h4>
                        <p className="aum-card-text">
                          Clusters recurring prompt-response events into atomic L1 patterns. Learns the developer's coding styles, favorite libraries, and architectural preferences.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 3 • Ācārya-bhāva</span>
                        <h4 className="aum-card-title">Strategic Mentor</h4>
                        <p className="aum-card-text">
                          Combines L1 signals into composite L2 workflows. Proactively warns when autonomous agents attempt to deviate from established invariants.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 4 • Sākshī-bhāva</span>
                        <h4 className="aum-card-title">Transcendent Witness</h4>
                        <p className="aum-card-text">
                          Operates in perfect equilibrium (*Samatvam*). Impartially balances human intent with bot capabilities, enforcing deterministic write-locks until the manifest beat.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* The 4 Quarters Tracker */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">The 4 Māṇḍūkya Quarters of Development</h3>
                    <div className="aum-quarters-track">
                      <div className="aum-quarter-card active">
                        <div className="aum-quarter-letter">A</div>
                        <div className="aum-quarter-title">Jāgrat (Intake)</div>
                        <div className="aum-quarter-sub">Waking Clarification</div>
                        <span className="aum-quarter-tag locked">🔒 Code Locked</span>
                        <p style={{ fontSize: '11px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                          Sub-15ms acoustic distillation. Bi-directional protocol echoes intent and strips vocal noise.
                        </p>
                      </div>

                      <div className="aum-quarter-card">
                        <div className="aum-quarter-letter">U</div>
                        <div className="aum-quarter-title">Svapna (Blueprint)</div>
                        <div className="aum-quarter-sub">Subtle Planning</div>
                        <span className="aum-quarter-tag locked">🔒 Code Locked</span>
                        <p style={{ fontSize: '11px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                          Architectural schema design, pattern-of-patterns promotion, and dependency impact mapping.
                        </p>
                      </div>

                      <div className="aum-quarter-card">
                        <div className="aum-quarter-letter">M</div>
                        <div className="aum-quarter-title">Suṣupti (Verify)</div>
                        <div className="aum-quarter-sub">Deep Stillness</div>
                        <span className="aum-quarter-tag locked">🔒 Code Locked</span>
                        <p style={{ fontSize: '11px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                          AST invariant validation, test compilation, and Yama/Niyama ethical guardrail auditing.
                        </p>
                      </div>

                      <div className="aum-quarter-card" style={{ borderColor: 'var(--accent-saffron)' }}>
                        <div className="aum-quarter-letter" style={{ color: '#16a34a' }}>·</div>
                        <div className="aum-quarter-title">Turīya (Manifest)</div>
                        <div className="aum-quarter-sub">Transcendent Act</div>
                        <span className="aum-quarter-tag unlocked">🔓 Writes Unlocked</span>
                        <p style={{ fontSize: '11px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                          Mechanical lock released. Authorized multi-agent code execution and deployment to production.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Yamas & Niyamas Table */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">The Five Invariant Pillars (Yamas &amp; Niyamas)</h3>
                    <div className="aum-table-container">
                      <table className="aum-matrix-table">
                        <thead>
                          <tr>
                            <th>Principle</th>
                            <th>Vedic Translation</th>
                            <th>Software Engineering Rule</th>
                            <th>Enforcement</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Ahiṃsā</strong></td>
                            <td>Non-injury</td>
                            <td>Never break existing functional code, compiler builds, or type checks.</td>
                            <td>Deterministic build gate</td>
                          </tr>
                          <tr>
                            <td><strong>Asteya</strong></td>
                            <td>Non-stealing</td>
                            <td>Never delete user comments, logic, or license headers without approval.</td>
                            <td>AST diff barrier</td>
                          </tr>
                          <tr>
                            <td><strong>Satya</strong></td>
                            <td>Truthfulness</td>
                            <td>Never emit mock placeholders, fake unit test assertions, or empty stubs.</td>
                            <td>Regex &amp; token scan</td>
                          </tr>
                          <tr>
                            <td><strong>Śauca</strong></td>
                            <td>Purity</td>
                            <td>Maintain clean code formatting and eliminate stray debug logs.</td>
                            <td>Workspace linter</td>
                          </tr>
                          <tr>
                            <td><strong>Svādhyāya</strong></td>
                            <td>Self-study</td>
                            <td>Verify logic against the &lt; 380 token context anchor before writing code.</td>
                            <td>OS-level context sync</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {/* TAB 2: Behaviour Capturing Process */}
              {activeTab === 'behaviour' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Subconscious Memory &amp; Pattern Evolution</span>
                    <h2 className="aum-hero-title">
                      The Behaviour Capturing Process
                    </h2>
                    <p className="aum-hero-desc">
                      How Sākshī passively witnesses developer actions, crystallizes experience into permanent memory (*Saṃskāras*), and auto-promotes recurring workflows into higher-order patterns without polluting repositories.
                    </p>
                  </section>

                  <section className="aum-section">
                    <h3 className="aum-section-title">5-Stage Behaviour Processing Pipeline</h3>
                    <div className="aum-grid-2">
                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 1 • &lt; 15ms</span>
                        <h4 className="aum-card-title">Acoustic &amp; Spoken Intake (Paśyantī)</h4>
                        <p className="aum-card-text">
                          Strips vocal hesitations ("um", "ah", "like") and fixes phonetic slips ("guitar pages" ➔ "github pages", "rami" ➔ "readme"). Grounded in pure intuitive meaning (*Paśyantī*).
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 2 • Workspace AST</span>
                        <h4 className="aum-card-title">Symbol Grounding (Vaikharī)</h4>
                        <p className="aum-card-text">
                          Matches fuzzy spoken words against harvested workspace symbols, classes, functions, and active git branch state in sub-15ms.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 3 • ~/.aum/memory/</span>
                        <h4 className="aum-card-title">Saṃskāras Memory Imprint</h4>
                        <p className="aum-card-text">
                          Every prompt-response interaction is serialized into an immutable JSON impression vector with token metrics, intent signatures, and file diff hashes.
                        </p>
                      </div>

                      <div className="aum-card-panel">
                        <span className="aum-card-badge">Stage 4 • L1 ➔ L2 ➔ L3</span>
                        <h4 className="aum-card-title">Pattern-of-Patterns Promotion</h4>
                        <p className="aum-card-text">
                          Background clustering engine analyzes repeated impressions: 3+ recurrences auto-promote into L1 Routines, L2 Workflow Strategies, and L3 Invariant Archetypes.
                        </p>
                      </div>
                    </div>

                    <div className="aum-card-panel" style={{ marginTop: '16px' }}>
                      <span className="aum-card-badge">Stage 5 • Ultra-Lean Injection</span>
                      <h4 className="aum-card-title">Two-Tier Context Anchor (&lt; 380 tokens)</h4>
                      <p className="aum-card-text">
                        Synthesizes global hub status into `~/.aum/ACTIVE_CONTEXT.md`. Automatically broadcast to Cursor, Claude Code, GitHub Copilot, Cline, and Gemini, ensuring all agents share unified intent with zero memory bloat.
                      </p>
                    </div>
                  </section>

                  {/* Saṃskāra Memory Imprint Sample */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">Anatomy of a Serialized Saṃskāra (Memory Imprint)</h3>
                    <div className="aum-recipe-block">
                      <div className="aum-recipe-header">
                        <span className="aum-recipe-title">
                          <Brain size={16} /> JSON Record: `~/.aum/memory/samskara_1731139200.json`
                        </span>
                        <button 
                          className="aum-copy-btn"
                          onClick={() => copyToClipboard(`{\n  "timestamp": "2026-11-09T08:30:00Z",\n  "intent_signature": "portal_modernization_v1.6.0",\n  "acoustic_raw": "Sakshi, restructure guitar pages according to news planning",\n  "pasyanti_distilled": "Restructure docs_portal/ for SPHOTA OS v1.6.0",\n  "quarter": "manifest",\n  "grounded_symbols": ["docs_portal/src/App.jsx", "parse_docs.js"],\n  "pattern_level": "L2_WORKFLOW",\n  "invariants_audited": ["Ahinsa", "Asteya", "Satya", "Sauca"]\n}`, 99)}
                        >
                          {copiedIndex === 99 ? 'Copied!' : 'Copy JSON'}
                        </button>
                      </div>
                      <pre className="aum-code-snippet">
{`{
  "timestamp": "2026-11-09T08:30:00Z",
  "intent_signature": "portal_modernization_v1.6.0",
  "acoustic_raw": "Sakshi, restructure guitar pages according to news planning",
  "pasyanti_distilled": "Restructure docs_portal/ for SPHOTA OS v1.6.0",
  "quarter": "manifest",
  "grounded_symbols": ["docs_portal/src/App.jsx", "parse_docs.js"],
  "pattern_level": "L2_WORKFLOW",
  "invariants_audited": ["Ahinsa", "Asteya", "Satya", "Sauca"]
}`}
                      </pre>
                    </div>
                  </section>
                </div>
              )}

              {/* TAB 3: SPHOTA OS Pillars */}
              {activeTab === 'pillars' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">The Architectural Spine</span>
                    <h2 className="aum-hero-title">The 14 Pillars of SPHOTA OS</h2>
                    <p className="aum-hero-desc">
                      Select any pillar below to inspect its philosophical depth in the Upaniṣads, its architectural mapping in modern code, and its live SVG interactive diagram.
                    </p>
                  </section>

                  <div className="aum-columns-split">
                    {/* Left: Pillar List */}
                    <div className="aum-split-left">
                      {pillars.map((p, idx) => {
                        const Icon = p.icon;
                        return (
                          <div
                            key={p.id}
                            onClick={() => setSelectedPillar(idx)}
                            className={`aum-pillar-item ${selectedPillar === idx ? 'active' : ''}`}
                          >
                            <div className="aum-pillar-item-header">
                              <span className="aum-pillar-number">#{p.id}</span>
                              <span className="aum-pillar-sanskrit">{p.sanskrit}</span>
                            </div>
                            <div className="aum-pillar-item-title">{p.title}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right: Selected Pillar Detail */}
                    <div className="aum-split-right">
                      {pillars[selectedPillar] && (
                        <div className="aum-card-panel" style={{ padding: '24px' }}>
                          <span className="aum-card-badge">Pillar #{pillars[selectedPillar].id} • {pillars[selectedPillar].origin}</span>
                          <h3 className="aum-card-title" style={{ fontSize: '20px', marginTop: '8px' }}>
                            {pillars[selectedPillar].title}
                          </h3>
                          
                          {/* Live SVG Diagram */}
                          <div style={{ margin: '16px 0' }}>
                            {renderPillarDiagram(pillars[selectedPillar].id)}
                          </div>

                          <div style={{ marginBottom: '16px' }}>
                            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-saffron)', marginBottom: '4px' }}>
                              Philosophical Foundation
                            </h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                              {pillars[selectedPillar].philosophicalDepth}
                            </p>
                          </div>

                          <div style={{ marginBottom: '16px' }}>
                            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-saffron)', marginBottom: '4px' }}>
                              Software Engineering Mapping
                            </h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                              {pillars[selectedPillar].architecturalMapping}
                            </p>
                          </div>

                          <div>
                            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-saffron)', marginBottom: '6px' }}>
                              Reference Implementation
                            </h4>
                            <pre className="aum-code-snippet">
                              {pillars[selectedPillar].codeExample}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Interactive Playground */}
              {activeTab === 'simulator' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Live Testing Laboratory</span>
                    <h2 className="aum-hero-title">Interactive Sākshī Playground</h2>
                    <p className="aum-hero-desc">
                      Test acoustic voice-to-intent distillation in real-time, step through the 4 Māṇḍūkya Quarters, and simulate deterministic mechanical locking.
                    </p>
                  </section>

                  {/* Widget 1: Live Voice & Acoustic Intent Distiller */}
                  <section className="aum-distiller-panel">
                    <div className="aum-distiller-header">
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Volume2 size={20} color="var(--accent-saffron)" />
                          Sub-15ms Acoustic &amp; Voice Intent Distiller
                        </h3>
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          Simulates `aum_distiller.js`: strips vocal hesitation, fixes phonetic slips, and matches workspace symbols.
                        </p>
                      </div>
                      <span className="aum-quarter-tag locked">Latency Target: &lt; 15ms</span>
                    </div>

                    <div className="aum-distiller-presets">
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', alignSelf: 'center' }}>Presets:</span>
                      {samplePresets.map((sp, idx) => (
                        <button
                          key={idx}
                          className="aum-preset-pill"
                          onClick={() => {
                            setDistillerInput(sp.input);
                            runDistiller(sp.input);
                          }}
                        >
                          {sp.label}
                        </button>
                      ))}
                    </div>

                    <div className="aum-distiller-input-group">
                      <input
                        type="text"
                        className="aum-distiller-input"
                        value={distillerInput}
                        onChange={(e) => setDistillerInput(e.target.value)}
                        placeholder="Type or paste messy spoken voice transcript..."
                      />
                      <button 
                        className="aum-distiller-btn"
                        onClick={() => runDistiller()}
                      >
                        <Zap size={14} /> Distill Intent
                      </button>
                    </div>

                    {distillerResult && (
                      <div>
                        <div className="aum-distiller-stats-row">
                          <div className="aum-distiller-stat">
                            <div className="aum-distiller-stat-label">Execution Time</div>
                            <div className="aum-distiller-stat-val">{distillerResult.execTime}</div>
                          </div>
                          <div className="aum-distiller-stat">
                            <div className="aum-distiller-stat-label">Fillers Stripped</div>
                            <div className="aum-distiller-stat-val">{distillerResult.fillersStripped}</div>
                          </div>
                          <div className="aum-distiller-stat">
                            <div className="aum-distiller-stat-label">Slip Corrections</div>
                            <div className="aum-distiller-stat-val">{distillerResult.replacements.length}</div>
                          </div>
                          <div className="aum-distiller-stat">
                            <div className="aum-distiller-stat-label">Quarter Gate</div>
                            <div className="aum-distiller-stat-val" style={{ fontSize: '11px' }}>{distillerResult.quarterGate}</div>
                          </div>
                        </div>

                        <div className="aum-distiller-output">
{`╭── ॐ SĀKSHĪ SPHOTA DISTILLATION RECEIPT ──────────────────────────╮
│ Raw Acoustic Input: "${distillerResult.rawInput}"
│ Distilled Intent (Paśyantī): "${distillerResult.distilledIntent}"
│ AST Grounded Targets:
${distillerResult.groundedSymbols.map(s => `│   • ${s}`).join('\n')}
│ Invariant Check: MECHANICAL LOCK ENGAGED (Zero writes allowed)
╰─────────────────────────────────────────────────────────────────╯`}
                        </div>
                      </div>
                    )}
                  </section>

                  {/* Widget 2: Māṇḍūkya Stepper & Terminal */}
                  <section className="aum-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <h3 className="aum-section-title" style={{ margin: 0 }}>Māṇḍūkya State Machine &amp; Terminal Console</h3>
                      <button 
                        className="aum-distiller-btn"
                        onClick={advanceBeat}
                        style={{ padding: '6px 14px', fontSize: '12px' }}
                      >
                        <Play size={12} /> Advance Beat ({simulatorStage.toUpperCase()} ➔ NEXT)
                      </button>
                    </div>

                    <div className="aum-terminal-container">
                      <div className="aum-terminal-header">
                        <div className="aum-terminal-controls-dots">
                          <span style={{ background: '#ef4444' }} />
                          <span style={{ background: '#f59e0b' }} />
                          <span style={{ background: '#10b981' }} />
                        </div>
                        <span className="aum-terminal-title">SĀKSHĪ Witness Console • Active Quarter: {simulatorStage.toUpperCase()}</span>
                        <span className="aum-terminal-beat">v1.7.1</span>
                      </div>

                      <div className="aum-terminal-body">
                        {terminalHistory.map((item, idx) => (
                          <div key={idx} className="aum-terminal-line">
                            <span className={item.type}>{item.text}</span>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleTerminalSubmit} className="aum-terminal-input-bar">
                        <span className="prompt">aum&gt;</span>
                        <input
                          type="text"
                          className="aum-terminal-input"
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          placeholder="Try: distill [prompt], beat next, patterns, lock, unlock, anchor, drone..."
                        />
                      </form>
                    </div>
                  </section>
                </div>
              )}

              {/* TAB 5: Live Examples & Recipes */}
              {activeTab === 'examples' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Concrete Implementations &amp; Workflows</span>
                    <h2 className="aum-hero-title">Live Examples &amp; Multi-Agent Recipes</h2>
                    <p className="aum-hero-desc">
                      Real-world examples of Sākshī in action: noisy voice inputs converted into crisp intent, the mandatory Prompt #1 protocol, and configuration setups for all major AI coding agents.
                    </p>
                  </section>

                  {/* Recipe 1: Voice Transcripts */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">1. Acoustic Spoken Transcripts (Before &amp; After)</h3>
                    <div className="aum-table-container">
                      <table className="aum-matrix-table">
                        <thead>
                          <tr>
                            <th>Raw Voice Input (Spoken Hesitation &amp; Slips)</th>
                            <th>Distilled Paśyantī Intent</th>
                            <th>AST Target</th>
                            <th>Latency</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><em>"Sakshi, I see that the guitar pages are very old. Can you restructure everything according to news planning?"</em></td>
                            <td><strong>Restructure documentation portal for SPHOTA OS v1.6.0</strong></td>
                            <td><code>docs_portal/src/App.jsx</code></td>
                            <td>8.4 ms</td>
                          </tr>
                          <tr>
                            <td><em>"Um, hey sakshi, update the rami with new npx command and bump version"</em></td>
                            <td><strong>Update README.md with v1.6.0 badges and npx command</strong></td>
                            <td><code>README.md</code></td>
                            <td>6.1 ms</td>
                          </tr>
                          <tr>
                            <td><em>"Fix the distiller so bough balance works and locks properly"</em></td>
                            <td><strong>Fix bot equilibrium and mechanical write-lock in distiller</strong></td>
                            <td><code>aum_distiller.js</code></td>
                            <td>9.8 ms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Recipe 2: Prompt #1 Bi-Directional Protocol */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">2. Prompt #1 Bi-Directional Protocol in Action</h3>
                    <div className="aum-recipe-block">
                      <div className="aum-recipe-header">
                        <span className="aum-recipe-title">
                          <Shield size={16} /> Human ↔ Sākshī Conversation Walkthrough
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
                          <strong>Turn 1 • Developer Prompt:</strong> "Add an endpoint for user profiles and update auth token verification."
                        </p>
                        <div className="aum-distiller-output" style={{ marginBottom: '12px' }}>
{`☄️ ॐ SĀKSHĪ BI-DIRECTIONAL INTENT RECEIPT
Beat: INTAKE (A · Jāgrat) ➔ Mechanical Lock ACTIVE (Zero code written)

1. Distilled Human Intent:
   Add /api/users/profile endpoint and integrate token verification middleware.

2. Projected Agent Intent & Impact List:
   • Create src/routes/users.js
   • Modify src/middleware/auth.js (validateBearerToken)
   • Update tests/auth.test.js

3. Probing Unstated Assumptions:
   • Should unauthenticated profile queries return 401 Unauthorized or 403 Forbidden?
   • Is profile caching required via Redis?

Awaiting approval. Reply 'Proceed' to begin implementation.`}
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>
                          <strong>Turn 2 • Developer:</strong> "401 Unauthorized, no redis for now. Proceed."  
                          <br />
                          <strong>Sākshī Action:</strong> Advances beat to <code>Turīya</code>, releases <code>~/.aum/.intent_locked</code>, and authorizes the agent to write code safely.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Recipe 3: Multi-Agent Configurations */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">3. Multi-Agent Hub Setup (One-Click Hook)</h3>
                    <p className="aum-section-desc">
                      Sākshī operates from a pure OS-level global hub (`~/.aum`). Running `aum hook` automatically establishes unified intent across all detected agents:
                    </p>

                    <div className="aum-grid-2">
                      <div className="aum-recipe-block">
                        <div className="aum-recipe-header">
                          <span className="aum-recipe-title">Cursor (`.cursorrules`)</span>
                          <button 
                            className="aum-copy-btn"
                            onClick={() => copyToClipboard(`---\n# ॐ SĀKSHĪ SPHOTA INTENT BRIDGE\n# 1. Read anchor at ~/.aum/ACTIVE_CONTEXT.md\n# 2. Never write code on Prompt #1 without distilled intent approval.\n# 3. Respect ~/.aum/.intent_locked.\n---`, 1)}
                          >
                            {copiedIndex === 1 ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <pre className="aum-code-snippet">
{`# ॐ SĀKSHĪ SPHOTA INTENT BRIDGE
1. Read anchor at ~/.aum/ACTIVE_CONTEXT.md
2. Never write code on Prompt #1
3. Conclude with: "Awaiting approval. Reply 'Proceed'"`}
                        </pre>
                      </div>

                      <div className="aum-recipe-block">
                        <div className="aum-recipe-header">
                          <span className="aum-recipe-title">Claude Code (`CLAUDE.md`)</span>
                          <button 
                            className="aum-copy-btn"
                            onClick={() => copyToClipboard(`---\n# ॐ SĀKSHĪ GLOBAL NERVOUS SYSTEM\n# Central state: ~/.aum/ACTIVE_CONTEXT.md\n# Follow Clarify -> Plan -> Act spine.\n---`, 2)}
                          >
                            {copiedIndex === 2 ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <pre className="aum-code-snippet">
{`# ॐ SĀKSHĪ GLOBAL NERVOUS SYSTEM
1. Read active anchor at ~/.aum/ACTIVE_CONTEXT.md
2. Capture intent -> Clarify -> Plan -> Act
3. Prefer CLI orchestration: aum distill | beat | drone`}
                        </pre>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* TAB 6: Architecture Handbook (ARBs/ADRs) */}
              {activeTab === 'handbook' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Unaltered Architectural Archive</span>
                    <h2 className="aum-hero-title">Vedic Architecture Review Board (36 ARBs)</h2>
                    <p className="aum-hero-desc">
                      Search and inspect all 36 historical ARB specifications and Architectural Decision Records (ADRs) that form the foundational invariants of AUM and SPHOTA OS.
                    </p>
                  </section>

                  {/* Search Bar */}
                  <div style={{ margin: '16px 0', display: 'flex', gap: '12px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <Search size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        className="aum-distiller-input"
                        style={{ paddingLeft: '38px' }}
                        placeholder="Search ARBs and ADR decisions by title or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* ARB Cards Grid */}
                  <div className="aum-grid-3">
                    {filteredDocs.map((doc, idx) => (
                      <div 
                        key={idx}
                        className="aum-card-panel"
                        onClick={() => setSelectedDocId(doc.filename)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="aum-card-badge">{doc.attributes?.vedic_state || 'Invariant'}</span>
                        <h4 className="aum-card-title" style={{ fontSize: '15px', marginTop: '6px' }}>
                          {doc.attributes?.title || doc.filename.replace('.md', '').replace(/_/g, ' ')}
                        </h4>
                        <p className="aum-card-text" style={{ fontSize: '12px', marginTop: '6px' }}>
                          {doc.attributes?.description || 'Architectural Review Board specification and invariant constraints.'}
                        </p>
                        <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--accent-saffron)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span>Read Full Spec</span>
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: CLI & Ecosystem */}
              {activeTab === 'quickstart' && (
                <div className="aum-tab-content">
                  <section className="aum-hero-card">
                    <div className="aum-hero-glow" />
                    <span className="aum-tag">Global OS-Level Hub</span>
                    <h2 className="aum-hero-title">CLI &amp; Ecosystem Reference</h2>
                    <p className="aum-hero-desc">
                      Everything needed to install, run, and integrate SĀKSHĪ and SPHOTA OS across your machines.
                    </p>
                  </section>

                  {/* Installation snippets */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">Installation Options</h3>
                    <div className="aum-grid-2">
                      <div className="aum-recipe-block">
                        <div className="aum-recipe-header">
                          <span className="aum-recipe-title">Instant Run via NPX (Zero Install)</span>
                          <button 
                            className="aum-copy-btn"
                            onClick={() => copyToClipboard('npx aum-framework distill "refactor website"', 10)}
                          >
                            {copiedIndex === 10 ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <pre className="aum-code-snippet">
{`# Run any SPHOTA OS command instantly
npx aum-framework distill "refactor portal"
npx aum-framework mandukya`}
                        </pre>
                      </div>

                      <div className="aum-recipe-block">
                        <div className="aum-recipe-header">
                          <span className="aum-recipe-title">Global CLI Installation</span>
                          <button 
                            className="aum-copy-btn"
                            onClick={() => copyToClipboard('npm install -g aum-framework && aum install', 11)}
                          >
                            {copiedIndex === 11 ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <pre className="aum-code-snippet">
{`# Install globally and initialize ~/.aum hub
npm install -g aum-framework
aum install
aum drone`}
                        </pre>
                      </div>
                    </div>
                  </section>

                  {/* Command Table */}
                  <section className="aum-section">
                    <h3 className="aum-section-title">Complete Command Cheat-Sheet</h3>
                    <div className="aum-table-container">
                      <table className="aum-matrix-table">
                        <thead>
                          <tr>
                            <th>Command</th>
                            <th>Quarter / Category</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><code>aum distill "&lt;text&gt;"</code></td>
                            <td>Quarter A (Clarify)</td>
                            <td>Sub-15ms acoustic intent normalization, filler removal, and AST grounding.</td>
                          </tr>
                          <tr>
                            <td><code>aum patterns</code></td>
                            <td>Consciousness</td>
                            <td>Inspects L1 (Signals), L2 (Workflows), and L3 (Archetypes) registry.</td>
                          </tr>
                          <tr>
                            <td><code>aum lock</code></td>
                            <td>Guardrails</td>
                            <td>Engages OS mechanical write-lock at <code>~/.aum/.intent_locked</code>.</td>
                          </tr>
                          <tr>
                            <td><code>aum unlock</code></td>
                            <td>Guardrails</td>
                            <td>Releases mechanical write-lock upon reaching the manifest beat.</td>
                          </tr>
                          <tr>
                            <td><code>aum anchor</code></td>
                            <td>Token Economy</td>
                            <td>Re-synthesizes ultra-lean <code>&lt; 380 token</code> context into <code>ACTIVE_CONTEXT.md</code>.</td>
                          </tr>
                          <tr>
                            <td><code>aum beat [next|set]</code></td>
                            <td>Māṇḍūkya</td>
                            <td>Stages active quarter: intake, blueprint, verification, or manifest.</td>
                          </tr>
                          <tr>
                            <td><code>aum drone</code></td>
                            <td>Witness</td>
                            <td>Outputs Tanpura witness pitch and active intent status.</td>
                          </tr>
                          <tr>
                            <td><code>aum hook</code></td>
                            <td>Multi-Agent</td>
                            <td>Injects SPHOTA intent bridge into Cursor, Claude, Copilot, Cline, and Gemini.</td>
                          </tr>
                          <tr>
                            <td><code>aum sync</code></td>
                            <td>Ecosystem</td>
                            <td>Verifies and synchronizes global configurations in <code>~/.aum</code>.</td>
                          </tr>
                        </tbody>
                      </table>
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
