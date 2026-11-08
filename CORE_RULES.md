# AUM Core Rules (read first)

## What this project is
AUM is an **intent orchestration and guardrail layer for AI coding agents**.  
It routes work through **Clarify → Plan → Act**.  
Architectural foundation: the **Māṇḍūkya Upaniṣad** — **A · U · M · Silence (Turīya)**.  
Clarify→Plan→Act is how you walk those quarters; it does **not** replace them.

| Phoneme | State | Beat | You do | Code? |
|---|---|---|---|---|
| **A** | Jāgrat (waking) | `intake` | **Clarify** — capture intent, ask questions | No |
| **U** | Svapna (dreaming) | `blueprint` | **Plan** — approach + file impact | No |
| **M** | Suṣupti (deep sleep) | `verification` | **Plan/still** — lock, audit, invariants | No |
| **·** | Turīya (silence) | `manifest` | **Act** — edit/run tools | Yes, or after **Proceed** |

Capture: `spark` · `concern` · `resolve`. Stage: `beat`. Anchor: `drone`. Map: `mandukya` / `INTENT.md`.

## Do
1. Read `manifest.json` (local `.aum/` overrides `~/.aum/`) + active `tasks/` log + `ORCHESTRATOR.md` / `INTENT.md` before acting.
2. On a new or ambiguous request: echo distilled intent → list planned files → ask clarifying questions → await **Proceed** or beat `manifest`.
3. Prefer CLI: `aum spark|concern|resolve|beat|drone|anchor|lock|unlock|mandukya`.
4. Honor injected hooks; emit a short SPG receipt on state changes.
5. When changing AUM itself: edit → `aum sync` → `aum hook` → re-test the spine.

## Do not
1. **Do not** bypass the lifecycle (`intake` → `blueprint` → `verification` → `manifest`) or jump to code in A/U/M.
2. **Do not** skip clarification when the prompt is fuzzy, wrong, or incomplete.
3. **Do not** treat experimental/demo commands (`heal`, `compile`, `assert`, `recognize`, `evolve`, `prune`, `start`, `publish`, …) as the core workflow.
4. **Do not** claim hard OS/tool sandbox enforcement — beat gating is **honor-system** plus CLI state and hooks; AUM does not sandbox Cursor/Claude tools.
5. **Do not** rewrite home-directory agent configs (`~/.cursorrules`, `~/CLAUDE.md`, etc.) except via explicit user request or `aum hook` / `aum install` / `aum sync` with informed consent.
6. **Do not** invent parallel approval gates beyond: beat `manifest` **or** human **Proceed**.
7. **Do not** dilute Māṇḍūkya into “optional flavor” or replace it with Clarify→Plan→Act alone — keep both: foundation + walk.

State names: prefer `manifest.json` + `tasks/`. Legacy `sphota.json` + `sankalpas/` are the same store.
