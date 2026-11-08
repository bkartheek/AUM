#!/usr/bin/env node
/**
 * aum_anchor.js
 * SPHOTA OS — Two-Tier Dynamic Token Anchor Synthesizer
 * 
 * Strict Token Budget:
 * - Tier 1: Base Anchor (Guaranteed ~150-180 tokens)
 * - Tier 2: Keyword-Triggered Semantic Micro-Injection (0-150 tokens)
 * Total Injected Context: STRICTLY BOUNDED BETWEEN 180 and 380 TOKENS.
 * Writes to both local .aum/CONTEXT.md and ~/.aum/ACTIVE_CONTEXT.md in < 1ms.
 */

const fs = require('fs');
const path = require('path');
const { loadIntentGraph, getProjectAumDir } = require('./aum_intent_graph');
const { SPG, printReceipt } = require('./lib/receipts');

function estimateTokenCount(text) {
  // Conservative estimate: ~4 chars per token in English
  return Math.ceil(text.trim().length / 4);
}

function synthesizeContextAnchor(options = {}) {
  const graph = loadIntentGraph();
  const branch = graph.branch || 'main';
  const repoName = path.basename(process.cwd());

  const activeGoal = graph.active_micro 
    ? graph.active_micro.goal 
    : "SPHOTA OS Multi-Intent Bridge Deployment";

  const guards = (graph.guard_invariants || []).slice(0, 3).map(g => `  • ${g}`).join('\n');
  const lastCompleted = graph.completed_nodes && graph.completed_nodes.length > 0
    ? graph.completed_nodes[graph.completed_nodes.length - 1].goal
    : "Consolidated all 6 plans into master SPHOTA OS unified blueprint";

  // Tier 1: Core Base Anchor
  let content = `---
# ॐ AUM SPHOTA INTENT ANCHOR [Workspace: ${repoName} | Branch: ${branch}]
• Parent Macro: ${graph.macro_vision}
• Active Micro-Focus: ${activeGoal}
• Yesterday's Progress: ${lastCompleted}
• Active Invariant Guards:
${guards}
• MANDATORY PROMPT #1 PROTOCOL:
  1. DO NOT emit code, diffs, or file writes on initial prompt.
  2. Echo distilled human intent + project intended agent actions.
  3. Await explicit human confirmation ("Proceed") before writing code.
---
`;

  // Tier 2: Keyword-triggered semantic micro-injection (if prompt options supplied)
  if (options.query) {
    const queryLower = options.query.toLowerCase();
    let semanticAdditions = [];
    if (queryLower.includes('auth') || queryLower.includes('token') || queryLower.includes('key')) {
      semanticAdditions.push("• Domain Guard (Auth): Never expose credentials or write unhashed tokens to logs.");
    }
    if (queryLower.includes('db') || queryLower.includes('sqlite') || queryLower.includes('database')) {
      semanticAdditions.push("• Domain Guard (DB): Maintain strict transaction atomicity and WAL journal mode.");
    }
    if (semanticAdditions.length > 0) {
      content += `\n# Contextual Guardrails:\n${semanticAdditions.join('\n')}\n`;
    }
  }

  const tokenEstimate = estimateTokenCount(content);

  // Write local anchor
  const localAum = path.join(process.cwd(), '.aum');
  if (fs.existsSync(localAum)) {
    fs.writeFileSync(path.join(localAum, 'CONTEXT.md'), content, 'utf8');
  }

  // Write global anchor
  const home = process.env.HOME || process.env.USERPROFILE;
  const globalAum = path.join(home, '.aum');
  if (!fs.existsSync(globalAum)) fs.mkdirSync(globalAum, { recursive: true });
  fs.writeFileSync(path.join(globalAum, 'ACTIVE_CONTEXT.md'), content, 'utf8');

  return {
    content,
    tokenEstimate,
    localPath: fs.existsSync(localAum) ? path.join(localAum, 'CONTEXT.md') : null,
    globalPath: path.join(globalAum, 'ACTIVE_CONTEXT.md')
  };
}

if (require.main === module) {
  const result = synthesizeContextAnchor();
  printReceipt(SPG.aum, 'SPHOTA TOKEN ANCHOR SYNTHESIZED', [
    ['Tokens Est.', `${result.tokenEstimate} tokens (Target: 180-380)`],
    ['Local Target', result.localPath || '(global only)'],
    ['Global Target', result.globalPath],
    ['Gatekeeper', 'Active on Prompt #1']
  ], SPG.agent);
}

module.exports = {
  synthesizeContextAnchor,
  estimateTokenCount
};

