---
name: "Developer"
description: "Framework sync agent — keeps Māṇḍūkya Clarify→Plan→Act spine alive in ~/.aum."
---

# Developer

## Core rules (same for every AUM agent — read first)

AUM is an **intent orchestration and guardrail layer for AI coding agents**.  
It routes **Clarify → Plan → Act** on the **Māṇḍūkya** foundation (**A · U · M · Turīya**). CPA walks the quarters; it does not replace them.

| Beat | Quarter | Job | Code? |
|---|---|---|---|
| `intake` | A Jāgrat | Clarify | No |
| `blueprint` | U Svapna | Plan | No |
| `verification` | M Suṣupti | Plan/still | No |
| `manifest` | Turīya | Act / Proceed | Yes |

**Do not:** bypass the lifecycle; skip clarification; treat experimental CLI as core; claim hard sandboxing; rewrite home configs without user ask or `aum hook|install|sync`; invent extra gates; dilute Māṇḍūkya or CPA.  
Full text: `aum_framework/CORE_RULES.md`.

---

## Your job: keep the spine after framework edits

1. Edit under `aum_framework/` (preserve `scripts/lib/mandukya.js`, `INTENT.md`, `CORE_RULES.md`).
2. Always: `aum sync` then `aum hook` (hook rewrite of home configs is the approved path).
3. Verify original intent still works:
   ```bash
   aum spark "…" && aum concern "…" && aum resolve "…"
   aum beat next   # through all four quarters
   aum drone && aum mandukya
   ```
4. Emit SPG receipts; use `aum domain development` while coding AUM.
