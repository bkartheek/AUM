const fs = require('fs');
const os = require('os');
const path = require('path');

const GLOBAL_AUM = path.join(os.homedir(), '.aum');

function forceGlobal() {
  return process.env.AUM_FORCE_GLOBAL === '1'
    || process.env.AUM_HUB === 'global'
    || process.argv.includes('--global');
}

function resolveAumDir(cwd = process.cwd()) {
  if (forceGlobal()) {
    return { dir: GLOBAL_AUM, scope: 'global' };
  }
  const local = path.join(cwd, '.aum');
  if (fs.existsSync(local)) return { dir: local, scope: 'local' };
  if (fs.existsSync(GLOBAL_AUM)) return { dir: GLOBAL_AUM, scope: 'global' };
  return { dir: GLOBAL_AUM, scope: 'global-missing' };
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
