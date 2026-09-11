const fs = require('fs');
const path = require('path');
const { resolveAumDir, ensureDir, readJson, writeJson } = require('./lib/paths');
const { SPG, printReceipt, focusLock } = require('./lib/receipts');

function aumContext() {
  const { dir, scope } = resolveAumDir();
  ensureDir(dir);
  ensureDir(path.join(dir, 'tasks'));
  ensureDir(path.join(dir, 'ideas'));
  ensureDir(path.join(dir, 'memory'));
  return { dir, scope };
}

function loadManifest(dir) {
  const p = path.join(dir, 'manifest.json');
  const sphota = path.join(dir, 'sphota.json');
  if (fs.existsSync(p)) return { path: p, data: readJson(p, {}) };
  if (fs.existsSync(sphota)) return { path: sphota, data: readJson(sphota, {}) };
  const data = {
    active_task_id: '',
    active_sankalpa_id: '',
    domain_profile: 'general',
    sphota: { pasyanti_vision: '', madhyama_blueprint: {}, vaikhari_files: [] },
    tala_beat: 'intake'
  };
  writeJson(p, data);
  return { path: p, data };
}

function slugify(title) {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 48) || 'intent';
}

function nextTaskIndex(tasksDir) {
  let max = 0;
  if (!fs.existsSync(tasksDir)) return 1;
  for (const f of fs.readdirSync(tasksDir)) {
    const m = f.match(/(?:task|sankalpa)_(\d+)/i);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max + 1;
}

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`;
}

function appendMarkdown(filePath, block) {
  ensureDir(path.dirname(filePath));
  const prev = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  fs.writeFileSync(filePath, prev.trimEnd() + '\n\n' + block.trim() + '\n', 'utf8');
}

function cmdSpark(text) {
  const { dir, scope } = aumContext();
  focusLock('Capturing raw spark into ideas incubator');
  const id = `spark_${stamp()}`;
  const block = `### ${id}\n- **Captured**: ${new Date().toISOString()}\n- **Scope**: ${scope}\n- **Seed**: ${text}\n`;
  appendMarkdown(path.join(dir, 'ideas', 'sparks.md'), block);
  printReceipt(SPG.spark, 'PASHYANTĪ SEED CAPTURED', [
    ['Spark ID', id],
    ['Concept', `"${text.slice(0, 80)}${text.length > 80 ? '…' : ''}"`],
    ['Incubator', path.join(dir, 'ideas', 'sparks.md')],
    ['Status', 'Causal State (Phase 0)']
  ], SPG.seed);
}

function cmdConcern(text) {
  const { dir, scope } = aumContext();
  focusLock('Capturing concern / symptom for sequenced guidance');
  const id = `concern_${stamp()}`;
  const block = `### ${id}\n- **Captured**: ${new Date().toISOString()}\n- **Scope**: ${scope}\n- **Concern**: ${text}\n- **Guidance**: Hold action; clarify and sequence before remediation.\n`;
  appendMarkdown(path.join(dir, 'ideas', 'concerns.md'), block);
  printReceipt(SPG.concern, 'CONCERN CAPTURED', [
    ['Concern ID', id],
    ['Signal', `"${text.slice(0, 80)}${text.length > 80 ? '…' : ''}"`],
    ['Log', path.join(dir, 'ideas', 'concerns.md')],
    ['Next', 'aum resolve <title>  →  clarify  →  sequence']
  ], SPG.diagnostic);
}

function cmdResolve(title) {
  const { dir, scope } = aumContext();
  focusLock(`Opening resolve: ${title}`);
  const tasksDir = path.join(dir, 'tasks');
  const idx = nextTaskIndex(tasksDir);
  const id = `task_${String(idx).padStart(3, '0')}`;
  const slug = slugify(title);
  const fileName = `${id}_${slug}.md`;
  const filePath = path.join(tasksDir, fileName);

  // Pause other active logs (best-effort)
  for (const f of fs.readdirSync(tasksDir)) {
    if (!f.endsWith('.md') || f === 'template.md') continue;
    const fp = path.join(tasksDir, f);
    let content = fs.readFileSync(fp, 'utf8');
    if (content.includes('Lifecycle Status**: Active')) {
      content = content.replace('Lifecycle Status**: Active', 'Lifecycle Status**: Paused');
      fs.writeFileSync(fp, content, 'utf8');
    }
  }

  const templatePath = path.join(tasksDir, 'template.md');
  let body;
  if (fs.existsSync(templatePath)) {
    body = fs.readFileSync(templatePath, 'utf8')
      .replace(/\{sankalpa_id\}/g, id)
      .replace(/\{title\}/g, title)
      .replace(/\{parent_id\}/g, 'none')
      .replace(/\{date\}/g, new Date().toISOString().slice(0, 10))
      .replace(/\{spark\}/g, title);
  } else {
    body = `# Resolve: ${id}\n\n## Title\n${title}\n\n## Lifecycle Status\nActive\n\n## Beat\nintake\n`;
  }
  fs.writeFileSync(filePath, body, 'utf8');

  const { path: manifestPath, data } = loadManifest(dir);
  data.active_task_id = id;
  data.active_sankalpa_id = id;
  data.tala_beat = 'intake';
  data.sphota = data.sphota || {};
  data.sphota.pasyanti_vision = title;
  writeJson(manifestPath, data);

  printReceipt(SPG.resolve, 'SAṄKALPA RESOLVE INITIATED', [
    ['Resolve ID', id],
    ['Title', title],
    ['Log File', filePath],
    ['Beat', 'intake'],
    ['Scope', scope],
    ['Status', 'Focal Lock Engaged']
  ], SPG.intent);
}

