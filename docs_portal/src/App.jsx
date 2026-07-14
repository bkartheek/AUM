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
  X
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
  const [selectedDoc, setSelectedDoc] = useState(null); // null means Dashboard
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          onClick={() => selectDocument(null)}
          className={`aum-dashboard-btn ${!selectedDoc ? 'active' : ''}`}
        >
          <Activity size={18} />
          <span>Cognitive Dashboard</span>
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
