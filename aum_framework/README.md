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

### 1. Installation
Install the framework from NPM in your target project root:
```bash
npm install aum-framework
```

### 2. Initialization
Run the interactive initializer to copy safety rules, template guidelines, and setup variables:
```bash
npx aum init
```
*(The wizard will configure Yogi sheaths, `.cursorrules`, `.clinerules`, and append exclusions to `.gitignore`).*

### 3. Usage Lifecycle
AUM orchestrates your AI developer turns through quick CLI commands:

```bash
# Start a new task resolve (locks focus and prunes context)
npx aum start

# Run the self-healing build checks to verify environment stability
npx aum verify

# Audit changed files for logical fallacies before committing
npx aum audit

# Compile local log files and export portal index database
npx aum publish
```

---

## ⚙️ CLI Commands Reference

AUM CLI coordinates all cognitive and maintenance commands under Kashmir Shaivism's five cosmic lifecycle acts (*Pañcakṛtya*):

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
- **Web Address**: The documentation portal is published at [bkartheek.github.io/AUM](https://bkartheek.github.com/AUM).

---

## 📜 License

AUM is open-source software licensed under the [MIT License](LICENSE).