function cmdBeat(args) {
  const { dir, scope } = aumContext();
  const { path: manifestPath, data } = loadManifest(dir);
  const config = readJson(path.join(dir, 'config.json'), {});
  const stages = config.tala_stages || ['intake', 'blueprint', 'verification', 'manifest'];
  const mode = (args[0] || 'next').toLowerCase();
  let next = data.tala_beat || 'intake';

  if (mode === 'next') {
    const i = stages.indexOf(next);
    next = stages[(i >= 0 ? i + 1 : 0) % stages.length];
  } else if (mode === 'set') {
    const target = (args[1] || '').toLowerCase();
    if (!stages.includes(target)) {
      printReceipt(SPG.fail, 'BEAT REJECTED', [
        ['Reason', `Unknown stage "${args[1]}"`],
        ['Allowed', stages.join(' · ')]
      ], SPG.warn);
      process.exit(1);
    }
    next = target;
  } else {
    printReceipt(SPG.fail, 'BEAT REJECTED', [
      ['Usage', 'aum beat next | aum beat set <stage>']
    ], SPG.warn);
    process.exit(1);
  }

  focusLock(`Advancing lifecycle beat → ${next}`);
  data.tala_beat = next;
  writeJson(manifestPath, data);

  const icons = {
    intake: SPG.intake,
    blueprint: SPG.blueprint,
    verification: SPG.verify,
    manifest: SPG.manifest
  };

  printReceipt(icons[next] || SPG.beat, 'TĀLA BEAT ADVANCED', [
    ['Beat', next],
    ['Stages', stages.join(' → ')],
    ['Active', data.active_task_id || '(none)'],
    ['Scope', scope]
  ], SPG.sequence);
}

function cmdDrone() {
  const { dir, scope } = aumContext();
  const { data } = loadManifest(dir);
  const config = readJson(path.join(dir, 'config.json'), {});
  const version = readJson(path.join(dir, 'VERSION.json'), {});
  printReceipt(SPG.drone, 'CONTEXT ANCHOR (DRONE)', [
    ['Scope', scope],
    ['Hub', dir],
    ['Beat', data.tala_beat || 'intake'],
    ['Active', data.active_task_id || data.active_sankalpa_id || '(none)'],
    ['Vision', (data.sphota && data.sphota.pasyanti_vision) || '(empty)'],
    ['Domain', data.domain_profile || config.active_domain || 'general'],
    ['Version', version.version || '(unset)'],
    ['Yamas', (config.yamas || []).length + ' restraints'],
    ['Niyamas', (config.niyamas || []).length + ' observances']
  ], SPG.aum);
}

function cmdDomain(name) {
  const { dir, scope } = aumContext();
  const allowed = ['general', 'development', 'diagnostic'];
  if (!allowed.includes(name)) {
    printReceipt(SPG.fail, 'DOMAIN REJECTED', [
      ['Allowed', allowed.join(' · ')]
    ], SPG.warn);
    process.exit(1);
  }
  const { path: manifestPath, data } = loadManifest(dir);
  data.domain_profile = name;
  writeJson(manifestPath, data);
  const cfgPath = path.join(dir, 'config.json');
  const cfg = readJson(cfgPath, {});
  cfg.active_domain = name;
  writeJson(cfgPath, cfg);
  printReceipt(SPG.guide, 'DOMAIN PROFILE SET', [
    ['Domain', name],
    ['Scope', scope]
  ], SPG.portal);
}

function main(argv) {
  const cleaned = argv.filter(a => a !== '--global');
  const [cmd, ...rest] = cleaned;
  const text = rest.join(' ').trim();
  switch ((cmd || '').toLowerCase()) {
    case 'spark':
      if (!text) throw new Error('Usage: aum spark <idea>');
      return cmdSpark(text);
    case 'concern':
      if (!text) throw new Error('Usage: aum concern <text>');
      return cmdConcern(text);
    case 'resolve':
      if (!text) throw new Error('Usage: aum resolve <title>');
      return cmdResolve(text);
    case 'beat':
      return cmdBeat(rest);
    case 'drone':
      return cmdDrone();
    case 'domain':
      if (!text) throw new Error('Usage: aum domain <general|development|diagnostic>');
      return cmdDomain(text.split(/\s+/)[0]);
    default:
      throw new Error(`Unknown intent command: ${cmd}`);
  }
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (err) {
    console.error(`${SPG.fail} ${err.message}`);
    process.exit(1);
  }
}

module.exports = {
  main,
  cmdSpark,
  cmdConcern,
  cmdResolve,
  cmdBeat,
  cmdDrone,
  cmdDomain
};
