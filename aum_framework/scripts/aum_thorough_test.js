#!/usr/bin/env node
/**
 * Thorough verification suite for AUM global intent orchestrator.
 * Does not purge ~/.aum. Uses AUM_FORCE_GLOBAL for hub mutations.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');
const { globalHub } = require('./lib/paths');
const { SPG, printReceipt, focusLock } = require('./lib/receipts');

const aumBin = path.join(__dirname, 'aum.js');
const hub = globalHub();
const results = [];

function run(args, envExtra = {}) {
  return spawnSync(process.execPath, [aumBin, ...args], {
    encoding: 'utf8',
    cwd: path.join(__dirname, '..', '..'), // repo root (has local .aum)
    env: { ...process.env, ...envExtra }
  });
}

function runGlobal(args) {
  return run(args, { AUM_FORCE_GLOBAL: '1' });
}

function pass(name, detail = '') {
  results.push({ name, ok: true, detail });
  console.log(`${SPG.success} ${name}${detail ? ' — ' + detail : ''}`);
}

function fail(name, detail) {
  results.push({ name, ok: false, detail });
  console.log(`${SPG.fail} ${name} — ${detail}`);
}

function expectStatus(r, code, name) {
  if (r.status === code) pass(name, `exit ${code}`);
  else fail(name, `expected exit ${code}, got ${r.status}\n${(r.stdout || '') + (r.stderr || '')}`.slice(0, 400));
}

function expectOut(r, substr, name) {
  const out = (r.stdout || '') + (r.stderr || '');
  if (out.includes(substr)) pass(name);
  else fail(name, `missing "${substr}" in output`);
}

function main() {
  focusLock('Thorough AUM global orchestrator verification');

  // --- CLI surface ---
  expectStatus(runGlobal(['help']), 0, 'help exits 0');
  expectOut(runGlobal(['help']), 'install', 'help lists install');
  expectStatus(runGlobal(['not-a-real-cmd']), 1, 'unknown command exits 1');

  // --- Argument validation ---
  expectStatus(runGlobal(['spark']), 1, 'spark without text fails');
  expectStatus(runGlobal(['concern']), 1, 'concern without text fails');
  expectStatus(runGlobal(['resolve']), 1, 'resolve without title fails');
  expectStatus(runGlobal(['domain', 'cooking']), 1, 'invalid domain fails');
  expectStatus(runGlobal(['beat', 'set', 'nope']), 1, 'invalid beat stage fails');

  // --- Install / sync idempotency ---
  const beforeTasks = fs.existsSync(path.join(hub, 'tasks'))
    ? fs.readdirSync(path.join(hub, 'tasks')).length
    : 0;
  expectStatus(runGlobal(['install']), 0, 'install idempotent');
  expectStatus(runGlobal(['sync']), 0, 'sync idempotent');
  const afterInstallTasks = fs.readdirSync(path.join(hub, 'tasks')).length;
  if (afterInstallTasks >= beforeTasks) pass('install/sync preserves tasks dir', `${beforeTasks}→${afterInstallTasks}`);
  else fail('install/sync preserves tasks dir', `${beforeTasks}→${afterInstallTasks}`);

  // --- Hub integrity ---
  const required = [
    'ORCHESTRATOR.md',
    'manifest.json',
    'config.json',
    'VERSION.json',
    'INSTRUCTIONS.md',
    'ideas/sparks.md',
    'ideas/concerns.md',
    'runtime/scripts/aum.js',
    'runtime/scripts/lib/receipts.js',
    'agents/skills/developer/SKILL.md',
    'agents/skills/yogi/SKILL.md',
    'domains/general.json',
    'domains/development.json',
    'domains/diagnostic.json',
    'tasks/template.md'
  ];
  for (const rel of required) {
    if (fs.existsSync(path.join(hub, rel))) pass(`hub has ${rel}`);
    else fail(`hub has ${rel}`, 'missing');
  }

  const version = JSON.parse(fs.readFileSync(path.join(hub, 'VERSION.json'), 'utf8'));
  if (version.version === '1.2.0') pass('VERSION is 1.2.0');
  else fail('VERSION is 1.2.0', version.version);

  // --- Intent capture writes files ---
  const marker = `thorough_${Date.now()}`;
  expectStatus(runGlobal(['spark', marker + ' idea']), 0, 'spark ok');
  expectStatus(runGlobal(['concern', marker + ' worry']), 0, 'concern ok');
  const sparks = fs.readFileSync(path.join(hub, 'ideas', 'sparks.md'), 'utf8');
  const concerns = fs.readFileSync(path.join(hub, 'ideas', 'concerns.md'), 'utf8');
  if (sparks.includes(marker)) pass('spark persisted to ideas/sparks.md');
  else fail('spark persisted', 'marker not in file');
  if (concerns.includes(marker)) pass('concern persisted to ideas/concerns.md');
  else fail('concern persisted', 'marker not in file');

  // --- Resolve + pause previous ---
  const r1 = runGlobal(['resolve', `Thorough Alpha ${marker}`]);
  expectStatus(r1, 0, 'resolve alpha');
  const manifest1 = JSON.parse(fs.readFileSync(path.join(hub, 'manifest.json'), 'utf8'));
  const id1 = manifest1.active_task_id;
  if (id1) pass('manifest active_task_id set', id1);
  else fail('manifest active_task_id set', 'empty');

  const alphaFile = fs.readdirSync(path.join(hub, 'tasks')).find(f => f.startsWith(id1));
  if (alphaFile && fs.readFileSync(path.join(hub, 'tasks', alphaFile), 'utf8').includes('Active')) {
    pass('new resolve log is Active');
  } else fail('new resolve log is Active', alphaFile || 'file missing');

  const r2 = runGlobal(['resolve', `Thorough Beta ${marker}`]);
  expectStatus(r2, 0, 'resolve beta');
  const manifest2 = JSON.parse(fs.readFileSync(path.join(hub, 'manifest.json'), 'utf8'));
  if (manifest2.active_task_id && manifest2.active_task_id !== id1) pass('active task switched to beta');
  else fail('active task switched', JSON.stringify(manifest2.active_task_id));

  if (alphaFile) {
    const alphaBody = fs.readFileSync(path.join(hub, 'tasks', alphaFile), 'utf8');
    if (alphaBody.includes('Paused')) pass('previous resolve paused');
    else fail('previous resolve paused', 'still Active or missing Paused');
  }

  if (manifest2.tala_beat === 'intake') pass('new resolve resets beat to intake');
  else fail('new resolve resets beat', manifest2.tala_beat);

  // --- Full beat cycle ---
  const stages = ['blueprint', 'verification', 'manifest', 'intake'];
  for (const stage of stages) {
    const rb = runGlobal(['beat', 'next']);
    expectStatus(rb, 0, `beat next → ${stage}`);
    const m = JSON.parse(fs.readFileSync(path.join(hub, 'manifest.json'), 'utf8'));
    if (m.tala_beat === stage) pass(`beat is ${stage}`);
    else fail(`beat is ${stage}`, m.tala_beat);
  }
  expectStatus(runGlobal(['beat', 'set', 'verification']), 0, 'beat set verification');
  const mSet = JSON.parse(fs.readFileSync(path.join(hub, 'manifest.json'), 'utf8'));
  if (mSet.tala_beat === 'verification') pass('beat set applied');
  else fail('beat set applied', mSet.tala_beat);

  // --- Domains ---
  for (const d of ['general', 'diagnostic', 'development']) {
    expectStatus(runGlobal(['domain', d]), 0, `domain ${d}`);
    const m = JSON.parse(fs.readFileSync(path.join(hub, 'manifest.json'), 'utf8'));
    if (m.domain_profile === d) pass(`domain_profile=${d}`);
    else fail(`domain_profile=${d}`, m.domain_profile);
  }

  // --- Drone / SPG ---
  const drone = runGlobal(['drone']);
  expectStatus(drone, 0, 'drone');
  expectOut(drone, 'CONTEXT ANCHOR', 'drone SPG title');
  expectOut(drone, 'SPG Receipt', 'drone SPG footer');
  expectOut(drone, hub, 'drone shows hub path');

  // --- Local vs global scoping ---
  const localDrone = run(['drone']); // no force global; cwd is repo with .aum
  expectStatus(localDrone, 0, 'local drone (repo .aum)');
  expectOut(localDrone, 'Scope       : local', 'drone prefers local .aum in repo');

  const flagGlobal = run(['drone', '--global']);
  expectStatus(flagGlobal, 0, 'drone --global flag');
  expectOut(flagGlobal, 'Scope       : global', '--global forces ~/.aum');

  // --- Hook idempotency ---
  expectStatus(runGlobal(['hook']), 0, 'hook first');
  expectStatus(runGlobal(['hook']), 0, 'hook second (idempotent)');
  const cursorRules = path.join(os.homedir(), '.cursorrules');
  if (fs.existsSync(cursorRules)) {
    const body = fs.readFileSync(cursorRules, 'utf8');
    const count = (body.match(/AUM GLOBAL NERVOUS SYSTEM HOOK/g) || []).length;
    if (count === 1) pass('hook not duplicated in ~/.cursorrules', `count=${count}`);
    else fail('hook not duplicated', `count=${count}`);
  } else {
    pass('hook file optional', '~/.cursorrules absent');
  }

  // --- Sync after intentional file touch ---
  const orchBefore = fs.readFileSync(path.join(hub, 'ORCHESTRATOR.md'), 'utf8');
  expectStatus(runGlobal(['sync']), 0, 'sync refresh');
  const orchAfter = fs.readFileSync(path.join(hub, 'ORCHESTRATOR.md'), 'utf8');
  if (orchAfter.includes('AUM Global Intent Orchestrator')) pass('ORCHESTRATOR.md intact after sync');
  else fail('ORCHESTRATOR.md intact', 'content broken');
  if (orchAfter.length >= Math.min(orchBefore.length, 100)) pass('ORCHESTRATOR.md non-empty after sync');
  else fail('ORCHESTRATOR.md non-empty', String(orchAfter.length));

  // --- init --global aliases install ---
  expectStatus(run(['init', '--global', '-y']), 0, 'init --global aliases install');

  // --- Summary ---
  const failed = results.filter(r => !r.ok);
  const passed = results.filter(r => r.ok);
  printReceipt(failed.length ? SPG.fail : SPG.success, failed.length ? 'THOROUGH TEST FAILED' : 'THOROUGH TEST PASSED', [
    ['Passed', String(passed.length)],
    ['Failed', String(failed.length)],
    ['Hub', hub],
    ['Failures', failed.length ? failed.map(f => f.name).join(' · ') : '—']
  ], SPG.globe);

  if (failed.length) {
    console.log('\nFailure details:');
    failed.forEach(f => console.log(`  - ${f.name}: ${f.detail}`));
    process.exit(1);
  }
}

try {
  main();
} catch (err) {
  printReceipt(SPG.fail, 'THOROUGH TEST CRASHED', [['Error', err.message]], SPG.warn);
  process.exit(1);
}
