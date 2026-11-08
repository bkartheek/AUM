/**
 * Māṇḍūkya Upaniṣad — canonical architectural foundation of AUM.
 *
 * The syllable AUM is everything: A · U · M · and the silence (Amātra / Turīya).
 * Clarify → Plan → Act is expressed *through* these four quarters — not instead of them.
 *
 * Lineage: docs/architecture/arb_000_mandukya_foundation.md
 */

const QUARTERS = Object.freeze({
  intake: Object.freeze({
    beat: 'intake',
    phoneme: 'A',
    phoneme_sanskrit: 'अ',
    state: 'jāgrat',
    state_en: 'waking',
    deity_aspect: 'vaiśvānara',
    title: 'Jāgrat — Waking (A-kāra)',
    cpa: 'clarify',
    permission: 'clarify-only',
    may_write_code: false,
    description:
      'External encounter with the user’s gross prompt. Capture, interview, validate intent. No code.',
    commands: ['spark', 'concern', 'distill', 'resolve', 'drone']
  }),
  blueprint: Object.freeze({
    beat: 'blueprint',
    phoneme: 'U',
    phoneme_sanskrit: 'उ',
    state: 'svapna',
    state_en: 'dreaming',
    deity_aspect: 'taijasa',
    title: 'Svapna — Dreaming (U-kāra)',
    cpa: 'plan',
    permission: 'design-only',
    may_write_code: false,
    description:
      'Subtle internal construction. Blueprint structures and sequences without touching source files.',
    commands: ['beat', 'anchor', 'drone']
  }),
  verification: Object.freeze({
    beat: 'verification',
    phoneme: 'M',
    phoneme_sanskrit: 'म्',
    state: 'suṣupti',
    state_en: 'deep sleep',
    deity_aspect: 'prājña',
    title: 'Suṣupti — Deep Sleep (M-kāra)',
    cpa: 'plan',
    permission: 'verify-only',
    may_write_code: false,
    description:
      'Causal stillness. Invariants, boundaries, audits, and the seed of action before manifestation.',
    commands: ['lock', 'audit', 'beat', 'drone']
  }),
  manifest: Object.freeze({
    beat: 'manifest',
    phoneme: '·',
    phoneme_sanskrit: 'अमात्रा',
    state: 'turīya',
    state_en: 'silence / the fourth',
    deity_aspect: 'turīya',
    title: 'Turīya — Silence (Amātra) → Act',
    cpa: 'act',
    permission: 'act',
    may_write_code: true,
    description:
      'The fourth witnesses all states. Act (Vaikharī) is allowed only from this silence — beat=manifest or Proceed.',
    commands: ['unlock', 'verify', 'audit', 'drone']
  })
});

/** Turīya as continuous witness (Om / ORCHESTRATOR), not only the manifest beat. */
const TURIYA_WITNESS = Object.freeze({
  role: 'witness',
  title: 'Turīya — the silent witness of A · U · M',
  description:
    'ORCHESTRATOR.md, INTENT.md, Om agent, and aum drone: pure awareness that governs every quarter.',
  skills: ['om']
});

/** Pre-syllable spark chamber (Paśyantī) before waking intake. */
const PASHYANTI = Object.freeze({
  title: 'Paśyantī — visionary seed',
  description: 'Raw ideas before they enter Jāgrat intake.',
  commands: ['spark', 'concern'],
  path_hint: 'ideas/sparks.md · ideas/concerns.md'
});

const STAGE_ORDER = Object.freeze(['intake', 'blueprint', 'verification', 'manifest']);

function quarterForBeat(beat) {
  const key = String(beat || 'intake').toLowerCase();
  return QUARTERS[key] || QUARTERS.intake;
}

function mayWriteCode(beat) {
  return !!quarterForBeat(beat).may_write_code;
}

function receiptRows(beat) {
  const q = quarterForBeat(beat);
  return [
    ['Phoneme', `${q.phoneme} (${q.phoneme_sanskrit})`],
    ['State', `${q.state} / ${q.state_en}`],
    ['Aspect', q.deity_aspect],
    ['Beat', q.beat],
    ['CPA lens', q.cpa],
    ['Code?', q.may_write_code ? 'allowed' : 'forbidden']
  ];
}

function diagram() {
  return [
    'Māṇḍūkya Quarters of AUM',
    '════════════════════════════════════════',
    '  Turīya (Amātra / Silence) — witness + Act when beat=manifest',
    '           │ governs',
    '  A Jāgrat (intake/clarify) → U Svapna (blueprint/plan)',
    '           → M Suṣupti (verification) → · Turīya/Act (manifest)',
    '  Paśyantī sparks feed A (waking intake)',
    '════════════════════════════════════════'
  ].join('\n');
}

function summarizeAll() {
  return STAGE_ORDER.map((b) => {
    const q = QUARTERS[b];
    return `${q.phoneme} ${q.beat} = ${q.state_en} (${q.cpa})`;
  }).join(' · ');
}

module.exports = {
  QUARTERS,
  TURIYA_WITNESS,
  PASHYANTI,
  STAGE_ORDER,
  quarterForBeat,
  mayWriteCode,
  receiptRows,
  diagram,
  summarizeAll
};
