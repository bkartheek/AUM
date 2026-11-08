#!/usr/bin/env node
/**
 * aum_intent_graph.js
 * SPHOTA OS — Multi-Intent DAG & Branch-Aware State Engine
 * 
 * Manages the multi-layered intent graph:
 * - Macro-Vision (Parent Intent)
 * - Active Micro-Focus (Immediate actionable task)
 * - Guard Invariants (Non-negotiable constraints & Yamas)
 * - Parked Sparks (Ideas preserved in ~/.aum/ideas with zero token tax)
 * - Branch-Aware persistence (.aum/intents/branch_<name>.json)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { SPG, printReceipt } = require('./lib/receipts');

function getProjectAumDir() {
  // Pure Global Hub at ~/.aum
  const home = process.env.HOME || process.env.USERPROFILE;
  return path.join(home, '.aum');
}

function getActiveGitBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD 2>/dev/null', { encoding: 'utf8' }).trim();
    return branch || 'main';
  } catch (_) {
    return 'default';
  }
}

function getWorkspaceKey() {
  const cwd = process.cwd();
  return path.basename(cwd).replace(/[^a-zA-Z0-9_-]/g, '_');
}

function getIntentsDir() {
  const aumDir = getProjectAumDir();
  const intentsDir = path.join(aumDir, 'intents');
  if (!fs.existsSync(intentsDir)) fs.mkdirSync(intentsDir, { recursive: true });
  return intentsDir;
}

function getBranchStatePath(branchName) {
  const wsKey = getWorkspaceKey();
  const safeBranch = (branchName || getActiveGitBranch()).replace(/[^a-zA-Z0-9_-]/g, '_');
  return path.join(getIntentsDir(), `${wsKey}_branch_${safeBranch}.json`);
}

function loadIntentGraph(branchName) {
  const statePath = getBranchStatePath(branchName);
  if (fs.existsSync(statePath)) {
    try {
      return JSON.parse(fs.readFileSync(statePath, 'utf8'));
    } catch (_) {}
  }
  return {
    branch: branchName || getActiveGitBranch(),
    updated_at: new Date().toISOString(),
    macro_vision: "Build SPHOTA OS Multi-Intent Universal Engine",
    active_micro: null,
    guard_invariants: [
      "Keep context injection < 380 tokens",
      "Enforce Design-Before-Code gate on prompt #1",
      "Sub-15ms local AST resolution"
    ],
    parked_sparks: [],
    completed_nodes: []
  };
}

function saveIntentGraph(graph, branchName) {
  graph.updated_at = new Date().toISOString();
  const statePath = getBranchStatePath(branchName || graph.branch);
  fs.writeFileSync(statePath, JSON.stringify(graph, null, 2), 'utf8');
  return statePath;
}

function setActiveMicro(goal, details = {}) {
  const graph = loadIntentGraph();
  if (graph.active_micro && graph.active_micro.goal !== goal) {
    graph.completed_nodes.push({
      ...graph.active_micro,
      completed_at: new Date().toISOString()
    });
  }
  graph.active_micro = {
    id: `micro_${Date.now()}`,
    goal,
    status: 'active',
    scope_files: details.scope_files || [],
    created_at: new Date().toISOString()
  };
  saveIntentGraph(graph);
  return graph;
}

function parkSpark(sparkText) {
  const graph = loadIntentGraph();
  const spark = {
    id: `spark_${Date.now()}`,
    text: sparkText,
    created_at: new Date().toISOString()
  };
  graph.parked_sparks.push(spark);
  saveIntentGraph(graph);
  
  // Also append to global ideas
  const home = process.env.HOME || process.env.USERPROFILE;
  const ideasDir = path.join(home, '.aum', 'ideas');
  if (!fs.existsSync(ideasDir)) fs.mkdirSync(ideasDir, { recursive: true });
  fs.appendFileSync(path.join(ideasDir, 'sparks.log'), `[${new Date().toISOString()}] ${sparkText}\n`, 'utf8');
  
  return spark;
}

function addGuard(guardText) {
  const graph = loadIntentGraph();
  if (!graph.guard_invariants.includes(guardText)) {
    graph.guard_invariants.push(guardText);
    saveIntentGraph(graph);
  }
  return graph.guard_invariants;
}

function printGraphReceipt() {
  const graph = loadIntentGraph();
  printReceipt(SPG.aum, `SPHOTA INTENT DAG [Branch: ${graph.branch}]`, [
    ['Macro Vision', (graph.macro_vision || '').slice(0, 35)],
    ['Active Micro', graph.active_micro ? graph.active_micro.goal.slice(0, 35) : '(none set)'],
    ['Guards Active', `${graph.guard_invariants.length} invariants`],
    ['Parked Sparks', `${graph.parked_sparks.length} parked`],
    ['Completed', `${graph.completed_nodes.length} completed`]
  ], SPG.agent);
}

module.exports = {
  loadIntentGraph,
  saveIntentGraph,
  setActiveMicro,
  parkSpark,
  addGuard,
  getActiveGitBranch,
  getBranchStatePath,
  getProjectAumDir,
  printGraphReceipt
};

if (require.main === module) {
  const args = process.argv.slice(2);
  const cmd = (args[0] || '').toLowerCase();
  if (cmd === 'set-micro') {
    setActiveMicro(args.slice(1).join(' '));
    printGraphReceipt();
  } else if (cmd === 'park') {
    parkSpark(args.slice(1).join(' '));
    printGraphReceipt();
  } else if (cmd === 'guard') {
    addGuard(args.slice(1).join(' '));
    printGraphReceipt();
  } else {
    printGraphReceipt();
  }
}

