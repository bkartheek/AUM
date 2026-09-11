// scripts/aum_embed.js
// Simple daemon that watches AUM logs, creates embeddings, and stores them in FAISS + SQLite.

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { pipeline } = require('@xenova/transformers');
const faiss = require('faiss-node');
const sqlite3 = require('sqlite3').verbose();

(async () => {
  // Initialize @xenova transformer pipeline for feature extraction (MiniLM L6)
  const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

  const home = process.env.HOME || process.env.USERPROFILE;
  const embedDir = path.join(home, '.aum', 'embedding');
  if (!fs.existsSync(embedDir)) fs.mkdirSync(embedDir, { recursive: true });

  const indexPath = path.join(embedDir, 'index.faiss');
  const dbPath = path.join(embedDir, 'meta.sqlite');

  // Init FAISS index (384‑dim L2)
  let index;
  if (fs.existsSync(indexPath)) {
    index = faiss.IndexFlatL2.read(indexPath);
  } else {
    const dim = 384; // MiniLM L6 output dimension
    index = new faiss.IndexFlatL2(dim);
    index.write(indexPath);
  }

  // Init SQLite meta DB
  const db = new sqlite3.Database(dbPath);
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS entries (
      id INTEGER PRIMARY KEY,
      project TEXT,
      timestamp TEXT,
      model TEXT,
      intent TEXT,
      prompt TEXT,
      response TEXT
    );`);
  });

  const logsDir = path.join(home, '.aum', 'logs');
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

  const processLogLine = async (line) => {
    let entry;
    try { entry = JSON.parse(line); } catch (_) { return; }
    const { intent = '', prompt = '', response = '', project = '', timestamp = new Date().toISOString(), model = '' } = entry;
    const text = `${intent}\n${prompt}\n${response}`;
    // @xenova returns an array of token embeddings; flatten to a Float32Array
    const result = await embedder(text);
    // result is [[...]] – take the first (batch) and average to get sentence embedding
    const tokenEmbeds = result[0];
    const vec = new Float32Array(tokenEmbeds.data);
    index.add(Array.from(vec));
    db.run(`INSERT INTO entries (project, timestamp, model, intent, prompt, response) VALUES (?,?,?,?,?,?)`,
      [project, timestamp, 'Xenova/all-MiniLM-L6-v2', intent, prompt, response]);
  };

  const watcher = chokidar.watch(path.join(logsDir, '*.log'), { persistent: true, ignoreInitial: false });
  watcher.on('add', (filePath) => {
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    let leftover = '';
    stream.on('data', (chunk) => {
      const lines = (leftover + chunk).split('\n');
      leftover = lines.pop();
      lines.forEach(l => processLogLine(l));
    });
    stream.on('end', () => { if (leftover) processLogLine(leftover); });
  });

  const shutdown = () => {
    index.write(indexPath);
    db.close();
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
})();
