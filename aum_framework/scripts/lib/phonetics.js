/**
 * phonetics.js
 * Acoustic Phonetic & Soundex Algorithm for Voice-to-Text Noise Inversion
 * 
 * Maps phonetically garbled spoken words (e.g., 'chewed' -> 'achieved', 'barish' -> 'parse')
 * to real codebase symbols based on acoustic sound representations.
 */

// Soundex mapping
function soundex(str) {
  if (!str || typeof str !== 'string') return '';
  const s = str.toUpperCase().replace(/[^A-Z]/g, '');
  if (!s.length) return '';

  const firstLetter = s[0];
  const map = {
    B: 1, F: 1, P: 1, V: 1,
    C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
    D: 3, T: 3,
    L: 4,
    M: 5, N: 5,
    R: 6
  };

  let code = firstLetter;
  let prev = map[firstLetter] || 0;

  for (let i = 1; i < s.length && code.length < 4; i++) {
    const curr = map[s[i]] || 0;
    if (curr > 0 && curr !== prev) {
      code += curr;
    }
    prev = curr;
  }

  return (code + '000').slice(0, 4);
}

// Simplified Metaphone key generator (acoustic English phonetics)
function metaphone(word) {
  if (!word || typeof word !== 'string') return '';
  let str = word.toUpperCase().replace(/[^A-Z]/g, '');
  if (!str.length) return '';

  // Drop initial silent letters
  if (['KN', 'GN', 'PN', 'AE', 'WR'].some(prefix => str.startsWith(prefix))) {
    str = str.slice(1);
  } else if (str.startsWith('X')) {
    str = 'S' + str.slice(1);
  } else if (str.startsWith('WH')) {
    str = 'W' + str.slice(2);
  }

  let meta = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const prev = str[i - 1] || '';
    const next = str[i + 1] || '';

    if (ch === 'B' && prev === 'M' && i === str.length - 1) continue; // dumb -> DUM
    if (ch === 'C') {
      if (next === 'H') { meta += 'X'; i++; continue; }
      if (['I', 'E', 'Y'].includes(next)) { meta += 'S'; continue; }
      meta += 'K';
      continue;
    }
    if (ch === 'D') {
      if (next === 'G' && ['E', 'I', 'Y'].includes(str[i + 2] || '')) { meta += 'J'; i += 2; continue; }
      meta += 'T';
      continue;
    }
    if (ch === 'G') {
      if (next === 'H') { i++; continue; }
      if (next === 'N' && i === str.length - 2) continue;
      if (['I', 'E', 'Y'].includes(next)) { meta += 'J'; continue; }
      meta += 'K';
      continue;
    }
    if (ch === 'H') {
      if (['A', 'E', 'I', 'O', 'U'].includes(next) && !['C', 'S', 'P', 'T', 'G'].includes(prev)) {
        meta += 'H';
      }
      continue;
    }
    if (ch === 'P' && next === 'H') { meta += 'F'; i++; continue; }
    if (ch === 'Q') { meta += 'K'; continue; }
    if (ch === 'S') {
      if (next === 'H') { meta += 'X'; i++; continue; }
      if (next === 'I' && ['O', 'A'].includes(str[i + 2] || '')) { meta += 'X'; continue; }
      meta += 'S';
      continue;
    }
    if (ch === 'T') {
      if (next === 'I' && ['A', 'O'].includes(str[i + 2] || '')) { meta += 'X'; continue; }
      if (next === 'H') { meta += '0'; i++; continue; }
      meta += 'T';
      continue;
    }
    if (ch === 'V') { meta += 'F'; continue; }
    if (ch === 'W' || ch === 'Y') {
      if (['A', 'E', 'I', 'O', 'U'].includes(next)) meta += ch;
      continue;
    }
    if (ch === 'X') { meta += 'KS'; continue; }
    if (ch === 'Z') { meta += 'S'; continue; }

    if (['F', 'J', 'K', 'L', 'M', 'N', 'R'].includes(ch)) {
      meta += ch;
    } else if (i === 0 && ['A', 'E', 'I', 'O', 'U'].includes(ch)) {
      meta += ch;
    }
  }

  return meta;
}

// Common speech-to-text phonetic voice dictation substitutions
const KNOWN_VOICE_SLIPS = {
  'chewed': 'achieved',
  'barish': 'parse',
  'sink': 'sync',
  'routs': 'routes',
  'sequel': 'sql',
  'pie': 'py'
};

// Calculate phonetic similarity score (0.0 to 1.0)
function phoneticSimilarity(w1, w2) {
  const low1 = w1.toLowerCase();
  const low2 = w2.toLowerCase();
  if (low1 === low2) return 1.0;

  if (KNOWN_VOICE_SLIPS[low1] === low2 || KNOWN_VOICE_SLIPS[low2] === low1) {
    return 0.98;
  }

  const m1 = metaphone(w1);
  const m2 = metaphone(w2);
  if (m1 && m2 && m1 === m2) return 0.95;

  const s1 = soundex(w1);
  const s2 = soundex(w2);
  if (s1 && s2 && s1 === s2) return 0.85;

  return 0.0;
}

module.exports = {
  soundex,
  metaphone,
  phoneticSimilarity
};
