const fs = require('fs');
const os = require('os');
const path = require('path');

const GLOBAL_AUM = path.join(os.homedir(), '.aum');

function resolveAumDir() {
  // Pure OS-Level Global Architecture: All intent state lives in ~/.aum
  return { dir: GLOBAL_AUM, scope: 'global' };
}

function globalHub() {
  return GLOBAL_AUM;
}

function frameworkRoot() {
  return path.join(__dirname, '..', '..');
}

function pkgFilesDir() {
  return path.join(frameworkRoot(), 'pkg_files');
}

function scriptsDir() {
  return path.join(frameworkRoot(), 'scripts');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath, fallback = null) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (_) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function forceGlobal() {
  return true; // Always OS-level global hub at ~/.aum
}

module.exports = {
  GLOBAL_AUM,
  forceGlobal,
  resolveAumDir,
  globalHub,
  frameworkRoot,
  pkgFilesDir,
  scriptsDir,
  ensureDir,
  readJson,
  writeJson
};
