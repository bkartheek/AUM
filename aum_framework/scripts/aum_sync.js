const fs = require('fs');
const path = require('path');
const { globalHub, ensureDir, frameworkRoot, scriptsDir, pkgFilesDir, readJson, writeJson } = require('./lib/paths');
const { SPG, printReceipt, focusLock } = require('./lib/receipts');
const { installGlobal, writeOrchestrator } = require('./aum_install');
const { runHooks } = require('./aum_hook');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return 0;
  let count = 0;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const name of fs.readdirSync(src)) {
      count += copyRecursive(path.join(src, name), path.join(dest, name));
    }
    return count;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  return 1;
}

/**
 * Sync framework package → ~/.aum runtime (preserves user tasks/ideas/memory/manifest).
 */
function syncGlobal({ hook = true } = {}) {
  focusLock('Syncing framework package into global AUM runtime');
  const hub = globalHub();

  if (!fs.existsSync(hub)) {
    return installGlobal({ runHook: hook });
  }

  // Refresh protocol docs (not user state dirs)
  const srcAum = path.join(pkgFilesDir(), '.aum_en');
  const protocolFiles = [
    'INSTRUCTIONS.md',
    'PHILOSOPHY.md',
    'DICTIONARY.md',
    'MANIFEST.md',
    'config.json'
  ];
  let files = 0;
  if (fs.existsSync(srcAum)) {
    for (const name of protocolFiles) {
      const src = path.join(srcAum, name);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(hub, name));
        files++;
      }
    }
    // templates
    files += copyRecursive(path.join(srcAum, 'templates'), path.join(hub, 'templates'));
    files += copyRecursive(path.join(srcAum, 'tasks', 'template.md'), path.join(hub, 'tasks', 'template.md'));
  }

  writeOrchestrator(hub);
  files++;

  files += copyRecursive(scriptsDir(), path.join(hub, 'runtime', 'scripts'));

  const agentsSrc = path.join(pkgFilesDir(), '.agents');
  if (fs.existsSync(agentsSrc)) {
    files += copyRecursive(agentsSrc, path.join(hub, 'agents'));
  }

  const pkg = readJson(path.join(frameworkRoot(), 'package.json'), { version: '0.0.0' });
  writeJson(path.join(hub, 'VERSION.json'), {
    version: pkg.version,
    synced_at: new Date().toISOString(),
    framework_root: frameworkRoot()
  });

  // Merge config mode
  const configPath = path.join(hub, 'config.json');
  const cfg = readJson(configPath, {});
  writeJson(configPath, {
    ...cfg,
    mode: 'global',
    domain_profiles: cfg.domain_profiles || ['general', 'development', 'diagnostic']
  });

  if (hook) runHooks({ rich: true });

  printReceipt(SPG.sync, 'GLOBAL RUNTIME SYNCED', [
    ['Hub', hub],
    ['Files', String(files)],
    ['Version', pkg.version],
    ['Preserved', 'tasks · ideas · memory · manifest']
  ], SPG.develop);

  return { hub, files, version: pkg.version };
}

if (require.main === module) {
  try {
    syncGlobal();
  } catch (err) {
    console.error(`${SPG.fail} Sync failed:`, err.message);
    process.exit(1);
  }
}

module.exports = { syncGlobal };
