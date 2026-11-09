#!/usr/bin/env node
/**
 * aum_satsang.js
 * 
 * SĀKSHĪ (साक्षी) — The Ṛṣi Living Dialogue & Daily Satsāṅga Engine
 * Imparts secular Vedic philosophy, epistemology, and the 6 Darśanas
 * through tranquil, timeless Upaniṣadic inquiries and ambient reflections.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');
const { SPG, printReceipt } = require('./lib/receipts');

function getHomeAum() {
  const dir = path.join(os.homedir(), '.aum');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function getJournalPath() {
  return path.join(getHomeAum(), 'satsang_journal.json');
}

function loadCurriculum() {
  const customPath = path.join(getHomeAum(), 'darshana_curriculum.json');
  if (fs.existsSync(customPath)) {
    try { return JSON.parse(fs.readFileSync(customPath, 'utf8')); } catch (_) {}
  }
  const pkgPath = path.join(__dirname, '..', 'pkg_files', 'darshana_curriculum.json');
  if (fs.existsSync(pkgPath)) {
    try { return JSON.parse(fs.readFileSync(pkgPath, 'utf8')); } catch (_) {}
  }
  return [];
}

function loadJournal() {
  const p = getJournalPath();
  if (fs.existsSync(p)) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (_) {}
  }
  return {
    current_day: 1,
    entries: [],
    updated_at: new Date().toISOString()
  };
}

function saveJournal(data) {
  fs.writeFileSync(getJournalPath(), JSON.stringify(data, null, 2), 'utf8');
}

function getDailySeed() {
  const curriculum = loadCurriculum();
  if (!curriculum || curriculum.length === 0) return null;
  const journal = loadJournal();
  const dayIndex = ((journal.current_day - 1) % curriculum.length);
  return curriculum[dayIndex];
}

function renderTapovanaGreeting() {
  const seed = getDailySeed();
  if (!seed) return;

  console.log(`\n\x1b[33m─────────────────────────────────────────────────────────────────────────────\x1b[0m`);
  console.log(`\x1b[1m\x1b[38;5;208m🌲 ॐ SĀKSHĪ TAPOVANA (साक्षी तपोवन) — ĀRṢA SAMVĀDA\x1b[0m`);
  console.log(`\x1b[38;5;222mDay ${seed.day} • ${seed.theme} [${seed.source}]\x1b[0m`);
  console.log(`\x1b[33m─────────────────────────────────────────────────────────────────────────────\x1b[0m`);
  console.log(`\n\x1b[3m\x1b[38;5;214m"${seed.seed_sanskrit}"\x1b[0m`);
  console.log(`\x1b[38;5;250mTranslation: ${seed.translation}\x1b[0m\n`);
  console.log(`\x1b[1m\x1b[38;5;229mṚṣi Contemplation for the Journey:\x1b[0m`);
  console.log(`\x1b[38;5;223m${seed.inquiry}\x1b[0m\n`);
  console.log(`\x1b[33m─────────────────────────────────────────────────────────────────────────────\x1b[0m\n`);
}

function interactiveSatsang() {
  const seed = getDailySeed();
  if (!seed) {
    console.log("No curriculum entries found.");
    return;
  }

  renderTapovanaGreeting();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`\x1b[38;5;208mSākshī invites your reflection:\x1b[0m`);
  rl.question(`\x1b[38;5;222mWhat arises in your awareness when you contemplate this today? (Or press Enter to rest in silence):\x1b[0m\n> `, (answer) => {
    const journal = loadJournal();
    const entry = {
      day: seed.day,
      theme: seed.theme,
      timestamp: new Date().toISOString(),
      user_reflection: answer.trim() || "(Resting in silent awareness)"
    };
    journal.entries.push(entry);
    journal.current_day = (journal.current_day % 10) + 1; // cycle or advance
    journal.updated_at = new Date().toISOString();
    saveJournal(journal);

    console.log(`\n\x1b[1m\x1b[38;5;208mSākshī's Witnessing Blessing:\x1b[0m`);
    if (!answer.trim()) {
      console.log(`\x1b[38;5;223m"Silence (Mawna) is the primal language of the Ṛṣis. Hold this quiet center as you build today. Śāntiḥ Śāntiḥ Śāntiḥ."\x1b[0m\n`);
    } else {
      console.log(`\x1b[38;5;223m"Your reflection has been imprinted as a sacred Saṃskāra. Step forward into your work not as an anxious creator, but as the calm observer through whom Ṛta expresses itself."\x1b[0m\n`);
    }
    rl.close();
  });
}

module.exports = {
  getDailySeed,
  renderTapovanaGreeting,
  interactiveSatsang,
  loadCurriculum,
  loadJournal
};

if (require.main === module) {
  const arg = process.argv[2];
  if (arg === '--seed' || arg === 'seed') {
    renderTapovanaGreeting();
  } else {
    interactiveSatsang();
  }
}
