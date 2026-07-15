# ॐ AUM: Intent-Driven Cognitive Guardrail Framework

[![GitHub License](https://img.shields.io/github/license/bkartheek/AUM)](LICENSE)
[![GitHub PRs](https://img.shields.io/github/issues-pr/bkartheek/AUM)](https://github.com/bkartheek/AUM/pulls)
[![Node Version](https://img.shields.io/badge/node-%3E%3D22.0.0-green.svg)](https://nodejs.org/)

**AUM** is a cognitive guardrail framework designed for pair-programming with AI agents. It establishes strict safety boundaries (*Kañcukas*), automates session checks (*Pratyabhijñā*), and audits codebases for logical design errors (*Hētvābhāsa*). AUM keeps your workspace clean, protects developer attention, and guarantees that AI agents operate in alignment with your architecture.

---

## 🎯 Main Purpose of the Framework

When coding with modern agentic AI assistants, it is easy to accumulate technical debt, loose code patterns, unapproved packages, and untracked architectural deviations. 

AUM solves this problem by enforcing a **turn-based development lifecycle (Pañcakṛtya)** and injecting active system sheaths directly into the AI agent's memory using standard IDE rule structures. AUM guarantees:
- **Design Authority**: Code cannot be changed unless backed by an Architecture Decision Record (ADR) or task blueprint.
- **Fallacy Prevention**: Automatic scans check changed files for TODO stubs, print logs, and logic gaps.
- **Environment Stability**: Environment diagnostics ensure your system parameters are recognized before execution.
- **Lightweight Workspace**: All session states, caches, and memory profiles are isolated and kept out of Git.

---

## 📦 Directory Structure

```text
├── .agents/                    # Yogi agent instructions and custom system sheaths
├── .aum/                       # Cognitive runtime folder (machine-read config & logs)
│   ├── config.json             # Workspace rule configurations (Yamas/Niyamas)
│   ├── sphota.json             # Live session stage state (gitignored)
│   ├── samskaras/              # Local memory profile caches (gitignored)
│   └── sankalpas/              # Developer resolve logs (WIP files gitignored)
├── aum_framework/              # The AUM npm package source code
│   ├── scripts/                # Execution binaries (aum.js, aum_init.js, etc.)
│   └── pkg_files/              # Pristine rules and setup templates
├── docs/                       # Human-readable documentation
│   └── architecture/           # Architecture Review Board (ARB) & ADR decisions
├── docs_portal/                # React Vite SPA documentation reader source
└── release/                    # Compiled production documentation portal
```

---

## 🚀 Getting Started & Installation

AUM requires **Node.js (v22+)** and works natively with advanced AI-enabled editors like **Cursor**, **Cline**, **Roo Code**, and **VS Code**.

### 1. Developing AUM (Workspace Setup)
If you want to contribute to AUM or run it locally in this repository:
1. Clone the repository:
   ```bash
   git clone https://github.com/bkartheek/AUM.git
   cd AUM
   ```
2. Install package dependencies and symlink the CLI command:
   ```bash
   npm install
   ```
3. Run diagnostic checks:
   ```bash
   npx aum recognize
   npx aum audit
   ```

### 2. Adding AUM to Multiple Projects (Initialization)
You can initialize AUM inside **any existing or new target codebase** to enforce Yogi agent guardrails:
1. From the root of your target project, run AUM's initializer:
   ```bash
   # Using the absolute path to your local AUM clone
   node /path/to/AUM/aum_framework/scripts/aum_init.js
   ```
2. The **Interactive Wizard** will prompt you:
   - **Project Name**: Customize your workspace identity.
   - **Design Directory**: Choose where your ADR markdown files should live (Default: `docs/architecture`).
   - **Guardrails Preset**: Select **Strict Guardrails** (standard audits and constraints) or **Lightweight Mode** (basic Yogi instructions).
3. The wizard will copy Yogi's rules (`.agents/`, `.cursorrules`, `.clinerules`, `CLAUDE.md`) and automatically update your `.gitignore` with AUM exclusions.

---

## ॐ Yogi: How Yogi Guides Development

Once initialized, the resident framework guardian **Yogi** takes control of the IDE workspace:
- **Yamas & Niyamas**: Yogi enforces workspace constraints (e.g. file isolation, compilation builds checking) defined in `.aum/config.json`.
- **Pre-Commit Audits**: Runs fallacy checks (`npx aum audit`) on git staged files before commits are accepted.
- **Reverse Vāk Trace**: Ensures all source code modifications correspond to a designated Architecture Decision Record (ADR) under `docs/architecture/decisions/`.

---

## 🛠️ Debugging & Troubleshooting

If you encounter issues during development or linting, run these commands to diagnose:

### 1. Linter Audit Fails (`npx aum audit`)
If Yogi reports logical fallacy errors (*Hētvābhāsa*):
```text
[ HĒTVĀBHĀSA ERROR ] [ Asiddha Fallacy ]: File contains 1 placeholder stubs (TODO/FIXME).
[ HĒTVĀBHĀSA AUDIT ]: FAILED. 1 violations detected.
```
- **Action**: Open the reported file, remove any temporary `TODO`, `FIXME`, or debug console prints, and re-run `npx aum audit`.

### 2. Verification / Environment Crash
If your workspace is unaligned or dependencies are broken, trigger AUM's self-healing runner (*Prāyaścitta*):
```bash
npx aum verify
```
This performs a system check, reinstalls broken dependencies, and attempts to resolve configuration conflicts.

---

## 🤝 Developer Contribution Guide

We welcome contributions to AUM! To ensure the cognitive codebase remains clean and stable, all developers must adhere to the following rules:

### Yamas (Restraints to Follow)
- **Ahiṃsā (Non-harm)**: Do not submit code that breaks the compiler build or existing test profiles.
- **Asteya (Non-stealing)**: Do not delete existing user logic, helper functions, or license agreements.
- **Satya (Truth)**: Do not submit mock stubs, empty test cases, or placeholder functions.
- **Isolation**: Do not write code that reads or writes files outside the workspace root.

### Pre-PR Checklist
Before pushing code or opening a Pull Request:
1. Verify that your environment is healthy:
   ```bash
   npx aum recognize
   ```
2. Run the linter to ensure zero logical violations:
   ```bash
   npx aum audit
   ```
3. Compile the documentation portal and update the release directory:
   ```bash
   # Compiles markdown to json
   npx aum publish
   # Rebuilds portal SPA
   cd docs_portal && npm run build && cd ..
   # Copies to release
   rm -rf release/* && cp -R docs_portal/dist/* release/
   ```

---

## ⚠️ Critical Precautions (Careful Actions)

- **Never Commit Dynamic Files**: Do not track `.aum/sphota.json` or `.aum/samskaras/` in your commits. They contain local session configurations and machine memory profiles.
- **Respect Design Separation**: Never create a design decision directly in code. Always write the Architecture Decision Record (ADR) under `docs/architecture/decisions/` *before* implementing the change.
