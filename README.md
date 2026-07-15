# ॐ AUM: Intent-Driven Cognitive Workspace Framework

Welcome to the development workspace for **AUM**, a framework designed to establish cognitive guardrails, design compliance sheaths, and safe AI agent pair-programming parameters inside developer workspaces.

The framework is developed inside the `aum_framework/` package and is dogfooded at the root of this workspace to govern and guide its own development.

---

## 📂 Architecture & Directory Layout

The workspace is organized to keep machine-read parameters isolated from human-readable design documentation:

- **`.aum/`**: Dynamic runtime state directory. Contains:
  - `config.json`: Workspace rules configuration (Yamas and Niyamas).
  - `sphota.json`: Live session state tracker (gitignored).
  - `sankalpas/`: Task resolution logs (active logs gitignored).
  - `samskaras/`: Local memory profile caches (gitignored).
- **`.agents/`**: Yogi agent instructions and cognitive guidelines.
- **`docs/architecture/`**: Human-readable design records (35+ ARBs and 33+ ADR decisions).
- **`aum_framework/`**: The standalone npm package source code:
  - `scripts/`: CLI parser orchestrator (`aum.js`) and compiler engines.
  - `pkg_files/`: Standard rules templates and pristine setups.
- **`docs_portal/`**: Source folder for the premium React SPA documentation portal.
- **`release/`**: Built static assets of the documentation portal (served via GitHub Pages).

---

## 🛠️ Key Features & Implementations

### 1. Interactive Dharmic Setup Wizard (`aum init`)
Initializing AUM in any new or existing target codebase runs a clean, interactive setup wizard:
- **Project Customization**: Prompts for project name and configures rules dynamically.
- **Guardrail Presets**: Offers selection of **Strict Guardrails** (pre-commit audits, Yamas & Niyamas checks) or **Lightweight Mode** (basic Yogi instructions).
- **Non-Interactive Scripting**: Supports `-y`, `--yes`, and `--non-interactive` flags to bypass prompts when executed inside pipelines or automated script runners.

### 2. Intelligent Upgrade & Merge Engine
When running `aum init` in an existing workspace, the initializer enters **Upgrade Mode**:
- **Zero Data Loss**: User-owned dynamic files (`sphota.json`), task histories (`sankalpas/`), memory caches (`samskaras/`), and custom design records are preserved.
- **Merge Configuration**: Merges properties inside `.aum/config.json`, keeping custom project parameters.
- **Core Update**: Overwrites only the static framework rules (`INSTRUCTIONS.md`, Yogi instructions, and editor rules) to keep the engine up-to-date.

### 3. Configurable Design Directories
To prevent bloating hidden directories, AUM separates human-readable documentation from machine-read states:
- **Configurable Paths**: Developers can configure where their ADRs and blueprints live via the `"architecture_dir"` setting in `.aum/config.json` (e.g. `docs/architecture` or `design/`).
- **Pristine Templates**: Moves the framework's own design files out of the package template, keeping the distributed `.aum/` template under 5KB.
- **Dynamic Compilation**: `parse_docs.js` automatically resolves the custom configured path to compile markdown decisions into the search portal database.

### 4. Gitignore Auto-Management
To protect codebases from git pollution and merge conflicts, the setup wizard automatically manages exclusions:
- Appends AUM-specific ignore directives cleanly to any existing `.gitignore` in the target project without modifying existing custom lines.
- Creates a new `.gitignore` if none exists.
- Automatically ignores `.aum/sphota.json`, `.aum/samskaras/`, `.aum/intent_awakening/`, and local resolve logs `sankalpa_*.md`.

---

## 🚀 Workspace Commands

To participate in self-guided development inside this repository, run:

### Installation
Run `npm install` at the root to symlink the local package:
```bash
npm install
```

### Turn lifecycle Commands
Run framework checks inside the workspace root using `npx aum`:
```bash
npx aum start       # Start a development turn and prune context
npx aum recognize   # Run environmental diagnostic audits
npx aum audit       # Run linter checks for logical fallacies
npx aum publish     # Recompile documentation portal database
```

### target Project Onboarding
To initialize the Yogi agent in an external target project:
```bash
# Interactive setup
node /path/to/AUM/aum_framework/scripts/aum_init.js

# Non-interactive script setup (default paths)
node /path/to/AUM/aum_framework/scripts/aum_init.js --yes
```

---

## ॐ Yogi's Persona & System Guardrails

Yogi is the resident framework guardian that enforces focus (*Saṅkalpa*), checks for logical fallacies (*Hētvābhāsa*), and aligns the turn lifecycle (*Pañcakṛtya*). Yogi guides development inside the workspace through standard IDE files loaded natively by VS Code, Cursor, and Cline:

- **`.cursorrules` / `.clinerules`**: Workspace rules mapping Yogi directly into editor prompts.
- **`CLAUDE.md`**: Guide directions for terminal execution.
- **`USERS.md`**: Onboarding manual.
