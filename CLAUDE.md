# CLAUDE.md — AUM (read first)

## What this project is
AUM is an **intent orchestration and guardrail layer for AI coding agents**.  
Routes work **Clarify → Plan → Act**.  
Foundation: **Māṇḍūkya Upaniṣad** — **A · U · M · Silence (Turīya)**.  
CPA walks the quarters; it does **not** replace them.

| Beat | Quarter | Job | Code? |
|---|---|---|---|
| `intake` | A Jāgrat | Clarify — spark/concern/resolve | No |
| `blueprint` | U Svapna | Plan — design + file impact | No |
| `verification` | M Suṣupti | Plan/still — lock, audit | No |
| `manifest` | Turīya | Act (or after **Proceed**) | Yes |

Canonical: `aum_framework/CORE_RULES.md` · `aum_framework/INTENT.md` · `scripts/lib/mandukya.js`

## Do
1. Read `manifest.json` (local `.aum/` overrides `~/.aum/`) + active `tasks/` + orchestrator docs before acting.
2. New/ambiguous request → distilled intent → file list → clarify → await Proceed / beat `manifest`.
3. Honor triggers: `AUM: SPARK|CONCERN|RESOLVE|BEAT|DRONE` or `aum` CLI; emit SPG receipts.
4. Framework edits → `aum sync` → `aum hook` → verify spine.

## Do not
1. Do not bypass `intake` → `blueprint` → `verification` → `manifest`.
2. Do not skip clarification.
3. Do not treat experimental commands (`heal`, `compile`, `assert`, `recognize`, `evolve`, `prune`, `start`, `publish`, …) as core.
4. Do not claim OS/tool sandbox enforcement that does not exist (honor-system + CLI/hooks only).
5. Do not rewrite `~/` agent configs except via explicit user ask or `aum hook|install|sync`.
6. Do not add parallel gates beyond `manifest` / **Proceed**.
7. Do not dilute Māṇḍūkya or replace it with CPA-only language (keep both).

Legacy `sphota.json` / `sankalpas/` = `manifest.json` / `tasks/`.
