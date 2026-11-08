# ॐ AUM — Māṇḍūkya Intent Architecture

**AUM is the Māṇḍūkya Upaniṣad made operational for AI agents.**

The syllable **A · U · M** plus the **silence (Amātra / Turīya)** is the system’s architectural foundation.  
**Clarify → Plan → Act** is the practical lens *through* those four quarters — it does not replace them.

Canonical code map: `scripts/lib/mandukya.js`  
Lineage: `docs/architecture/arb_000_mandukya_foundation.md`

---

## The four quarters

| Phoneme | State | Consciousness | Beat | CPA lens | Agent may |
|---|---|---|---|---|---|
| **A** (अ) | **Jāgrat** — Waking / Vaiśvānara | Gross, external encounter | `intake` | **Clarify** | Capture & interview only — **no code** |
| **U** (उ) | **Svapna** — Dreaming / Taijasa | Subtle, mental forms | `blueprint` | **Plan** | Design structures — **no code** |
| **M** (म्) | **Suṣupti** — Deep sleep / Prājña | Causal seed, undivided | `verification` | **Plan** (stillness) | Lock, audit, invariants — **no code** |
| **·** Amātra | **Turīya** — Silence / the Fourth | Witness; authorizes expression | `manifest` | **Act** | Write/run tools after Proceed / this beat |

**Turīya** is also the *continuous* witness: `ORCHESTRATOR.md`, Om agent, and `aum drone` — awareness that governs A, U, and M whether or not you are acting.

**Paśyantī** (visionary seed) precedes waking: `aum spark` / `aum concern` → `ideas/` before a resolve enters Jāgrat.

```text
         Turīya (Silence) — witness + Act at manifest
                    │
   Paśyantī ──► A Jāgrat ──► U Svapna ──► M Suṣupti ──► · Act
   (spark)      intake       blueprint    verification   manifest
                CLARIFY      PLAN         PLAN/still     ACT
```

---

## Commands by quarter

### A — Jāgrat (Clarify)
- `aum distill` — strip voice noise; meet the gross prompt cleanly  
- `aum spark` / `aum concern` — Paśyantī seeds  
- `aum resolve` — open Saṅkalpa; beat starts at `intake`  
- `aum drone` — hear the Context Anchor (Nāda drone under Turīya)

### U — Svapna (Plan)
- `aum beat next` / `aum beat set blueprint`  
- `aum anchor` — compact mental schema (<380 tokens)

### M — Suṣupti (Verify / causal seed)
- `aum beat set verification`  
- `aum lock` — hold action in the seed  
- `aum audit` — Hētvābhāsa scan before waking into code

### Amātra — Turīya → Act
- `aum beat set manifest` or human **Proceed**  
- `aum unlock` — release the seed into Vaikharī (source edits)  
- `aum verify` — build check after expression

Runtime: `aum install` · `sync` · `hook` · `wrap` (Yoga Saṃskāra memory).

---

## What tooling guarantees vs honor-system

| Guaranteed | Honor-system (agent under Turīya) |
|---|---|
| Quarters persisted as `tala_beat` in `manifest.json` | No code in A / U / M |
| CLI + SPG receipts name the phoneme/state | Read ORCHESTRATOR + active `tasks/` each session |
| Hooks inject Māṇḍūkya spine into agent rules | Respect `.intent_locked` and Proceed |
| Light `aum audit` | Stay inside the active Saṅkalpa |

AUM does not OS-sandbox editor tools; the Upaniṣad’s discipline is carried by hooked agents and the CLI state machine.

---

## Skills as quarters

| Skill | Quarter | Role |
|---|---|---|
| **Yogi** | A — Jāgrat | Waking guardian: clarify, block premature Vaikharī |
| **Om** | Turīya | Silent witness / nervous system: sequence all beats |
| **Developer** | Full AUM cycle | When changing AUM itself: walk quarters, then `aum sync` |

---

## One gate (Turīya authorization)

On a new or ambiguous request (still in A or entering from Paśyantī):

1. Echo distilled human intent.  
2. State planned approach + file impact (point toward U).  
3. Do not write code until beat is `manifest` **or** human says **Proceed**.

Vedic library, PHILOSOPHY, and ARB logs are first-class lineage — not optional decoration.
