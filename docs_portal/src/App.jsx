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
  HelpCircle,
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

  // Guided Journey Steps Definition
  const journeySteps = useMemo(() => [
    {
      number: 1,
      label: "Build Lifecycle",
      title: "Sāṅkhya Evolution ➔ Build/Compilation Lifecycle",
      vedicTitle: "Vedic Philosophy: Sāṅkhya Material Evolution",
      vedicDesc: "In Sāṅkhya philosophy, physical reality (Bhūtas) is not static. It evolves systematically from unmanifest root nature (Prakṛti) through cosmic intellect (Buddhi), self-identity (Ahaṅkāra), and the senses (Indriyas) into physical matter.",
      vedicKeyTerms: ["Prakṛti (Root Nature)", "Buddhi (Syntax Check)", "Ahaṅkāra (Linking)", "Bhūtas (Compiled Output)"],
      engTitle: "Software Analogy: Compiling and Linking",
      engDesc: "AUM compiles source files in the same order. Raw uncompiled code (Prakṛti) undergoes syntactic AST analysis (Buddhi), generates object linking namespaces (Ahaṅkāra), and finally produces compiled outputs (Bhūtas).",
      engWhy: "This formalizes the pipeline states of our build, ensuring that modifications flow sequentially from source to distribution without state pollution.",
      adrLink: "adr_011_sankhye_evolution.md"
    },
    {
      number: 2,
      label: "Sandboxes",
      title: "Shaiva Kañcukas ➔ Execution Sandboxes",
      vedicTitle: "Vedic Philosophy: The Five Limiting Sheaths",
      vedicDesc: "In Shaivism, the infinite power of consciousness (Shiva) is limited by sheaths (Kañcukas) to allow individual agency: time (Kāla), space (Niyati), desire (Rāga), knowledge (Vidyā), and power (Kalā).",
      vedicKeyTerms: ["Kāla (Turns Limit)", "Niyati (Directory Bounds)", "Rāga (Saṅkalpa Focus)", "Vidyā/Kalā (Tool Security)"],
      engTitle: "Software Analogy: Secure Runtime Sandboxing",
      engDesc: "AI agents operate with specific runtime limits: Turn limits (Kāla) prevent loops, Workspace restrictions (Niyati) protect local files, Active Saṅkalpa scopes (Rāga) focus edits, and tool blocks (Kalā) limit networking.",
      engWhy: "This establishes absolute execution boundaries, preventing AI agents from executing dangerous terminal commands or writing outside the workspace.",
      adrLink: "adr_012_shaiva_kancukas.md"
    },
    {
      number: 3,
      label: "Refactoring",
      title: "Advaita Vedānta ➔ Code Refactoring & Negation",
      vedicTitle: "Vedic Philosophy: Negation (Apavāda / Neti Neti)",
      vedicDesc: "Advaita Vedānta uses negation (Apavāda - 'Neti Neti' or 'not this, not this') to strip away illusions and superimpositions (Adhyāsa) to realize ultimate unity (Brahman).",
      vedicKeyTerms: ["Adhyāsa (Bloat Superimposition)", "Apavāda (Negation/Neti-Neti)", "Brahman (Single Source of Truth)"],
      engTitle: "Software Analogy: Code De-duplication",
      engDesc: "Boilerplate and duplicate files (Adhyāsa) are systematically negated and removed (Apavāda) during build cleaning, consolidating codebases into a single, unified source of truth (Brahman).",
      engWhy: "This ensures the codebase stays extremely lean, preventing bloated copy-paste boilerplate from drifting the logic.",
      adrLink: "adr_014_advaita_refactoring.md"
    },
    {
      number: 4,
      label: "Config Overrides",
      title: "Mīmāṃsā Hermeneutics ➔ Overrides Hierarchy",
      vedicTitle: "Vedic Philosophy: Jaimini's Text Analysis Rules",
      vedicDesc: "Mīmāṃsā defines a strict hierarchy to interpret and resolve overlapping or conflicting scriptural commands: Direct Text (Śruti) overrides Inference (Liṅga) overrides Sentence Context (Vākya) overrides Section Context (Prakaraṇa).",
      vedicKeyTerms: ["Śruti (Direct Configuration)", "Liṅga (Inferred/Linter Hint)", "Vākya (Module Scope)", "Prakaraṇa (Global Rules)"],
      engTitle: "Software Analogy: Config Hierarchy resolution",
      engDesc: "AUM resolves configuration overrides in the same order. Direct settings (Śruti) override linter diagnostic suggestions (Liṅga) which override local module settings (Vākya) which override global rules.",
      engWhy: "This eliminates configuration ambiguity when different rule sets overlap, resolving them programmatically without human intervention.",
      adrLink: "adr_009_mimamsa_hermeneutics.md"
    },
    {
      number: 5,
      label: "Event Streams",
      title: "Spanda Pulsation ➔ Reactive Event Streams",
      vedicTitle: "Vedic Philosophy: Spanda (Dynamic Pulse)",
      vedicDesc: "Spanda philosophy describes the universe as a dynamic, vibrating pulse. It manifests through opening (Unmeṣa / creation) and closing (Nimeṣa / withdrawal) phases, maintaining cosmic balance.",
      vedicKeyTerms: ["Unmeṣa (Event Emission)", "Nimeṣa (Subscription Cleanup)", "Spanda-Sandhi (Debounce/Interval)"],
      engTitle: "Software Analogy: Event-Driven WebSockets",
      engDesc: "Reactive streams operate via opening and closing pulses. Events are emitted during Unmeṣa, event listeners and WebSocket subscriptions are cleared during Nimeṣa, and stream intervals are throttled in Spanda-Sandhi.",
      engWhy: "This prevents memory leaks in WebSocket and event connections, ensuring that every opened channel is systematically closed.",
      adrLink: "adr_013_spanda_reactive.md"
    },
    {
      number: 6,
      label: "Type Safety",
      title: "Navya-Nyāya Logic ➔ Strict Typing (AST)",
      vedicTitle: "Vedic Philosophy: Symbolic Category Logic",
      vedicDesc: "Navya-Nyāya provides a formal symbolic language to describe properties and relations without ambiguity. Every statement defines a subject (Dharmin), its qualifiers, and relation limiters (Avacchedaka).",
      vedicKeyTerms: ["Dharmin (Type Signature)", "Avacchedaka (Type Limiter)", "Samavāya (Subclass Relation)"],
      engTitle: "Software Analogy: AST Invariant Boundaries",
      engDesc: "AUM enforces strict type safety during AST transformations. Every parameter must define a type (Dharmin), generics must use constraints/limiters (Avacchedaka), and class inheritances must map strictly (Samavāya).",
      engWhy: "This prevents type coercion and runtime crashes by validating structural specifications before execution.",
      adrLink: "adr_015_navya_nyaya_ast.md"
    },
    {
      number: 7,
      label: "Code Reviews",
      title: "Vāda-Vidhī Debate ➔ Branch Code Reviews",
      vedicTitle: "Vedic Philosophy: Rules of Logical Debate",
      vedicDesc: "Vāda-Vidhī structures truth-seeking debate (Vāda). It defines the parts of a valid proposition (Pratijñā), logical fallacies (Hētvābhāsa), and grounds under which an argument is declared defeated (Nigrahasthāna).",
      vedicKeyTerms: ["Pratijñā (PR Intent)", "Hetu (Git Diff/Evidence)", "Hētvābhāsa (Syntax Fallacy)", "Nigrahasthāna (Build Block)"],
      engTitle: "Software Analogy: PR Verification & Merges",
      engDesc: "Pull requests are audited as logical debates. The branch declares a proposition (Pratijñā), the git diff provides evidence (Hetu), code issues are flagged as fallacies (Hētvābhāsa), and build errors trigger defeat (Nigrahasthāna).",
      engWhy: "This guarantees master branch stability by programmatically blocking PRs that fail basic compilation or type checks.",
      adrLink: "adr_016_vada_vidhi_reviews.md"
    }
  ], []);

  // Group docs by category
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
  const selectDocument = (doc) => {
    setSelectedDoc(doc);
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

  // Helper to jump to a specific doc filename
  const selectDocByName = (filename) => {
    const allDocs = [
      ...(docsData.manifest ? [docsData.manifest] : []),
      ...(docsData.instructions ? [docsData.instructions] : []),
      ...(docsData.adrs || []),
      ...(docsData.arbs || [])
    ];
    const match = allDocs.find(d => d.filename === filename);
    if (match) {
      selectDocument(match);
    }
  };

  return (
    <div className="aum-app">
      {/* Sidebar Navigation */}
      <aside className={`aum-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
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
          <span>Vedic Engineering Journey</span>
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
                        onClick={() => selectDocument(item)}
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
          {selectedDoc ? (
            /* Document Reader View */
            <div className="aum-article-view">
              <button 
                onClick={() => selectDocument(null)}
                className="aum-back-btn"
              >
                ← Back to Dashboard
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
                    Start Guided Vedic Engineering Journey
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="aum-stats-grid">
                <div className="aum-stat-card glass-panel">
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

              {/* Core Framework Mappings */}
              <div className="aum-info-grid">
                {/* 4 States of Consciousness */}
                <div className="aum-info-card glass-panel">
                  <div className="aum-info-header">
                    <div className="aum-info-bar" />
                    <h2 className="aum-info-title">Quarters of Consciousness (Māṇḍūkya)</h2>
                  </div>
                  <div className="aum-info-list">
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">1. Jāgrat (Waking State) — Intake</h4>
                      <p className="aum-info-item-desc">Gathers context, processes initial user requirements, and defines task inputs.</p>
                    </div>
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">2. Svapna (Dreaming State) — Blueprint</h4>
                      <p className="aum-info-item-desc">Abstract cognitive planning, architecture design logs, and workflow blueprints.</p>
                    </div>
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">3. Suṣupti (Deep Sleep) — Invariant Bounds</h4>
                      <p className="aum-info-item-desc">Frozen system configurations, ethics rules (Yamas/Niyamas), and safety boundaries.</p>
                    </div>
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">4. Turīya (Absolute Consciousness) — Manifest Index</h4>
                      <p className="aum-info-item-desc">The Mūla Sphoṭa global manifest indexing the entire repository state.</p>
                    </div>
                  </div>
                </div>

                {/* 5 limiting sheaths */}
                <div className="aum-info-card glass-panel">
                  <div className="aum-info-header">
                    <div className="aum-info-bar" />
                    <h2 className="aum-info-title">Limiting Sheaths of Agency (Shaiva Kañcukas)</h2>
                  </div>
                  <div className="aum-info-list">
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">Kāla (Time Bounds)</h4>
                      <p className="aum-info-item-desc">Limits maximum turn step counts to prevent infinite loops during diagnostic executions.</p>
                    </div>
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">Niyati (Space Bounds)</h4>
                      <p className="aum-info-item-desc">Limits file system actions strictly to the workspace directory to prevent sandbox leakage.</p>
                    </div>
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">Rāga (Scope Limits)</h4>
                      <p className="aum-info-item-desc">Restricts modifications to items explicitly mapped out in the active Saṅkalpa log.</p>
                    </div>
                    <div className="aum-info-item">
                      <h4 className="aum-info-item-title">Kalā / Vidyā (Tool Safety)</h4>
                      <p className="aum-info-item-desc">Blocks arbitrary terminal network downloads (npm/pip) without explicit developer confirmation.</p>
                    </div>
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
