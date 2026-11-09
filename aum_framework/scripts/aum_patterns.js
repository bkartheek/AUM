#!/usr/bin/env node
/**
 * aum_patterns.js
 * SPHOTA OS — Hierarchical Pattern-of-Patterns Engine
 * 
 * Aggregates patterns across 3 tiers:
 * Level 1: Atomic AST & Code Signals (symbols, imports, file changes)
 * Level 2: Composite Workflows & Co-occurrence (routines, file co-edits)
 * Level 3: Meta-Patterns (Architectural Intent, Invariant constraints)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { loadIntentGraph, saveIntentGraph } = require('./aum_intent_graph');
const { loadHarvestedSymbols, harvestSymbols } = require('./aum_ast_harvester');
const { SPG, printReceipt } = require('./lib/receipts');

function getPatternsDir() {
  const home = os.homedir();
  const dir = path.join(home, '.aum', 'patterns');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function getPatternRegistryPath() {
  return path.join(getPatternsDir(), 'pattern_registry.json');
}

function loadPatternRegistry() {
  const pPath = getPatternRegistryPath();
  if (fs.existsSync(pPath)) {
    try {
      return JSON.parse(fs.readFileSync(pPath, 'utf8'));
    } catch (_) {}
  }
  return {
    version: '1.0.0',
    updated_at: new Date().toISOString(),
    atomic_patterns: {},     // L1: symbol/file frequency
    composite_workflows: {}, // L2: co-occurrence clusters (file A + file B)
    meta_patterns: []        // L3: high-level architecture principles
  };
}

function savePatternRegistry(reg) {
  reg.updated_at = new Date().toISOString();
  fs.writeFileSync(getPatternRegistryPath(), JSON.stringify(reg, null, 2), 'utf8');
}

/**
 * Record a workflow action and update pattern co-occurrences
 */
function recordInteractionPattern(actionType, files = [], intentText = '') {
  const registry = loadPatternRegistry();

  // 1. Update L1 Atomic file touch frequency
  files.forEach(f => {
    registry.atomic_patterns[f] = (registry.atomic_patterns[f] || 0) + 1;
  });

  // 2. Update L2 Composite Co-occurrence (pairs of files worked on together)
  if (files.length > 1) {
    for (let i = 0; i < files.length; i++) {
      for (let j = i + 1; j < files.length; j++) {
        const pairKey = [files[i], files[j]].sort().join(' <-> ');
        registry.composite_workflows[pairKey] = (registry.composite_workflows[pairKey] || 0) + 1;
      }
    }
  }

  // 3. Promote frequently co-occurring patterns to L3 Meta-Patterns if threshold met
  Object.entries(registry.composite_workflows).forEach(([pair, count]) => {
    if (count >= 5) {
      const metaRule = `Strong coupling detected between ${pair}`;
      if (!registry.meta_patterns.includes(metaRule)) {
        registry.meta_patterns.push(metaRule);
      }
    }
  });

  savePatternRegistry(registry);
  return registry;
}

/**
 * Analyze and synthesize patterns-of-patterns summary
 */
function analyzePatterns() {
  const registry = loadPatternRegistry();
  const graph = loadIntentGraph();
  const symbols = loadHarvestedSymbols();

  const totalAtomic = Object.keys(registry.atomic_patterns).length;
  const totalComposite = Object.keys(registry.composite_workflows).length;
  const totalMeta = registry.meta_patterns.length;

  return {
    atomic_count: totalAtomic,
    composite_count: totalComposite,
    meta_count: totalMeta,
    meta_patterns: registry.meta_patterns,
    top_workflows: Object.entries(registry.composite_workflows)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
  };
}

if (require.main === module) {
  const summary = analyzePatterns();
  printReceipt(SPG.aum, 'HIERARCHICAL PATTERNS OF PATTERNS', [
    ['L1 Atomic Files', `${summary.atomic_count} registered`],
    ['L2 Workflows', `${summary.composite_count} composite clusters`],
    ['L3 Meta-Patterns', `${summary.meta_count} synthesized principles`],
    ['Active Branch', summary.top_workflows.length ? summary.top_workflows[0][0].slice(0, 30) : '(none yet)']
  ], SPG.sequence);
}

module.exports = {
  recordInteractionPattern,
  analyzePatterns,
  loadPatternRegistry,
  savePatternRegistry
};
