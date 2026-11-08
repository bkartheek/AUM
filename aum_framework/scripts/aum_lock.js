#!/usr/bin/env node
/**
 * aum_lock.js
 * SPHOTA OS — Deterministic Mechanical Intent Lock
 * 
 * Physically prevents premature code writes during Prompt #1 until the human approves design.
 * Creates/checks `.aum/.intent_locked`.
 */

const fs = require('fs');
const path = require('path');
const { SPG, printReceipt } = require('./lib/receipts');

function getLockFilePath() {
  const localAum = path.join(process.cwd(), '.aum');
  if (fs.existsSync(localAum)) return path.join(localAum, '.intent_locked');
  const home = process.env.HOME || process.env.USERPROFILE;
  return path.join(home, '.aum', '.intent_locked');
}

function lockIntent(reason = "Awaiting Prompt #1 design alignment") {
  const lockPath = getLockFilePath();
  const dir = path.dirname(lockPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const payload = {
    locked_at: new Date().toISOString(),
    reason,
    pid: process.pid
  };
  fs.writeFileSync(lockPath, JSON.stringify(payload, null, 2), 'utf8');
  return lockPath;
}

function unlockIntent() {
  const lockPath = getLockFilePath();
  if (fs.existsSync(lockPath)) {
    fs.unlinkSync(lockPath);
    return true;
  }
  return false;
}

function isIntentLocked() {
  return fs.existsSync(getLockFilePath());
}

function checkLockOrExit(action = "file modification") {
  if (isIntentLocked()) {
    const lock = JSON.parse(fs.readFileSync(getLockFilePath(), 'utf8'));
    console.error(`\n${SPG.fail} [ AUM MECHANICAL INTENT LOCK ACTIVE ]`);
    console.error(`Action Blocked: ${action}`);
    console.error(`Reason        : ${lock.reason}`);
    console.error(`Locked At     : ${lock.locked_at}`);
    console.error(`\nTo proceed: Align on design in chat, then run 'aum unlock' or reply 'Proceed'.\n`);
    process.exit(1);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const cmd = (args[0] || '').toLowerCase();
  if (cmd === 'lock') {
    lockIntent(args.slice(1).join(' ') || undefined);
    printReceipt(SPG.lock, 'MECHANICAL INTENT LOCK ENGAGED', [
      ['State', 'LOCKED'],
      ['Enforcement', 'Code writes blocked until design approval'],
      ['Lockfile', getLockFilePath()]
    ], SPG.warn);
  } else if (cmd === 'unlock') {
    const unlocked = unlockIntent();
    printReceipt(SPG.success, 'MECHANICAL INTENT LOCK RELEASED', [
      ['State', unlocked ? 'UNLOCKED' : 'WAS NOT LOCKED'],
      ['Execution', 'Code manifestation permitted']
    ], SPG.agent);
  } else {
    const locked = isIntentLocked();
    printReceipt(locked ? SPG.lock : SPG.success, 'INTENT LOCK STATUS', [
      ['State', locked ? 'LOCKED' : 'OPEN / UNLOCKED'],
      ['Target', getLockFilePath()]
    ], locked ? SPG.warn : SPG.agent);
  }
}

module.exports = {
  lockIntent,
  unlockIntent,
  isIntentLocked,
  checkLockOrExit,
  getLockFilePath
};

