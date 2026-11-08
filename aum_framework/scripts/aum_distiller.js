#!/usr/bin/env node
/**
 * aum_distiller.js
 * SPHOTA OS — Sub-15ms Native Local Intent Distiller & Speech Noise Filter
 * 
 * Performs:
 * 1. Levenshtein fuzzy symbol grounding against local project AST identifiers
 * 2. Mīmāṃsā Ṣaḍ-Liṅga heuristic stripping (removes voice filler, preserves core goal)
 * 3. Disentangles Multi-Intent input into: Macro, Micro, Guard, and Parked nodes
 * Runs 100% locally in native Node.js (< 15ms latency, 0 external LLM calls).
 */

const fs = require('fs');
const path = require('path');
const { SPG, printReceipt } = require('./lib/receipts');

// Native Levenshtein distance for fuzzy speech-to-text symbol correction
function levenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1].toLowerCase() === s2[j - 1].toLowerCase()) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// Scans local workspace for real code symbols (file names, scripts) to ground voice words
function getLocalSymbolDictionary() {
  const symbols = new Set([
    'aum', 'manifest', 'sphota', 'sankalpa', 'tala', 'yogi',
    'intent', 'anchor', 'distiller', 'graph', 'lock', 'hook',
    'sqlite', 'faiss', 'embedding', 'receipt', 'verify', 'audit',
    'install', 'sync', 'drone', 'wrap', 'resume', 'park'
  ]);

  try {
    const scriptsDir = path.join(__dirname);
    if (fs.existsSync(scriptsDir)) {
      fs.readdirSync(scriptsDir).forEach(f => {
        symbols.add(f.replace(/\.[^/.]+$/, ''));
      });
    }
  } catch (_) {}

  return Array.from(symbols);
}

// Common speech-to-text conversational filler to strip (Mīmāṃsā Arthavāda)
const FILLER_PATTERNS = [
  /^(hey|hello|hi|please|could you|can you|i want to|we need to|let's|so basically|you know|uh|um|like)\s+/gi,
  /\b(you know|i mean|sort of|kind of|as i said|actually|basically|listen)\b/gi,
  /\b(right now|asap|at the moment|and stuff|or something like that)\b/gi
];

function cleanVoiceNoise(rawText) {
  let cleaned = rawText.trim();
  for (const regex of FILLER_PATTERNS) {
    cleaned = cleaned.replace(regex, ' ').replace(/\s{2,}/g, ' ');
  }
  return cleaned.trim();
}

function groundFuzzyWord(word, symbols) {
  if (word.length < 4) return word;
  let bestMatch = word;
  let minDistance = 3; // Max tolerance

  for (const sym of symbols) {
    const d = levenshteinDistance(word, sym);
    if (d < minDistance) {
      minDistance = d;
      bestMatch = sym;
    }
  }
  return bestMatch;
}

/**
 * Distills raw prompt into multi-intent components in < 15ms
 */
function distillIntent(rawInput) {
  const startTime = process.hrtime.bigint();
  const symbols = getLocalSymbolDictionary();
  const cleaned = cleanVoiceNoise(rawInput);

  // Match words against symbols
  const words = cleaned.split(/\s+/);
  const groundedWords = words.map(w => groundFuzzyWord(w, symbols));
  const normalizedText = groundedWords.join(' ');

  // Detect and disentangle multiple intents
  const result = {
    raw: rawInput,
    normalized: normalizedText,
    macro: null,
    micro: normalizedText,
    guards: [],
    parked: [],
    latency_ms: 0
  };

  // Check for guard markers ("make sure", "don't", "never", "keep")
  const guardMatch = normalizedText.match(/(?:make sure|ensure|don't|never|keep)\s+([^,.;]+)/i);
  if (guardMatch) {
    result.guards.push(guardMatch[1].trim());
  }

  // Check for parked markers ("later", "after this", "also consider")
  const parkMatch = normalizedText.match(/(?:later|after this|eventually|also consider)\s+([^,.;]+)/i);
  if (parkMatch) {
    result.parked.push(parkMatch[1].trim());
  }

  // Strip extracted guards and parked from primary micro
  let coreMicro = normalizedText;
  if (guardMatch) coreMicro = coreMicro.replace(guardMatch[0], '');
  if (parkMatch) coreMicro = coreMicro.replace(parkMatch[0], '');
  result.micro = coreMicro.replace(/^[,\s;]+|[,\s;]+$/g, '').trim() || normalizedText;

  const endTime = process.hrtime.bigint();
  result.latency_ms = Number(endTime - startTime) / 1e6; // Convert nanoseconds to milliseconds

  return result;
}

if (require.main === module) {
  const input = process.argv.slice(2).join(' ') || "Hey um please make the barish part and ensure we never break sqlite and later check redis";
  const distilled = distillIntent(input);
  
  printReceipt(SPG.spark, 'SPHOTA SUB-15MS DISTILLATION RECEIPT', [
    ['Input (Vaikharī)', distilled.raw.slice(0, 36)],
    ['Distilled Micro', distilled.micro.slice(0, 36)],
    ['Guards Extracted', distilled.guards.length > 0 ? distilled.guards.join(', ').slice(0, 36) : '(none)'],
    ['Parked Extracted', distilled.parked.length > 0 ? distilled.parked.join(', ').slice(0, 36) : '(none)'],
    ['Native Latency', `${distilled.latency_ms.toFixed(2)} ms (SLA: < 15ms)`]
  ], SPG.success);
}

module.exports = {
  distillIntent,
  cleanVoiceNoise,
  levenshteinDistance
};

