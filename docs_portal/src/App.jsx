import React, { useState, useMemo } from 'react';
import { marked } from 'marked';
import { 
  BookOpen, 
  Search, 
  Settings, 
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
    <div className="min-h-screen flex bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 border-r border-amber-950/20 p-6 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-orange-950/30">
              ॐ
            </div>
            <div>
              <h2 className="font-display font-bold text-lg tracking-tight text-white">AUM Engine</h2>
              <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase">Vaikharī Portal</span>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-slate-400 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-amber-950/20 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Dashboard Link */}
        <button 
          onClick={() => selectDocument(null)}
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-6 text-sm font-semibold transition-colors
            ${!selectedDoc 
              ? 'bg-gradient-to-r from-orange-950/40 to-amber-950/10 border border-orange-500/20 text-orange-400' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'}
          `}
        >
          <Activity size={18} />
          <span>Cognitive Dashboard</span>
        </button>

        {/* Categories List */}
        <nav className="space-y-6 overflow-y-auto max-h-[calc(100vh-280px)] pr-2">
          {filteredCategories.map(cat => (
            <div key={cat.id}>
              <div className="flex items-center gap-2 mb-2 px-2">
                <cat.icon className="text-amber-500/60" size={16} />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{cat.name}</span>
              </div>
              <ul className="space-y-1">
                {cat.items.map(item => {
                  const title = item.attributes?.title || item.filename;
                  const isSelected = selectedDoc?.filename === item.filename;
                  
                  return (
                    <li key={item.filename}>
                      <button
                        onClick={() => selectDocument(item)}
                        className={`
                          w-full text-left px-3 py-2 rounded-md text-xs transition-colors flex items-center justify-between group
                          ${isSelected 
                            ? 'bg-amber-950/20 text-amber-400 border-l-2 border-amber-500' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/30'}
                        `}
                      >
                        <span className="truncate pr-2">{title}</span>
                        <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" size={12} />
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
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="flex items-center justify-between p-4 bg-slate-900 border-b border-amber-950/20 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white">
              ॐ
            </div>
            <h1 className="font-display font-bold text-md text-white">AUM Engine</h1>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-slate-400 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          {selectedDoc ? (
            /* Document Reader View */
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={() => selectDocument(null)}
                className="text-xs font-semibold text-amber-500 hover:text-amber-400 mb-6 flex items-center gap-1"
              >
                ← Back to Dashboard
              </button>
              
              <article className="glass-panel p-8 md:p-12">
                {/* Meta details if available */}
                {selectedDoc.attributes && (
                  <div className="flex flex-wrap gap-3 mb-8 border-b border-amber-950/15 pb-6 text-xs font-medium text-slate-400">
                    {selectedDoc.attributes.phase && (
                      <span className="px-2.5 py-1 bg-slate-950/60 rounded-full border border-amber-950/10">
                        📁 {selectedDoc.attributes.phase}
                      </span>
                    )}
                    {selectedDoc.attributes.vedic_state && (
                      <span className="px-2.5 py-1 bg-slate-950/60 rounded-full border border-amber-950/10">
                        👁️ State: {selectedDoc.attributes.vedic_state}
                      </span>
                    )}
                    {selectedDoc.attributes.type && (
                      <span className="px-2.5 py-1 bg-slate-950/60 rounded-full border border-amber-950/10">
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
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Welcome banner */}
              <div className="glass-panel p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950/20">
                <div className="relative z-10 max-w-2xl space-y-4">
                  <span className="px-2.5 py-1 bg-orange-600/10 text-orange-400 rounded-full text-xs font-semibold border border-orange-500/20">
                    Live Framework State
                  </span>
                  <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
                    The AUM Vedic Cognitive Framework
                  </h1>
                  <p className="text-slate-400 text-lg">
                    A technology-agnostic software architecture organizing AI agent workflows under Mandukya state cycles, Pramāṇa epistemology, and Patanjali's ethical boundaries.
                  </p>
                </div>
                {/* Background glow */}
                <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl -z-10" />
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-400 flex items-center justify-center">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Decisions</span>
                    <h3 className="text-2xl font-bold text-white">{stats.totalAdrs} ADRs</h3>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-400 flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Reviews</span>
                    <h3 className="text-2xl font-bold text-white">{stats.totalArbs} ARBs</h3>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center">
                    <GitCommit size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Synced</span>
                    <h3 className="text-2xl font-bold text-white">{stats.compiledAt}</h3>
                  </div>
                </div>
              </div>

              {/* Core Framework Mappings */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 4 States of Consciousness */}
                <div className="glass-panel p-8 space-y-6">
                  <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
                    <span className="w-2 h-6 bg-orange-600 rounded" />
                    Quarters of Consciousness (Māṇḍūkya)
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">1. Jāgrat (Waking State) — Intake</h4>
                      <p className="text-xs text-slate-400 mt-1">Gathers context, processes initial user requirements, and defines task inputs.</p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">2. Svapna (Dreaming State) — Blueprint</h4>
                      <p className="text-xs text-slate-400 mt-1">Abstract cognitive planning, architecture design logs, and workflow blueprints.</p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">3. Suṣupti (Deep Sleep) — Invariant Bounds</h4>
                      <p className="text-xs text-slate-400 mt-1">Frozen system configurations, ethics rules (Yamas/Niyamas), and safety boundaries.</p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">4. Turīya (Absolute Consciousness) — Manifest Index</h4>
                      <p className="text-xs text-slate-400 mt-1">The Mūla Sphoṭa global manifest indexing the entire repository state.</p>
                    </div>
                  </div>
                </div>

                {/* 5 limiting sheaths */}
                <div className="glass-panel p-8 space-y-6">
                  <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
                    <span className="w-2 h-6 bg-orange-600 rounded" />
                    Limiting Sheaths of Agency (Shaiva Kañcukas)
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">Kāla (Time Bounds)</h4>
                      <p className="text-xs text-slate-400 mt-1">Limits maximum turn step counts to prevent infinite loops during diagnostic executions.</p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">Niyati (Space Bounds)</h4>
                      <p className="text-xs text-slate-400 mt-1">Limits file system actions strictly to the workspace directory to prevent sandbox leakage.</p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">Rāga (Scope Limits)</h4>
                      <p className="text-xs text-slate-400 mt-1">Restricts modifications to items explicitly mapped out in the active Saṅkalpa log.</p>
                    </div>
                    <div className="p-4 bg-slate-950/60 rounded-lg border border-amber-950/10">
                      <h4 className="text-amber-400 font-display font-semibold text-sm">Kalā / Vidyā (Tool Safety)</h4>
                      <p className="text-xs text-slate-400 mt-1">Blocks arbitrary terminal network downloads (npm/pip) without explicit developer confirmation.</p>
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
