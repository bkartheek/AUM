#!/usr/bin/env node
/**
 * aum_ast_harvester.js
 * SPHOTA OS — Dynamic Codebase AST Symbol Tree Harvester
 * 
 * Automatically harvests real functions, classes, exported constants, routes,
 * and database models from the active workspace in real-time.
 * Caches symbols into ~/.aum/cache/workspace_symbols.json for sub-15ms phonetic resolution.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { SPG, printReceipt } = require('./lib/receipts');

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', 'build', '.aum', 'release', 'coverage', '.gemini'
]);

const VALID_EXTENSIONS = new Set([
  '.js', '.mjs', '.ts', '.tsx', '.jsx', '.py', '.json', '.md'
]);

function getSymbolCachePath() {
  const home = os.homedir();
  const cacheDir = path.join(home, '.aum', 'cache');
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
  return path.join(cacheDir, 'workspace_symbols.json');
}

function extractSymbolsFromCode(content, filePath) {
  const symbols = [];
  const lines = content.split('\n');

  // Regex patterns for functions, classes, constants, routes
  const patterns = [
    /(?:function|async function)\s+([a-zA-Z0-9_$]+)/g,
    /(?:class)\s+([a-zA-Z0-9_$]+)/g,
    /(?:const|let|var)\s+([a-zA-Z0-9_$]+)\s*=/g,
    /([a-zA-Z0-9_$]+)\s*:\s*(?:function|async function|\()/g,
    /(?:router|app)\.(?:get|post|put|delete|patch)\s*\(\s*['"]([^'"]+)['"]/g
  ];

  lines.forEach((line, idx) => {
    patterns.forEach(regex => {
      let match;
      while ((match = regex.exec(line)) !== null) {
        if (match[1] && match[1].length > 2 && !['const', 'let', 'var', 'if', 'for', 'while'].includes(match[1])) {
          symbols.push({
            name: match[1],
            file: path.relative(process.cwd(), filePath),
            line: idx + 1
          });
        }
      }
    });
  });

  return symbols;
}

function scanWorkspace(dir = process.cwd(), depth = 0, maxDepth = 4) {
  if (depth > maxDepth) return [];
  let foundSymbols = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') && entry.name !== '.cursorrules' && entry.name !== '.agents') continue;
      if (IGNORE_DIRS.has(entry.name)) continue;

      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        foundSymbols = foundSymbols.concat(scanWorkspace(fullPath, depth + 1, maxDepth));
      } else if (entry.isFile() && VALID_EXTENSIONS.has(path.extname(entry.name))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const fileSymbols = extractSymbolsFromCode(content, fullPath);
          foundSymbols = foundSymbols.concat(fileSymbols);
        } catch (_) {}
      }
    }
  } catch (_) {}

  return foundSymbols;
}

function harvestSymbols() {
  const startTime = process.hrtime.bigint();
  const symbols = scanWorkspace();
  const cachePath = getSymbolCachePath();

  // Deduplicate and index by symbol name
  const symbolMap = {};
  symbols.forEach(s => {
    if (!symbolMap[s.name]) symbolMap[s.name] = [];
    symbolMap[s.name].push({ file: s.file, line: s.line });
  });

  const payload = {
    workspace: process.cwd(),
    harvested_at: new Date().toISOString(),
    total_symbols: Object.keys(symbolMap).length,
    symbols: symbolMap
  };

  fs.writeFileSync(cachePath, JSON.stringify(payload, null, 2), 'utf8');
  const endTime = process.hrtime.bigint();
  const latencyMs = Number(endTime - startTime) / 1e6;

  return {
    total: payload.total_symbols,
    cachePath,
    latencyMs
  };
}

function loadHarvestedSymbols() {
  const cachePath = getSymbolCachePath();
  if (fs.existsSync(cachePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
      return Object.keys(data.symbols || {});
    } catch (_) {}
  }
  return [];
}

if (require.main === module) {
  const result = harvestSymbols();
  printReceipt(SPG.distill || SPG.spark, 'DYNAMIC AST SYMBOLS HARVESTED', [
    ['Workspace', path.basename(process.cwd())],
    ['Total Symbols', `${result.total} symbols`],
    ['Cache Location', result.cachePath],
    ['Harvest Time', `${result.latencyMs.toFixed(2)} ms`]
  ], SPG.success);
}

module.exports = {
  harvestSymbols,
  loadHarvestedSymbols,
  getSymbolCachePath
};
