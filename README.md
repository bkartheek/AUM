# ॐ AUM: Intent Orchestration for AI Agents

<p align="center">
  <a href="https://npmjs.org/package/aum-framework"><img src="https://img.shields.io/npm/v/aum-framework.svg" alt="npm version"></a>
  <a href="https://npmjs.org/package/aum-framework"><img src="https://img.shields.io/npm/dm/aum-framework.svg" alt="npm downloads"></a>
  <a href="https://github.com/bkartheek/AUM/blob/main/LICENSE"><img src="https://img.shields.io/github/license/bkartheek/AUM" alt="license"></a>
</p>

**AUM** routes work with AI coding agents through one spine: **Clarify → Plan → Act**.

It is an **intent orchestration layer** (CLI + hooks + agent instructions), not an OS sandbox and not a substitute for your editor’s permissions.

Canonical short doc: [`aum_framework/INTENT.md`](aum_framework/INTENT.md).

---

## What AUM is for

1. **Clarify** — Capture fuzzy or wrong prompts (`spark` / `concern` / `resolve` / `distill`); ask questions; **no code yet**.
2. **Plan** — Advance beats (`blueprint` → `verification`); lock design alignment; keep a compact context anchor.
3. **Act** — Edit and build only when the beat is `manifest` or the human says **Proceed**.

Optional Vedic / musical metaphors live under `vedic_library/` and PHILOSOPHY docs — useful depth, not the product headline.

---

## What AUM guarantees vs honor-system

| Guaranteed by tooling | Honor-system (agent must comply) |
|---|---|
| State under `~/.aum` or local `.aum` | No premature code writes |
| CLI for spark / resolve / beat / drone / lock | Reading orchestrator + manifest each session |
| Hook text injected into agent rule files | Respecting `.intent_locked` and Proceed |
| Light `aum audit` on git diffs | Staying inside the active resolve |

AUM does **not** intercept or sandbox Cursor / Claude / Copilot tool calls.

---

## Quick start

```bash
git clone https://github.com/bkartheek/AUM.git
cd AUM/aum_framework
node scripts/aum.js install    # ~/.aum hub + agent hooks
node scripts/aum.js drone      # show active intent / beat
```

Or: `npm install -g aum-framework` then `aum install`.

---

## Core CLI (orchestration spine)

```bash
# Clarify
aum distill "noisy voice prompt…"
aum spark "raw idea"
aum concern "something feels wrong"
aum resolve "Name the goal"          # starts at intake
aum drone

# Plan
aum beat next                        # or: aum beat set blueprint
aum lock "Awaiting design alignment"
aum unlock                           # after Proceed
aum anchor                           # <380 token context card

# Act (only on manifest / Proceed)
aum audit
aum verify
```

Runtime: `aum sync` · `aum hook` · `aum wrap "…"`.  
Experimental demos (`heal`, `compile`, `assert`, …) stay available but are labeled non-core in `aum help`.

Lifecycle beats: `intake` → `blueprint` → `verification` → `manifest`.

---

## Agent skills (roles on the spine)

| Skill | Stage | Job |
|---|---|---|
| **Yogi** | Clarify | Guardian at intake; stop ambiguous leaps to code |
| **Om** | Plan | Keep beats / active resolve sequenced |
| **Developer** | Meta | When changing AUM itself: edit → `aum sync` → test |

---

## Docs portal

```bash
npx aum publish
cd docs_portal && npm run dev
```

Published at [bkartheek.github.io/AUM](https://bkartheek.github.io/AUM/).

---

## License

MIT — see [LICENSE](LICENSE).
