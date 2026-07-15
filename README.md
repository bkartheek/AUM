# AUM Framework: Self-Guided Development Workspace

Welcome to the development repository for **AUM: Intent-Driven Cognitive Workspace Framework**. 

This workspace is set up as a **self-guided (dogfooding) project**. The framework itself is developed inside the `aum_framework/` subfolder, but it is installed as a local package dependency at the root of the workspace to monitor and guide the development process.

---

## 📂 Directory Layout

- **`.aum/`**: Active session log records, blueprints, Yamas & Niyamas, and ADR logs that guide development inside this repository.
- **`.agents/`**: Cognitive guidelines and Yogi agent configurations for this workspace.
- **`aum_framework/`**: The standalone npm package source code:
  - `package.json`: NPM package metadata.
  - `scripts/`: Framework orchestrator runtime scripts.
  - `pkg_files/`: Templates copied during target project initialization (`aum init`).
- **`docs_portal/`**: Source files for the premium React SPA documentation explorer.
- **`release/`**: Built static assets of the documentation portal.
- **`github_reporter.py`**: A utility tool to query public user repository statistics from the GitHub REST API.

---

## 🛠️ Getting Started (Dogfooding the Framework)

To install the framework runtime locally and begin self-guided development:

1. **Install dependencies**:
   Run `npm install` at the repository root. This installs the package dependencies and symlinks `aum_framework/` as a local package:
   ```bash
   npm install
   ```

2. **Run AUM Turn lifecycle commands**:
   You can now run framework actions at the workspace root using `npx aum`:
   ```bash
   npx aum start       # Start a turn and prune context
   npx aum recognize   # Run environment checks
   npx aum audit       # Run fallacy linter checks
   npx aum publish     # Compile documentation portal database
   ```
   *The commands execute the package binary from `aum_framework/` but read/write state parameters inside the root `.aum/` to guide AUM framework development.*

3. **Initialize AUM in other projects**:
   To initialize AUM's Yogi agent in an external target project:
   ```bash
   node /path/to/AUM/aum_framework/scripts/aum.js init
   ```
   This copies the templates in `aum_framework/pkg_files/` into your target project.

---

For detailed guide on adding new commands or scripts, see [USERS.md](file:///Users/universe/AUM/USERS.md).
For AUM architectural design logs, see [README.md](file:///Users/universe/AUM/aum_framework/README.md).
