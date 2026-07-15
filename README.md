# Workspace: AUM Intent Framework

Welcome to the workspace repository. This directory hosts the **AUM Intent Engine** package in the `aum_framework/` subfolder.

---

## 📂 Repository Contents

- **`github_reporter.py`**: A utility tool to query public user repository statistics from the GitHub REST API.
- **`aum_framework/`**: The packaged **AUM Cognitive Framework** code, developer guides, release builds, and templates.

---

## 🛠️ Getting Started with AUM Framework

The AUM Intent Engine is packaged as a standalone tool under `aum_framework/`. You can initialize AUM in any separate development project directory to enforce cognitive guardrails:

1. **Install standard dependencies**: Make sure Node.js (v22+) is installed.
2. **Initialize AUM in your project**:
   Run the initialization script from the root of your target project:
   ```bash
   node /path/to/AUM/aum_framework/scripts/aum.js init
   ```
   This will copy the `.aum/`, `.agents/`, and editor configuration rules files (`.cursorrules`, `.clinerules`, `CLAUDE.md`) into your target project root.
3. **Run AUM checks**:
   You can run AUM turn checks inside your initialized project folder:
   ```bash
   node /path/to/AUM/aum_framework/scripts/aum.js audit
   ```

For detailed developer setup, see [aum_framework/USERS.md](file:///Users/universe/AUM/aum_framework/USERS.md).
For AUM architectural design logs, see [aum_framework/README.md](file:///Users/universe/AUM/aum_framework/README.md).
