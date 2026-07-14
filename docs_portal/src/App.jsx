import React, { useState, useMemo } from 'react';
import { marked } from 'marked';
import { 
  BookOpen, 
  Search, 
  Shield, 
  Compass, 
  Activity, 
  CheckCircle, 
  GitCommit, 
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Layers,
  Play
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
  const [selectedDoc, setSelectedDoc] = useState(null); // null means Dashboard or Journey
  const [showJourney, setShowJourney] = useState(false);  // true renders Onboarding Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // New States: Collapsible Sidebar & Navigation Source Context Memory
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [docSource, setDocSource] = useState('dashboard'); // 'dashboard' | 'journey'

  // Comprehensive 24-Step Guided Journey Timeline (Aligned with actual ADR filenames)
  const journeySteps = useMemo(() => [
    {
      number: 1,
      label: "Brahman",
      title: "ADR-001: Brahman Foundation ➔ Stateless Core",
      vedicTitle: "Vedic Philosophy: Brahman (Absolute Statelessness)",
      vedicDesc: "In Advaita philosophy, Brahman is the foundational, immutable, and stateless reality of the universe. All changing phenomena are temporary superimpositions.",
      vedicKeyTerms: ["Brahman (Stateless Reality)", "Adhiṣṭhāna (Foundational Base)", "Nirguṇa (Attribute-free)"],
      engTitle: "Software Analogy: Stateless Core Architecture",
      engDesc: "AUM is built on a stateless execution model. The engine does not maintain local in-memory session side-effects; all state is reconstructed deterministically from active files.",
      engWhy: "This eliminates state-drift and race conditions across turn iterations, ensuring reliable agent executions.",
      adrLink: "adr_001_consolidation.md"
    },
    {
      number: 2,
      label: "Guards",
      title: "ADR-002: Yamas & Niyamas ➔ System Invariant Guards",
      vedicTitle: "Vedic Philosophy: Ethical Restraints & Observances",
      vedicDesc: "Patanjali's Yoga Sutras define Yamas (universal ethical restraints like non-injury) and Niyamas (personal rules like purity) to govern human action.",
      vedicKeyTerms: ["Yamas (Active Restraints)", "Niyamas (Internal Code Rules)", "Ahiṃsā (Safety Invariant)"],
      engTitle: "Software Analogy: Linter & Compilation Guards",
      engDesc: "AUM defines strict compilation guards that block illegal commands, placeholder code stubs, or modifications outside of specified workspace paths.",
      engWhy: "This ensures the agent cannot execute unaligned work or write broken syntax, preserving master codebase health.",
      adrLink: "adr_002_vedic_guardrails.md"
    },
    {
      number: 3,
      label: "Quarters",
      title: "ADR-003: Quarters of Consciousness ➔ State Machine",
      vedicTitle: "Vedic Philosophy: Māṇḍūkya's Four Quarters",
      vedicDesc: "The Māṇḍūkya Upanishad maps consciousness into four quarters: Jāgrat (waking), Svapna (dreaming/planning), Suṣupti (deep sleep/config), and Turīya (underlying manifest).",
      vedicKeyTerms: ["Jāgrat (Intake Phase)", "Svapna (Plan Phase)", "Suṣupti (Invariant Phase)", "Turīya (Manifest Phase)"],
      engTitle: "Software Analogy: Execution State Machine",
      engDesc: "The framework cycles through corresponding phases: Intake (waking requirements), Blueprinting (planning architecture reviews), Invariants (safeguarding ethics limits), and Manifesting (writing files).",
      engWhy: "This coordinates AI agent turns into structured, verifiable cognitive steps rather than arbitrary code execution loops.",
      adrLink: "adr_003_standardization.md"
    },
    {
      number: 4,
      label: "Customs",
      title: "ADR-004: Workspace Customizations ➔ Intent Setup",
      vedicTitle: "Vedic Philosophy: Saṅkalpa & Rules Registration",
      vedicDesc: "A Saṅkalpa is a solemn vow or intention made with complete focus. Once set, all action (Karma) is aligned solely toward fulfilling this specific resolve.",
      vedicKeyTerms: ["Saṅkalpa (Focal Resolve)", "Ekāgratā (One-pointed Focus)", "Karma (Aligned Action)"],
      engTitle: "Software Analogy: Config Customizations Setup",
      engDesc: "AUM loads setup parameters from local sankalpas and agents configuration configurations at startup, defining active workspace rules.",
      engWhy: "This enables the development team to dynamically adjust linter parameters and active task scopes on a project-by-project basis.",
      adrLink: "adr_004_customizations.md"
    },
    {
      number: 5,
      label: "Lifecycle",
      title: "ADR-005: Pañcakṛtya ➔ Turn Execution Lifecycle",
      vedicTitle: "Vedic Philosophy: Pañcakṛtya (Five Cosmic Actions)",
      vedicDesc: "In Shaiva cosmology, the universe flows through five cosmic acts: creation (Sṛṣṭi), maintenance (Sthiti), dissolution (Saṃhāra), concealment (Tirobhāva), and grace (Anugraha).",
      vedicKeyTerms: ["Sṛṣṭi (File Creation)", "Saṃhāra (Cleanup/Negation)", "Anugraha (Commit/Push)"],
      engTitle: "Software Analogy: Execution Turn States",
      engDesc: "Agent execution runs through corresponding states: context assembly (Sṛṣṭi), diff review (Sthiti), refactoring pruning (Saṃhāra), output rendering (Tirobhāva), and commit deployment (Anugraha).",
      engWhy: "This structures execution turns into a systematic loop, ensuring that code is compiled and validated before deployment.",
      adrLink: "adr_005_pancakritya_lifecycle.md"
    },
    {
      number: 6,
      label: "Registry",
      title: "ADR-006: Mūla Sphoṭa ➔ Framework Registry",
      vedicTitle: "Vedic Philosophy: Sphoṭa (Holistic Sound/Concept Burst)",
      vedicDesc: "In grammar philosophy, Sphoṭa is the sudden cognitive flash of the entire semantic meaning of a word, overriding individual letters or syllables.",
      vedicKeyTerms: ["Mūla Sphoṭa (Root Manifest)", "Nāda (Vibration)", "Sphurana (Flashing)"],
      engTitle: "Software Analogy: Root Manifest Registry",
      engDesc: "AUM registers the entire workspace file inventory, active reviews, decisions, and instructions under the Mūla Sphoṭa global manifest.",
      engWhy: "This provides a unified index of the codebase, ensuring that AI agents can find all relevant references.",
      adrLink: "adr_006_mula_sphota.md"
    },
    {
      number: 7,
      label: "Retro",
      title: "ADR-007: Pratyavēkṣaṇa ➔ Retrospective Audits",
      vedicTitle: "Vedic Philosophy: Pratyavēkṣaṇa (Self-Reflection)",
      vedicDesc: "Pratyavēkṣaṇa is the cognitive practice of self-observation and reflection, looking back on one's actions to identify mistakes and refine understanding.",
      vedicKeyTerms: ["Pratyavēkṣaṇa (Self-Reflection)", "Doṣa (Flaw Detection)", "Śodhana (Purification)"],
      engTitle: "Software Analogy: Task Retrospective Logs",
      engDesc: "Every task completion requires writing a retrospective review mapping what was learned, what errors occurred, and how they were corrected.",
      engWhy: "This builds a cumulative database of workspace-specific learnings that future agent runs load to avoid repeating mistakes.",
      adrLink: "adr_007_pratyaveksana.md"
    },
    {
      number: 8,
      label: "Overrides",
      title: "ADR-009: Mīmāṃsā Hermeneutics ➔ Overrides Hierarchy",
      vedicTitle: "Vedic Philosophy: Text Interpretation Rules",
      vedicDesc: "Mīmāṃsā defines a strict hierarchy to interpret and resolve overlapping or conflicting scriptural commands: Direct Text (Śruti) overrides Inference (Liṅga) overrides Sentence Context (Vākya) overrides Section Context (Prakaraṇa).",
      vedicKeyTerms: ["Śruti (Direct Configuration)", "Liṅga (Inferred/Linter Hint)", "Vākya (Module Scope)", "Prakaraṇa (Global Rules)"],
      engTitle: "Software Analogy: Config Hierarchy resolution",
      engDesc: "AUM resolves configuration overrides in the same order. Direct settings (Śruti) override linter diagnostic suggestions (Liṅga) which override local module settings (Vākya) which override global rules.",
      engWhy: "This eliminates configuration ambiguity when different rule sets overlap, resolving them programmatically without human intervention.",
      adrLink: "adr_009_mimamsa_hermeneutics.md"
    },
    {
      number: 9,
      label: "Ontology",
      title: "ADR-010: Vaiśeṣika Categories ➔ Data Models",
      vedicTitle: "Vedic Philosophy: Vaiśeṣika Padārthas (Categories)",
      vedicDesc: "The Vaiśeṣika system classifies everything in the universe into six categories: substance (Dravya), quality (Guṇa), action (Karma), generality (Sāmānya), particularity, and inherence.",
      vedicKeyTerms: ["Dravya (Substance/Object)", "Guṇa (Attribute/Property)", "Karma (Method/Action)"],
      engTitle: "Software Analogy: AST Node Type Models",
      engDesc: "Data schemas in AUM map directly to Padārthas. Objects are Dravya, properties/types are Guṇa, and logic methods are Karma.",
      engWhy: "This provides a clean, ontological classification system for organizing software components and data structures.",
      adrLink: "adr_010_vaisesika_ontologies.md"
    },
    {
      number: 10,
      label: "Build",
      title: "ADR-011: Sāṅkhya Evolution ➔ Build Lifecycle",
      vedicTitle: "Vedic Philosophy: Sāṅkhya Material Evolution",
      vedicDesc: "In Sāṅkhya philosophy, physical reality (Bhūtas) is not static. It evolves systematically from unmanifest root nature (Prakṛti) through cosmic intellect (Buddhi), self-identity (Ahaṅkāra), and the senses (Indriyas) into physical matter.",
      vedicKeyTerms: ["Prakṛti (Root Nature)", "Buddhi (Syntax Check)", "Ahaṅkāra (Linking)", "Bhūtas (Compiled Output)"],
      engTitle: "Software Analogy: Compiling and Linking",
      engDesc: "AUM compiles source files in the same order. Raw uncompiled code (Prakṛti) undergoes syntactic AST analysis (Buddhi), generates object linking namespaces (Ahaṅkāra), and finally produces compiled outputs (Bhūtas).",
      engWhy: "This formalizes the pipeline states of our build, ensuring that modifications flow sequentially from source to distribution without state pollution.",
      adrLink: "adr_011_sankhye_evolution.md"
    },
    {
      number: 11,
      label: "Sandbox",
      title: "ADR-012: Shaiva Kañcukas ➔ Security Limits",
      vedicTitle: "Vedic Philosophy: The Five Limiting Sheaths",
      vedicDesc: "In Shaivism, the infinite power of consciousness (Shiva) is limited by sheaths (Kañcukas) to allow individual agency: time (Kāla), space (Niyati), desire (Rāga), knowledge (Vidyā), and power (Kalā).",
      vedicKeyTerms: ["Kāla (Turns Limit)", "Niyati (Directory Bounds)", "Rāga (Saṅkalpa Focus)", "Vidyā/Kalā (Tool Security)"],
      engTitle: "Software Analogy: Secure Runtime Sandboxing",
      engDesc: "AI agents operate with specific runtime limits: Turn limits (Kāla) prevent loops, Workspace restrictions (Niyati) protect local files, Active Saṅkalpa scopes (Rāga) focus edits, and tool blocks (Kalā) limit networking.",
      engWhy: "This establishes absolute execution boundaries, preventing AI agents from executing dangerous terminal commands or writing outside the workspace.",
      adrLink: "adr_012_shaiva_kancukas.md"
    },
    {
      number: 12,
      label: "Streams",
      title: "ADR-013: Spanda Pulsation ➔ WebSocket Streams",
      vedicTitle: "Vedic Philosophy: Spanda (Dynamic Pulse)",
      vedicDesc: "Spanda philosophy describes the universe as a dynamic, vibrating pulse. It manifests through opening (Unmeṣa / creation) and closing (Nimeṣa / withdrawal) phases, maintaining cosmic balance.",
      vedicKeyTerms: ["Unmeṣa (Event Emission)", "Nimeṣa (Subscription Cleanup)", "Spanda-Sandhi (Debounce/Interval)"],
      engTitle: "Software Analogy: Event-Driven WebSockets",
      engDesc: "Reactive streams operate via opening and closing pulses. Events are emitted during Unmeṣa, event listeners and WebSocket subscriptions are cleared during Nimeṣa, and stream intervals are throttled in Spanda-Sandhi.",
      engWhy: "This prevents memory leaks in WebSocket and event connections, ensuring that every opened channel is systematically closed.",
      adrLink: "adr_013_spanda_reactive.md"
    },
    {
      number: 13,
      label: "Refactoring",
      title: "ADR-014: Advaita Vedānta ➔ Code Negation",
      vedicTitle: "Vedic Philosophy: Negation (Apavāda / Neti Neti)",
      vedicDesc: "Advaita Vedānta uses negation (Apavāda - 'Neti Neti' or 'not this, not this') to strip away illusions and superimpositions (Adhyāsa) to realize ultimate unity (Brahman).",
      vedicKeyTerms: ["Adhyāsa (Bloat Superimposition)", "Apavāda (Negation/Neti-Neti)", "Brahman (Single Source of Truth)"],
      engTitle: "Software Analogy: Code De-duplication",
      engDesc: "Boilerplate and duplicate files (Adhyāsa) are systematically negated and removed (Apavāda) during build cleaning, consolidating codebases into a single, unified source of truth (Brahman).",
      engWhy: "This ensures the codebase stays extremely lean, preventing bloated copy-paste boilerplate from drifting the logic.",
      adrLink: "adr_014_advaita_refactoring.md"
    },
    {
      number: 14,
      label: "Typing",
      title: "ADR-015: Navya-Nyāya Logic ➔ Strict Typing (AST)",
      vedicTitle: "Vedic Philosophy: Symbolic Category Logic",
      vedicDesc: "Navya-Nyāya provides a formal symbolic language to describe properties and relations without ambiguity. Every statement defines a subject (Dharmin), its qualifiers, and relation limiters (Avacchedaka).",
      vedicKeyTerms: ["Dharmin (Type Signature)", "Avacchedaka (Type Limiter)", "Samavāya (Subclass Relation)"],
      engTitle: "Software Analogy: AST Invariant Boundaries",
      engDesc: "AUM enforces strict type safety during AST transformations. Every parameter must define a type (Dharmin), generics must use constraints/limiters (Avacchedaka), and class inheritances must map strictly (Samavāya).",
      engWhy: "This prevents type coercion and runtime crashes by validating structural specifications before execution.",
      adrLink: "adr_015_navya_nyaya_ast.md"
    },
    {
      number: 15,
      label: "Reviews",
      title: "ADR-016: Vāda-Vidhī Debate ➔ Branch Code Reviews",
      vedicTitle: "Vedic Philosophy: Rules of Logical Debate",
      vedicDesc: "Vāda-Vidhī structures truth-seeking debate (Vāda). It defines the parts of a valid proposition (Pratijñā), logical fallacies (Hētvābhāsa), and grounds under which an argument is declared defeated (Nigrahasthāna).",
      vedicKeyTerms: ["Pratijñā (PR Intent)", "Hetu (Git Diff/Evidence)", "Hētvābhāsa (Syntax Fallacy)", "Nigrahasthāna (Build Block)"],
      engTitle: "Software Analogy: PR Verification & Merges",
      engDesc: "Pull requests are audited as logical debates. The branch declares a proposition (Pratijñā), the git diff provides evidence (Hetu), code issues are flagged as fallacies (Hētvābhāsa), and build errors trigger defeat (Nigrahasthāna).",
      engWhy: "This guarantees master branch stability by programmatically blocking PRs that fail basic compilation or type checks.",
      adrLink: "adr_016_vada_vidhi_reviews.md"
    },
    {
      number: 16,
      label: "Portal",
      title: "ADR-017: Vaikharī Pages ➔ Documentation Deployment",
      vedicTitle: "Vedic Philosophy: Vaikharī (Spoken Word)",
      vedicDesc: "In Bhartṛhari's philosophy of language, Vaikharī is the final, outer spoken form of sound—making the unmanifest thought audible to others.",
      vedicKeyTerms: ["Vaikharī (Spoken Word)", "Madhyamā (Mental Structure)", "Paśyantī (Primary Intent)"],
      engTitle: "Software Analogy: GitHub Pages Static Site",
      engDesc: "AUM builds a React static documentation portal (Vaikharī) from its underlying JSON schemas (Madhyamā) and pushes them to GitHub Pages for developers to read.",
      engWhy: "This makes the framework documentation public, readable, and interactive for developers worldwide.",
      adrLink: "adr_017_github_pages.md"
    },
    {
      number: 17,
      label: "Roadmap",
      title: "ADR-018: Upamāna Journey ➔ Interactive Roadmap",
      vedicTitle: "Vedic Philosophy: Upamāna (Epistemological Analogy)",
      vedicDesc: "Upamāna is the process of learning by analogy—gaining knowledge of an unfamiliar subject by matching it to a familiar one.",
      vedicKeyTerms: ["Upamāna (Analogy)", "Sādharmya (Similarity)", "Pramā (Valid Knowledge)"],
      engTitle: "Software Analogy: Guided Roadmap UI",
      engDesc: "The onboarding journey maps Sanskrit metaphysics side-by-side with familiar design patterns to build quick understanding.",
      engWhy: "This resolves developer onboarding friction and eliminates the need for prior classical training.",
      adrLink: "adr_018_onboarding_journey.md"
    },
    {
      number: 18,
      label: "Layouts",
      title: "ADR-019: Portal Layouts ➔ Collapsible Workspace",
      vedicTitle: "Vedic Philosophy: Dharā-Vāha-Smṛti (Unbroken Stream)",
      vedicDesc: "Dharā-Vāha-Smṛti is the continuous, cognitive tracking of state flow. In workspace interactions, a user should never suffer context breakage or navigation reset.",
      vedicKeyTerms: ["Dharā (Flow)", "Smṛti (Memory State)", "Vikṣepa (Distraction Block)"],
      engTitle: "Software Analogy: Context-Sensitive Navigation",
      engDesc: "The UI tracks navigation sources and provides sidebar toggles, expanding reading viewport spaces without losing user session coordinates.",
      engWhy: "This ensures the developer stays focused during dense codebase research, improving navigation convenience.",
      adrLink: "adr_019_portal_enhancements.md"
    },
    {
      number: 19,
      label: "Memory Cache",
      title: "ADR-020: Persistent Caching ➔ Saṃskāra Memory",
      vedicTitle: "Vedic Philosophy: Saṃskāras (Subconscious Impressions)",
      vedicDesc: "Every experience leaves a subconscious impression (Saṃskāra). Over time, these impressions shape active behavioral tendencies (Vāsanās).",
      vedicKeyTerms: ["Saṃskāras (Impressions)", "Vāsanās (Tendencies)", "Smṛti (Memory Retention)"],
      engTitle: "Software Analogy: Experience JSON Logs Cache",
      engDesc: "The framework logs task resolutions, linter gotchas, and VM env patches to JSON files. Future agent runs load these caches to inherit past experience patterns.",
      engWhy: "This prevents developer agents from hitting the same compiler native binding or configuration errors repeatedly across runs.",
      adrLink: "adr_020_samskara_memory.md"
    },
    {
      number: 20,
      label: "Linter Auditor",
      title: "ADR-021: Programmatic Linter ➔ Hētvābhāsa Fallacies",
      vedicTitle: "Vedic Philosophy: Logic Fallacies (Hētvābhāsa)",
      vedicDesc: "In Nyāya epistemology, logical arguments are audited for fallacies (Hētvābhāsa) such as unproved premises (Asiddha) or out-of-scope edits (Savyabhicāra).",
      vedicKeyTerms: ["Asiddha (Unproved/Stub)", "Savyabhicāra (Irregular/Scope-drift)", "Nigraha (Commit Block)"],
      engTitle: "Software Analogy: Git Pre-commit Validator",
      engDesc: "A Node pre-commit script audits staged git files, scanning for commented stubs, console logs, or file modifications outside the active focus lock.",
      engWhy: "This guarantees master branch integrity by automatically blocking unaligned commits or placeholder code blocks.",
      adrLink: "adr_021_hetvabhasa_auditor.md"
    },
    {
      number: 21,
      label: "Context Pruner",
      title: "ADR-022: Attention Pruning ➔ Pratyāhāra Context",
      vedicTitle: "Vedic Philosophy: Sensory Abstraction (Pratyāhāra)",
      vedicDesc: "Pratyāhāra represents the withdrawal of senses from external noise. It shields the mind from distraction to ensure absolute cognitive concentration.",
      vedicKeyTerms: ["Pratyāhāra (Abstraction)", "Vikṣepa (Distraction Pruning)", "Ekāgratā (One-pointed Focus)"],
      engTitle: "Software Analogy: Workspace Context Compressor",
      engDesc: "A context compressor dynamically prunes unrelated dependency nodes, build outputs, and logs, compiling a minimal task-specific file inventory.",
      engWhy: "This protects finite context windows from token bloat, ensuring instructions are not forgotten during long agent runs.",
      adrLink: "adr_022_pratyahara_context.md"
    },
    {
      number: 22,
      label: "Self Healer",
      title: "ADR-023: Self-Healing Runner ➔ Prāyaścitta Recovery",
      vedicTitle: "Vedic Philosophy: Atonement & Correction (Prāyaścitta)",
      vedicDesc: "Prāyaścitta refers to self-cleansing rituals and corrective behaviors performed to repair past deviations and restore system equilibrium.",
      vedicKeyTerms: ["Prāyaścitta (Correction)", "Doṣa (Runtime Deviation)", "Śuddhi (System Purification)"],
      engTitle: "Software Analogy: Self-Correcting Test Runner",
      engDesc: "A test wrapper catches compilation crashes, maps issues to correction profiles (such as native Rolldown binds on Linux runner VMs), runs patches, and retries.",
      engWhy: "This prevents minor native environment binding mismatches from crashing CI/CD delivery pipelines.",
      adrLink: "adr_023_prayascitta_recovery.md"
    },
    {
      number: 23,
      label: "Orchestrator",
      title: "ADR-024: CLI Entry ➔ AUM Intent Orchestrator",
      vedicTitle: "Vedic Philosophy: Combined Samyama (Total Coordination)",
      vedicDesc: "Samyama is the combined practice of Dharana (focus), Dhyana (meditation), and Samadhi (absorption). It represents the absolute synthesis and orchestration of cognitive capacities.",
      vedicKeyTerms: ["Samyama (Combined Synthesis)", "Manas (Central Coordinator)", "Kriyā (Coordinated Action)"],
      engTitle: "Software Analogy: CLI Lifecycle Orchestrator",
      engDesc: "A central Node script 'scripts/aum.js' wraps all linter, context pruner, compiler self-healer, and doc parser scripts into simplified commands.",
      engWhy: "This consolidates cognitive lifecycles (Pañcakṛtya) under a single entry point, ensuring uniform check executions during turn runs.",
      adrLink: "adr_024_cli_orchestrator.md"
    },
    {
      number: 24,
      label: "Sheath Dispatch",
      title: "ADR-025: Intake Classifier ➔ Kañcukas Dispatcher",
      vedicTitle: "Vedic Philosophy: Dynamic Sheaths (Kañcukas Sandboxes)",
      vedicDesc: "In Shaiva metaphysics, the absolute Shiva limits infinite power through sheaths (Kañcukas) to manifest focused, safe agency.",
      vedicKeyTerms: ["Kañcukas (Limiting Sheaths)", "Prāṇa (Light Intake)", "Sādhaka (Focused Agent)"],
      engTitle: "Software Analogy: Low-Latency Intent Sandbox",
      engDesc: "A classifier pre-processor script 'scripts/dispatcher.js' categorizes developer strings in under 150ms and dynamically sets turn budgets and tool write scopes.",
      engWhy: "This eliminates context window lag and prevents unaligned actions by programmatically sandboxing the agent before system prompt calls.",
      adrLink: "adr_025_kancuka_dispatcher.md"
    }
  ], []);

  // Group docs by category (Updated to support samskaras array)
  const categories = useMemo(() => {
    const list = [
      {
        id: 'manifest',
        name: 'Turīya (Manifest)',
        icon: Compass,
        items: docsData.manifest ? [docsData.manifest] : []
      },
      {
        id: 'instructions',
        name: 'Suṣupti (Manuals)',
        icon: Shield,
        items: docsData.instructions ? [docsData.instructions] : []
      },
      {
        id: 'adrs',
        name: 'Suṣupti (Decisions)',
        icon: CheckCircle,
        items: docsData.adrs || []
      },
      {
        id: 'arbs',
        name: 'Svapna (Reviews)',
        icon: BookOpen,
        items: docsData.arbs || []
      },
      {
        id: 'samskaras',
        name: 'Saṃskāras (Memories)',
        icon: Layers,
        items: (docsData.samskaras || []).map(s => ({
          filename: s.filename,
          attributes: {
            title: s.task_title || s.sankalpa_id,
            type: "cognitive_memory",
            phase: s.sankalpa_id
          },
          body: `## Cognitive Memory: ${s.task_title}\n\n**Summary:** ${s.summary}\n\n**Resolved Date:** ${s.resolved_date}\n\n### Critical Learnings\n${s.critical_learnings.map(l => `* ${l}`).join('\n')}\n\n**Associated ADR:** [${s.associated_adr}](file:///Users/universe/AUM/.aum/architecture/decisions/${s.associated_adr})`
        }))
      }
    ];
    return list;
  }, []);

  // Simple search filter
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    
    return categories.map(cat => {
      const matchedItems = cat.items.filter(item => {
        const titleMatch = item.attributes?.title?.toLowerCase().includes(query) || false;
        const bodyMatch = item.body?.toLowerCase().includes(query) || false;
        const filenameMatch = item.filename?.toLowerCase().includes(query) || false;
        return titleMatch || bodyMatch || filenameMatch;
      });
      return {
        ...cat,
        items: matchedItems
      };
    }).filter(cat => cat.items.length > 0);
  }, [categories, searchQuery]);

  // Handle doc selection
  const selectDocument = (doc, source = 'dashboard') => {
    setSelectedDoc(doc);
    setDocSource(source);
    setShowJourney(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Convert selected doc body to HTML
  const renderedContent = useMemo(() => {
    if (!selectedDoc) return null;
    
    // Add title header if attributes don't render it
    const titleHeader = selectedDoc.attributes?.title 
      ? `# ${selectedDoc.attributes.title}\n\n` 
      : '';
      
    const fullMarkdown = titleHeader + selectedDoc.body;
    return { __html: marked.parse(fullMarkdown) };
  }, [selectedDoc]);

  // Statistics
  const stats = useMemo(() => {
    return {
      totalAdrs: docsData.adrs?.length || 0,
      totalArbs: docsData.arbs?.length || 0,
      compiledAt: docsData.compiledAt ? new Date(docsData.compiledAt).toLocaleDateString() : 'N/A'
    };
  }, []);

  // Active step details
  const activeStep = journeySteps[activeJourneyStep];

  // Helper to jump to a specific doc filename from journey
  const selectDocByName = (filename) => {
    const allDocs = [
      ...(docsData.manifest ? [docsData.manifest] : []),
      ...(docsData.instructions ? [docsData.instructions] : []),
      ...(docsData.adrs || []),
      ...(docsData.arbs || []),
      ...categories.find(c => c.id === 'samskaras').items
    ];
    const match = allDocs.find(d => d.filename === filename);
    if (match) {
      selectDocument(match, 'journey'); // Set source as journey!
    }
  };

  // Back button handler utilizing context memory (Dharā-Vāha-Smṛti)
  const handleBackNavigation = () => {
    setSelectedDoc(null);
    if (docSource === 'journey') {
      setShowJourney(true);
    } else {
      setShowJourney(false);
    }
  };

  return (
    <div className="aum-app">
      {/* Sidebar Navigation */}
      <aside className={`aum-sidebar ${mobileMenuOpen ? 'open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}>
        {/* Sidebar Header */}
        <div className="aum-sidebar-header">
          <div className="aum-brand">
            <div className="aum-logo">ॐ</div>
            <div>
              <h2 className="aum-brand-title">AUM Engine</h2>
              <span className="aum-brand-sub">Vaikharī Portal</span>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            className="lg-hidden-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="aum-search-container">
          <Search className="aum-search-icon" size={16} />
          <input 
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="aum-search-input"
          />
        </div>

        {/* Dashboard Link */}
        <button 
          onClick={() => { setShowJourney(false); setSelectedDoc(null); setMobileMenuOpen(false); }}
          className={`aum-dashboard-btn ${!selectedDoc && !showJourney ? 'active' : ''}`}
          style={{ marginBottom: '10px' }}
        >
          <Activity size={18} />
          <span>Cognitive Dashboard</span>
        </button>

        {/* Guided Onboarding Journey Link */}
        <button 
          onClick={() => { setShowJourney(true); setSelectedDoc(null); setMobileMenuOpen(false); }}
          className={`aum-dashboard-btn ${showJourney ? 'active' : ''}`}
          style={{ marginBottom: '24px' }}
        >
          <Compass size={18} />
          <span>Vedic Onboarding Journey</span>
        </button>

        {/* Categories List */}
        <nav className="aum-nav">
          {filteredCategories.map(cat => (
            <div key={cat.id} className="aum-nav-section">
              <div className="aum-nav-section-header">
                <cat.icon size={14} style={{ color: '#fbbf24' }} />
                <span className="aum-nav-section-title">{cat.name}</span>
              </div>
              <ul className="aum-nav-list">
                {cat.items.map(item => {
                  const title = item.attributes?.title || item.filename;
                  const isSelected = selectedDoc?.filename === item.filename;
                  
                  return (
                    <li key={item.filename}>
                      <button
                        onClick={() => selectDocument(item, 'dashboard')}
                        className={`aum-nav-btn ${isSelected ? 'active' : ''}`}
                      >
                        <span>{title}</span>
                        <ChevronRight className="aum-nav-chevron" size={12} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="aum-main-content">
        {/* Mobile Header */}
        <header className="aum-mobile-header">
          <div className="aum-brand">
            <div className="aum-logo">ॐ</div>
            <h1 className="aum-brand-title">AUM Engine</h1>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            style={{ background: 'none', border: 'none', color: '#f8fafc', cursor: 'pointer' }}
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <main className="aum-main-viewport">
          {/* Sidebar Toggle Button (Only on large screens) */}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="aum-toggle-sidebar-btn desktop-only-btn"
          >
            <Menu size={16} />
            <span>{sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}</span>
          </button>

          {selectedDoc ? (
            /* Document Reader View */
            <div className="aum-article-view">
              <button 
                onClick={handleBackNavigation}
                className="aum-back-btn"
              >
                ← Back {docSource === 'journey' ? `to Journey (Step ${activeJourneyStep + 1})` : 'to Dashboard'}
              </button>
              
              <article className="aum-article-card glass-panel">
                {/* Meta details if available */}
                {selectedDoc.attributes && (
                  <div className="aum-article-meta">
                    {selectedDoc.attributes.phase && (
                      <span className="aum-meta-tag">
                        📁 {selectedDoc.attributes.phase}
                      </span>
                    )}
                    {selectedDoc.attributes.vedic_state && (
                      <span className="aum-meta-tag">
                        👁️ State: {selectedDoc.attributes.vedic_state}
                      </span>
                    )}
                    {selectedDoc.attributes.type && (
                      <span className="aum-meta-tag">
                        🛡️ {selectedDoc.attributes.type}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Rendered HTML */}
                <div 
                  className="markdown-body" 
                  dangerouslySetInnerHTML={renderedContent} 
                />
              </article>
            </div>
          ) : showJourney ? (
            /* Guided Onboarding Journey View */
            <div className="aum-journey-container">
              {/* Header */}
              <div className="aum-journey-header">
                <span className="aum-tag">Vedic Software Engineering 101</span>
                <h1 className="aum-journey-title">Vedic Engineering Journey</h1>
                <p className="aum-journey-subtitle">
                  An analogical guide mapping classical Vedic metaphysics to compiler runtime safety rules. Explore each step side-by-side to understand *why* AUM is built this way.
                </p>
              </div>

              {/* Timeline Progress Bar */}
              <div className="aum-journey-timeline">
                {journeySteps.map((step, idx) => {
                  const isActive = idx === activeJourneyStep;
                  const isCompleted = idx < activeJourneyStep;
                  return (
                    <button 
                      key={step.number}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`aum-timeline-node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                    >
                      <div className="aum-timeline-dot">
                        {step.number}
                      </div>
                      <span className="aum-timeline-label">{step.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Panel Header */}
              <div className="glass-panel" style={{ padding: '24px', textAlign: 'center', borderBottom: '2px solid var(--accent-saffron)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-saffron)', fontSize: '1.4rem' }}>
                  {activeStep.title}
                </h2>
              </div>

              {/* Side-by-Side Comparison Cards */}
              <div className="aum-journey-card-pair">
                {/* Left Card: Vedic Philosophy */}
                <div className="aum-journey-card vedic glass-panel">
                  <div className="aum-journey-card-header">
                    <Compass size={20} style={{ color: 'var(--accent-saffron)' }} />
                    <h3 className="aum-journey-card-title">{activeStep.vedicTitle}</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {activeStep.vedicDesc}
                  </p>
                  <div style={{ marginTop: '12px' }}>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      Key Metaphysical Concept Parameters:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {activeStep.vedicKeyTerms.map(term => (
                        <span key={term} className="aum-journey-term">{term}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="aum-journey-connector">
                  <ArrowRight size={24} />
                </div>

                {/* Right Card: Software Analogy */}
                <div className="aum-journey-card engineering glass-panel">
                  <div className="aum-journey-card-header">
                    <Shield size={20} style={{ color: 'var(--accent-blue)' }} />
                    <h3 className="aum-journey-card-title">{activeStep.engTitle}</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {activeStep.engDesc}
                  </p>
                  <div style={{ backgroundColor: 'rgba(253, 250, 244, 0.6)', padding: '12px', borderRadius: '8px', border: '1px dashed var(--border-color)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <strong>The Engineering "Why":</strong> {activeStep.engWhy}
                  </div>
                  <button 
                    onClick={() => selectDocByName(activeStep.adrLink)}
                    className="aum-journey-adr-link"
                  >
                    View Deep Technical ADR Log ({activeStep.adrLink.substring(0, 7).toUpperCase()}) ➔
                  </button>
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="aum-journey-footer">
                <button 
                  disabled={activeJourneyStep === 0}
                  onClick={() => setActiveJourneyStep(prev => prev - 1)}
                  className="aum-journey-btn"
                >
                  ← Previous Step
                </button>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                  Step {activeStep.number} of {journeySteps.length}
                </span>
                {activeJourneyStep === journeySteps.length - 1 ? (
                  <button 
                    onClick={() => { setShowJourney(false); setSelectedDoc(null); }}
                    className="aum-journey-btn primary"
                  >
                    Return to Dashboard
                  </button>
                ) : (
                  <button 
                    onClick={() => setActiveJourneyStep(prev => prev + 1)}
                    className="aum-journey-btn primary"
                  >
                    Next Step →
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Dashboard View */
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Welcome banner */}
              <div className="aum-banner glass-panel">
                <div className="aum-banner-glow" />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span className="aum-tag">Live Framework State</span>
                  <h1 className="aum-banner-title">
                    The AUM Vedic Cognitive Framework
                  </h1>
                  <p className="aum-banner-desc">
                    A technology-agnostic software architecture organizing AI agent workflows under Mandukya state cycles, Pramāṇa epistemology, and Patanjali's ethical boundaries.
                  </p>
                  <button 
                    onClick={() => setShowJourney(true)}
                    style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'var(--accent-saffron)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(194, 65, 12, 0.25)' }}
                  >
                    <Play size={16} fill="white" />
                    Start Guided 24-Step Onboarding Journey
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="aum-stats-grid">
                <div className="aum-stats-card glass-panel">
                  <div className="aum-stat-icon saffron">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <span className="aum-stat-label">Active Decisions</span>
                    <h3 className="aum-stat-val">{stats.totalAdrs} ADRs</h3>
                  </div>
                </div>

                <div className="aum-stat-card glass-panel">
                  <div className="aum-stat-icon gold">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <span className="aum-stat-label">Active Reviews</span>
                    <h3 className="aum-stat-val">{stats.totalArbs} ARBs</h3>
                  </div>
                </div>

                <div className="aum-stat-card glass-panel">
                  <div className="aum-stat-icon blue">
                    <GitCommit size={24} />
                  </div>
                  <div>
                    <span className="aum-stat-label">Last Synced</span>
                    <h3 className="aum-stat-val">{stats.compiledAt}</h3>
                  </div>
                </div>
              </div>

              {/* Active Cognitive Impressions (Saṃskāras) Ledger */}
              <div className="glass-panel" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Layers size={20} style={{ color: 'var(--accent-saffron)' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Active Cognitive Impressions (Saṃskāras)
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                  These are persistent memory traces stored in the workspace cache (`.aum/samskaras/`). Developer agents load these impressions at startup to align execution tendencies (*Vāsanās*) and bypass known compiler and environment conflicts.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {(docsData.samskaras || []).map(s => (
                    <div key={s.filename} style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}>{s.task_title || s.sankalpa_id}</strong>
                        <span className="aum-tag" style={{ margin: 0, fontSize: '0.65rem' }}>{s.sankalpa_id}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        {s.summary}
                      </p>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                        {(s.critical_learnings || []).map((l, i) => (
                          <li key={i} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Onboarding Handbook Section */}
              <div className="glass-panel" style={{ padding: '40px', backgroundColor: 'var(--bg-surface-glass)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                  <Layers size={24} style={{ color: 'var(--accent-saffron)' }} />
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Vedic Software Engineering Handbook
                  </h2>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.7 }}>
                  Welcome to AUM. This handbook provides an immediate, systematic crash course mapping classical Sanskrit epistemologies to modern AI agent engineering workflows. Read this guide to understand the core invariants running silently behind your terminal commands.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                  
                  {/* States */}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ display: 'flex', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(180, 83, 9, 0.08)', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>1</span>
                      Cognitive Phases (Māṇḍūkya Upanishad)
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                      AI agent execution loops are structured into four repeating quarters of consciousness to prevent uncontrolled code mutations:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-saffron)', marginBottom: '6px', fontSize: '0.85rem' }}>JĀGRAT (Waking)</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Intake phase parsing user files and terminal specifications at startup.</span>
                      </div>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-saffron)', marginBottom: '6px', fontSize: '0.85rem' }}>SVAPNA (Dreaming)</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Blueprinting phase generating abstract architecture review logs.</span>
                      </div>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-saffron)', marginBottom: '6px', fontSize: '0.85rem' }}>SUṢUPTI (Deep Sleep)</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Invariant guarding locking Yamas/Niyamas boundaries.</span>
                      </div>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ display: 'block', color: 'var(--accent-saffron)', marginBottom: '6px', fontSize: '0.85rem' }}>TURĪYA (Absolute)</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>The manifest index cataloging the total workspace build tree.</span>
                      </div>
                    </div>
                  </div>

                  {/* Pramanas */}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ display: 'flex', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(180, 83, 9, 0.08)', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>2</span>
                      Verification Framework (Pramāṇa Epistemology)
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                      Every proposed modification is audited using three epistemological validation methods to prove its absolute correctness before staging:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>Śabda (Authority)</strong>: Verifying that changes align with strict user instructions and active lock-file parameters.
                      </div>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>Pratyakṣa (Perception)</strong>: Running functional verification tests and compiling code locally to observe raw behaviors.
                      </div>
                      <div style={{ padding: '16px', backgroundColor: 'rgba(253, 250, 244, 0.5)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <strong style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>Anumāna (Inference)</strong>: Simulating impact analysis of git diff changes on related library references.
                      </div>
                    </div>
                  </div>

                  {/* Sandboxes */}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ display: 'flex', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(180, 83, 9, 0.08)', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>3</span>
                      Limiting Security Sheaths (Shaiva Kañcukas)
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                      AI agent execution actions are constrained by five sandboxing parameters:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', border: '1px solid var(--border-color)' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'rgba(124, 77, 18, 0.04)' }}>
                          <th style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--accent-gold)' }}>Sheath Parameter</th>
                          <th style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--accent-gold)' }}>Vedic Concept</th>
                          <th style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--accent-gold)' }}>Software Execution Implementation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>Turns Limit</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)' }}>Kāla (Time)</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>Enforces turn cycles limits to block execution loops.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(253, 250, 244, 0.3)' }}>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>Directory Limit</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)' }}>Niyati (Space)</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>Locks files edits strictly inside the local repository workspace.</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>Scope Limit</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)' }}>Rāga (Attachment)</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>Restricts focus to tasks listed in the active focus lock file.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(253, 250, 244, 0.3)' }}>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>Tool Limits</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)' }}>Kalā / Vidyā (Ability)</td>
                          <td style={{ padding: '10px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>Blocks terminal package installs or external network downloads.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
