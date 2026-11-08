#!/usr/bin/env node
/**
 * End-to-end smoke test against the global ~/.aum runtime.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { globalHub } = require('./lib/paths');
const { SPG, printReceipt, focusLock } = require('./lib/receipts');

const aumBin = path.join(__dirname, 'aum.js');

function run(args) {
  const r = spawnSync(process.execPath, [aumBin, ...args], {
    encoding: 'utf8',
    env: { ...process.env, AUM_FORCE_GLOBAL: '1' }
  });
  return r;
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function main() {
  focusLock('Running global runtime self-test');
  const steps = [];

  let r = run([
    'install',
    '--yes',
    '--intent',
    'Selftest: align human and agent intent via Māṇḍūkya Clarify-Plan-Act',
    '--agents',
    'detected',
    '--no-hooks'
  ]);
  assert(r.status === 0, 'install failed: ' + (r.stderr || r.stdout));
  steps.push('install');

  r = run(['sync']);
  assert(r.status === 0, 'sync failed');
  steps.push('sync');

  const hub = globalHub();
  assert(fs.existsSync(path.join(hub, 'ORCHESTRATOR.md')), 'missing ORCHESTRATOR.md');
  assert(fs.existsSync(path.join(hub, 'manifest.json')), 'missing manifest.json');
  assert(fs.existsSync(path.join(hub, 'runtime', 'scripts', 'aum.js')), 'missing runtime scripts');
  assert(fs.existsSync(path.join(hub, 'agents', 'skills', 'developer', 'SKILL.md')), 'missing developer skill');
  steps.push('hub-files');

  r = run(['spark', 'selftest spark seed']);
  assert(r.status === 0, 'spark failed');
  steps.push('spark');

  r = run(['concern', 'selftest concern signal']);
  assert(r.status === 0, 'concern failed');
  steps.push('concern');

  r = run(['resolve', 'Selftest Intent Resolve']);
  assert(r.status === 0, 'resolve failed');
  steps.push('resolve');

  r = run(['beat', 'next']);
  assert(r.status === 0, 'beat failed');
  steps.push('beat');

  r = run(['domain', 'development']);
  assert(r.status === 0, 'domain failed');
  steps.push('domain');

  r = run(['drone']);
  assert(r.status === 0, 'drone failed');
  steps.push('drone');

  r = run(['hook']);
  assert(r.status === 0, 'hook failed');
  steps.push('hook');

  const version = JSON.parse(fs.readFileSync(path.join(hub, 'VERSION.json'), 'utf8'));
  assert(version.version, 'VERSION.json missing version');

  printReceipt(SPG.success, 'GLOBAL SELF-TEST PASSED', [
    ['Hub', hub],
    ['Steps', steps.join(' → ')],
    ['Version', version.version],
    ['Synced', version.synced_at || version.installed_at || '—']
  ], SPG.globe);
}

try {
  main();
} catch (err) {
  printReceipt(SPG.fail, 'GLOBAL SELF-TEST FAILED', [
    ['Error', err.message]
  ], SPG.warn);
  process.exit(1);
}
