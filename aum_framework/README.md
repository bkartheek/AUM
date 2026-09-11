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

- **🧠 Design Authority (Śabda)**: Banes raw code writing until an explicit resolve (*Saṅkalpa*) is initiated and an abstract plan is staged.
- **🛡️ Sandbox Sheaths (Kañcukas)**: Strict execution sandboxes restricting token consumption, directory scopes, external shell downloads, and unapproved API usage.
- **🧘 Yogi's Guidance**: Auto-injects unified instructions directly into the agent's context window via `.cursorrules`, `.clinerules`, and `CLAUDE.md`.
- **🔍 Logic Fallacy Auditor (Hētvābhāsa)**: Scans modified files before commits to block empty stubs, left-over console print statements, and out-of-scope edits.
- **🏥 Self-Healing Compiler (Prāyaścitta)**: Intercepts stack traces, automatically matches environment errors (e.g. missing Rolldown compiler bindings), resolves dependencies, and cleanly retries execution.
- **⏱️ Turn-Based Lifecycle (Tāla)**: Cycles agent attention cleanly through structured cognitive stages: **Intake** (vision clarification) ➔ **Blueprint** (abstract flows design) ➔ **Verification** (boundary audit) ➔ **Manifestation** (code execution).

---

## 🚀 Quick Start

### Global Intent Orchestrator (recommended)

Install once at the OS level — not tied to a single project:

```bash
# from aum_framework/ (or after npm install -g aum-framework)
node scripts/aum.js install          # creates ~/.aum + hooks agents
node scripts/aum.js sync             # after every framework change
node scripts/aum.js test-global      # smoke-test the hub

# Intent orchestration (use --global inside a repo that also has .aum/)
aum spark "raw idea"
aum concern "something feels wrong"
aum resolve "Name the goal"
aum beat next
aum drone
aum domain diagnostic   # or general | development
```

Hub layout: `~/.aum/` (`ORCHESTRATOR.md`, `manifest.json`, `tasks/`, `ideas/`, `domains/`, `runtime/`, `agents/skills/developer`).

Put `aum` on your PATH without sudo:

```bash
npm link --prefix "$HOME/.local"
export PATH="$HOME/.local/bin:$PATH"
```

### Project-local init (optional)
```bash
npx aum init
```
*(Local `.aum` overrides global for that workspace.)*

**Global Central Nervous System**
```bash
npx aum init --global   # alias of: aum install
npx aum hook            # refresh agent injections
```

---

## 📊 Knowledge Graph Architecture

AUM now includes a **lightweight knowledge‑graph backend** that continuously records every interaction without relying on LLM token usage.

### Components
- **Embedding Daemon (`scripts/aum_embed.js`)** – watches `~/.aum/logs/*.log`, creates 384‑dim MiniLM embeddings, stores vectors in a FAISS index and metadata in `~/.aum/embedding/meta.sqlite`.
- **Vector Store (FAISS)** – fast nearest‑neighbor search for semantic similarity.
- **Metadata SQLite DB** – keeps project, timestamp, model, intent, prompt, and response.
- **Graph Viewer (`scripts/graph_view.js`)** – an Express server that reads the SQLite DB and renders an interactive graph with `vis-network`.

### How it works
1. **Start the daemon** – `npm run embed:start` (runs in background).  It updates the FAISS index and DB in real‑time.
2. **Run a task** – `npx aum start` → `npx aum verify` etc.  Each step logs JSON entries; the daemon embeds them automatically.
3. **View the graph** – `npm run graph:view` opens `http://localhost:3000` showing nodes for each logged interaction, linked chronologically.
4. **Prompt enrichment** – Future AUM commands can query the vector store for the most similar past intent and prepend a concise context block (planned for next release).

### Usage Steps
```bash
# 1️⃣ Install dependencies (already done)
npm install

# 2️⃣ Launch the embedding daemon (runs in background)
npm run embed:start   # or: npx aum embed:start

# 3️⃣ Execute your normal AUM workflow
npx aum start
npx aum verify
npx aum audit
npx aum publish

# 4️⃣ Open the interactive graph UI
npm run graph:view   # opens http://localhost:3000
```

> The daemon writes a small `embed.log` in `~/.aum/embedding/` for troubleshooting.

| CLI Command | Cognitive Phase | Vedic Phase | Technical Action |
| :--- | :--- | :--- | :--- |
| `npx aum init` | **Setup** | *Sṛṣṭi* (Creation) | Copies Yogi sheaths, instructions, and templates. |
| `npx aum hook` | **Setup** | *Sūtra* (Thread) | Injects global routing rules into Cursor, Claude, Copilot, etc. |
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
- **Web Address**: The documentation portal is published at [bkartheek.github.io/AUM](https://bkartheek.github.com/AUM).

---

## 📜 License

AUM is open-source software licensed under the [MIT License](LICENSE).
