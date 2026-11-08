# ॐ AUM: Intent-Driven Cognitive Guardrail Framework

<p align="center">
  <a href="https://npmjs.org/package/aum-framework"><img src="https://img.shields.io/npm/v/aum-framework.svg" alt="npm version"></a>
  <a href="https://npmjs.org/package/aum-framework"><img src="https://img.shields.io/npm/dm/aum-framework.svg" alt="npm downloads"></a>
  <a href="https://github.com/bkartheek/AUM/blob/main/LICENSE"><img src="https://img.shields.io/github/license/bkartheek/AUM" alt="license"></a>
  <a href="https://github.com/bkartheek/AUM/pulls"><img src="https://img.shields.io/github/issues-pr/bkartheek/AUM" alt="GitHub Pull Requests"></a>
</p>

```text
  █████╗ ██╗   ██╗███╗   ███╗    ███████╗███╗   ██╗ ██████╗██╗███╗   ██╗███████╗
  ██╔══██╗██║   ██║████╗ ████║    ██╔════╝████╗  ██║██╔════╝██║████╗  ██║██╔════╝
  ███████║██║   ██║██╔████╔██║    █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  
  ██╔══██║██║   ██║██║╚██╔╝██║    ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  
  ██║  ██║╚██████╔╝██║ ╚═╝ ██║    ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗
  ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝
                               A U M   E N G I N E
```

**AUM** is an ultra-lightweight, technology-agnostic **Intent-Driven Cognitive Guardrail Framework** for AI-assisted pair programming. It acts as an active cognitive firewall between you and your AI agents (Cursor, Cline, Roo Code, Claude Code, GitHub Copilot) to enforce design authority, prevent code regressions (*Hētvābhāsa*), audit modifications, and auto-heal environment compilation locks (*Prāyaścitta*).

---

## ⚡ Features

- **🌐 SPHOTA OS Universal Multi-Intent Engine**: Disentangles Macro-Goals, Micro-Focus, Guard Invariants, and Parked Ideas across Git branches.
- **🎙️ Sub-15ms Speech & Voice Distiller**: Native Levenshtein symbol grounding + Mīmāṃsā Ṣaḍ-Liṅga heuristic stripping to eliminate voice-to-text noise in < 15ms.
- **🔒 Deterministic Mechanical Lock (`aum lock / unlock`)**: Prevents agents from prematurely writing code on Prompt #1 without design alignment.
- **🧘 Yoga Saṃskāras Overnight Memory (`aum wrap / resume`)**: Preserves session state so morning boots in Cursor, Copilot, or Claude recall previous work instantly.
- **⚡ Strict Two-Tier Token Economy**: Guarantees context injections stay strictly bounded between **180 and 380 tokens**.
- **🧠 Design Authority (Śabda)**: Banes raw code writing until an explicit resolve (*Saṅkalpa*) is initiated and an abstract plan is staged.
- **🛡️ Sandbox Sheaths (Kañcukas)**: Strict execution sandboxes restricting token consumption, directory scopes, external shell downloads, and unapproved API usage.
- **🔍 Logic Fallacy Auditor (Hētvābhāsa)**: Scans modified files before commits to block empty stubs, left-over console print statements, and out-of-scope edits.
- **🏥 Self-Healing Compiler (Prāyaścitta)**: Intercepts stack traces, automatically matches environment errors (e.g. missing Rolldown compiler bindings), resolves dependencies, and cleanly retries execution.

---

## 🚀 Quick Start & Installation

### Option A: Install via Universal Tarball (Any Machine via NPM/NVM)
Anyone on macOS, Linux, or Windows can install globally or run directly without cloning:

```bash
# Global installation via GitHub release artifact
npm install -g https://github.com/bkartheek/AUM/tarball/v1.3.0

# Or run instantly via NPX (zero permanent install)
npx https://github.com/bkartheek/AUM/tarball/v1.3.0
```

### Option B: Install from NPM Registry (when published)
```bash
npm install -g aum-framework
# or project-local
npm install aum-framework
```

