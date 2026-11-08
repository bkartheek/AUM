#!/usr/bin/env node
/**
 * aum_wrap.js
 * SPHOTA OS — Session Wrap & Next-Day Morning Ledger (Yoga Saṃskāras)
 * 
 * Creates an immutable session snapshot upon day-end or git commit:
 * - Records completed subtasks
 * - Preserves active intent and pending work
 * - Awakens as instant Smṛti (recall) tomorrow morning across all agents
 */

const fs = require('fs');
const path = require('path');
const { loadIntentGraph, saveIntentGraph, getProjectAumDir } = require('./aum_intent_graph');
const { synthesizeContextAnchor } = require('./aum_anchor');
const { SPG, printReceipt } = require('./lib/receipts');

function wrapSession(summary = "End-of-day progress snapshot") {
  const graph = loadIntentGraph();
  const aumDir = getProjectAumDir();
  const memoryDir = path.join(aumDir, 'memory');
  if (!fs.existsSync(memoryDir)) fs.mkdirSync(memoryDir, { recursive: true });

  const sessionSnapshot = {
    session_id: `samskara_${Date.now()}`,
    wrapped_at: new Date().toISOString(),
    branch: graph.branch,
    macro_vision: graph.macro_vision,
    active_micro: graph.active_micro,
    summary,
    pending_guards: graph.guard_invariants,
    parked_sparks_count: graph.parked_sparks.length
  };

  const snapshotFile = path.join(memoryDir, `session_${sessionSnapshot.session_id}.json`);
  fs.writeFileSync(snapshotFile, JSON.stringify(sessionSnapshot, null, 2), 'utf8');

  // Update anchor for tomorrow morning's boot
  synthesizeContextAnchor();

  return sessionSnapshot;
}

function getMorningLedger() {
  const graph = loadIntentGraph();
  return {
    branch: graph.branch,
    macro: graph.macro_vision,
    active_micro: graph.active_micro ? graph.active_micro.goal : "Ready for next resolve",
    guards_count: graph.guard_invariants.length,
    parked_count: graph.parked_sparks.length
  };
}

if (require.main === module) {
  const summary = process.argv.slice(2).join(' ') || "Session wrapped cleanly";
  const snap = wrapSession(summary);
  printReceipt(SPG.resolve, 'SESSION WRAPPED (YOGA SAṂSKĀRA SAVED)', [
    ['Session ID', snap.session_id],
    ['Branch Bound', snap.branch],
    ['Summary', snap.summary.slice(0, 36)],
    ['Morning Recall', 'Auto-hydrated in ACTIVE_CONTEXT.md']
  ], SPG.agent);
}

module.exports = {
  wrapSession,
  getMorningLedger
};