### Option C: Install from Source
```bash
git clone https://github.com/bkartheek/AUM.git
cd AUM/aum_framework
node scripts/aum.js install
```

---

## ⚡ SPHOTA OS CLI Commands

AUM coordinates both Kashmir Shaivism Pañcakṛtya cognitive phases and the SPHOTA OS multi-intent engine:

```bash
# Voice & Intent Distillation (< 15ms local resolution)
aum distill "Fix the login route and make sure we don't break sqlite and later check redis"

# Two-tier context anchor synthesis (< 380 tokens)
aum anchor

# Physical mechanical write lock for Prompt #1 design alignment
aum lock "Awaiting design review"
aum unlock

# End of day session snapshot (Yoga Saṃskāra) for instant morning recall
aum wrap "Completed webhook handler; tomorrow wire up DB idempotency"

# View and manage multi-intent DAG
aum graph
```

### Cognitive Lifecycle Reference

| CLI Command | Cognitive Phase | Vedic Phase | Technical Action |
| :--- | :--- | :--- | :--- |
| `npx aum init` | **Setup** | *Sṛṣṭi* (Creation) | Copies Yogi sheaths, instructions, and templates. |
| `npx aum start` | **Intake** | *Sṛṣṭi* (Intake) | Initiates a new Saṅkalpa resolve and prunes context logs. |
| `npx aum verify` | **Build** | *Sthiti* (Preservation) | Runs compiler builds with automatic environment self-healing. |
| `npx aum audit` | **Audit** | *Saṃhāra* (Cleanup) | Audits staged changes for comments, stubs, and logic fallacies. |
| `npx aum publish` | **Compile** | *Tirobhāva* (Concealment) | Compiles framework markdown files into docs portal database. |
| `npx aum prune` | **Clean** | *Prāṇāyāma* (Breath) | Prunes raw build logs from context window to prevent token decay. |
| `npx aum evolve` | **Incubate** | *Bhāvanā* (Incubate) | Synthesizes local memory logs into system prompt rules. |
| `npx aum compile` | **Synthesize** | *Pāṇini* (Grammar) | Generates boilerplates and classes from semantic intent roots. |
| `npx aum assert` | **Test** | *Catuṣkoṭi* (Tetralemma) | Runs tetralemma assertions testing on async reactive streams. |
| `npx aum recognize`| **Audit** | *Pratyabhijñā* (Identify) | Diagnoses platform types and directory write access boundaries. |

---

## 🎨 Cognitive Lifecycle (The Tāla Rhythm)

AI agents must transition through AUM's state machine to ensure design safety:

```text
       [ Intake Phase ]      ➔     [ Blueprint Phase ]     ➔     [ Verification ]     ➔     [ Manifest Phase ]
      (Tāla Beat: INTAKE)         (Tāla Beat: BLUEPRINT)        (Tāla Beat: VERIFY)        (Tāla Beat: MANIFEST)
      Interviews developer;        Maps abstract flows;          Audits boundaries;         Executes edits, runs
      clarifies task intent.       decouples components.         outlines test plans.       build check, commits.
```

- **Intake**: Code modifications are strictly blocked. The agent must interview the developer using the Waking Intake Q&A worksheet.
- **Blueprinting**: Decouples interfaces from implementation logic.
- **Verification**: Assures that changes comply with system constraints and specifies test commands.
- **Manifestation**: Changes are applied, compiled, audited for logic violations, and committed cleanly.

---

## 📖 Portal Documentation

AUM hosts a premium **React/Vite single page documentation portal** compiled from the actual ADR (Architecture Decision Record) logs. 

- **Local Reading**: Compile the documentation portal locally and open it in your browser:
  ```bash
  npx aum publish
  cd docs_portal && npm run dev
  ```
- **Web Address**: The documentation portal is published at [bkartheek.github.io/AUM](https://bkartheek.github.io/AUM/).

---

## 📜 License

AUM is open-source software licensed under the [MIT License](LICENSE).
