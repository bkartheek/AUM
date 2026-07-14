# AUM: Intent-Driven Cognitive Workspace

```text
  █████╗ ██╗   ██╗███╗   ███╗    ███████╗███╗   ██╗ ██████╗██╗███╗   ██╗███████╗
 ██╔══██╗██║   ██║████╗ ████║    ██╔════╝████╗  ██║██╔════╝██║████╗  ██║██╔════╝
 ███████║██║   ██║██╔████╔██║    █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  
 ██╔══██║██║   ██║██║╚██╔╝██║    ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  
 ██║  ██║╚██████╔╝██║ ╚═╝ ██║    ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝
                               A U M   E N G I N E
```

This workspace houses the **Intent Engine**—a technology-agnostic cognitive framework designed to align developers (human or AI) with repository-wide constraints, user resolves, and conceptual blueprints before raw development begins. It also hosts the local **GitHub Reporter** utility.

---

## 🎨 System Architecture Graph (Unicode Block Drawing)

```text
                  ┌───────────────────────────────────────────┐
                  │        TURĪYA (Silence / Pure Vision)     │
                  │             .aum/INSTRUCTIONS.md          │
                  └─────────────────────┬─────────────────────┘
                                        │
                    Governs & anchors   │   Directs runtime triggers
                    all stages          │   & visual receipts
                                        ▼
                  ┌───────────────────────────────────────────┐
                  │                 TĀLA CYCLE                │
                  │             .aum/sphota.json              │
                  └───────┬───────┬───────────────┬───────┬───┘
                          │       │               │       │
      1. Spawn Spark      │       │ 2. Resolve    │       │ 3. Run Beat
      (Paśyantī)          │       │ (Saṅkalpa)    │       │ (Concord)
      ▼                   ▼       ▼               ▼       ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│    PAŚYANTĪ      │    │     JĀGRAT       │    │     SVAPNA       │    │    SUṢUPTI       │
│ (Awakened Seed)  │    │  (Waking State)  │    │  (Dream State)   │    │  (Consolidated)  │
│                  │───➔│                  │───➔│                  │───➔│                  │
│ .aum/            │    │ .aum/templates/  │    │ .aum/templates/  │    │ .aum/sankalpas/  │
│  intent_         │    │  clarification_  │    │  blueprint_      │    │                  │
│  awakening/      │    │  template.md     │    │  template.md     │    │ Invariants, ADRs │
│  (sparks.md)     │    │  (Intake Q&A)    │    │  (Blueprint)     │    │ & Boundary Rules │
└──────────────────┘    └──────────────────┘    └──────────────────┘    └──────────────────┘
```

---

## 📂 Directory Layout

*   **`.aum/`** — Core portable configuration folder containing:
    *   [INSTRUCTIONS.md](.aum/INSTRUCTIONS.md) — Self-orchestrating execution commands and visual receipt specifications.
    *   [PHILOSOPHY.md](.aum/PHILOSOPHY.md) — Vedic and musical philosophy background.
    *   [config.json](.aum/config.json) — System invariants, prohibited actions, and Tāla stages.
    *   [sphota.json](.aum/sphota.json) — Dynamic cognitive state tracking active Saṅkalpa and Tāla stage beats.
    *   **`templates/`** — Contains reusable templates and boundaries:
        *   [clarification_template.md](.aum/templates/clarification_template.md)
        *   [blueprint_template.md](.aum/templates/blueprint_template.md)
        *   [boundaries.md](.aum/templates/boundaries.md)
        *   [retrospective_template.md](.aum/templates/retrospective_template.md)
    *   **`intent_awakening/`** — Contains the private thought incubator [sparks.md](.aum/intent_awakening/sparks.md).
    *   **`sankalpas/`** — Contains progress logs for active, paused, and completed Saṅkalpas.
    *   **`architecture/`** — Master Architecture Review Board logs (ARB-000 through ARB-026):
        *   [arb_000_mandukya_foundation.md](.aum/architecture/arb_000_mandukya_foundation.md) — Foundational Mandukya Upanishad mapping.
        *   **`decisions/`** — Centralized Architecture Decision Record (ADR) logs (ADR-001 through ADR-026).
*   **`.agents/`** — Workspace customizations root containing [AGENTS.md](.agents/AGENTS.md) used to auto-initialize customization-supporting AI agents at startup.
*   **`github_reporter.py`** — Root command utility to fetch public profile and repo details from GitHub.

---

## 🚀 Deploying & Using AUM in Any Project

The AUM Engine is a **portable cognitive guardrail system**. It can be deployed in any target project root to align any AI editor agent (such as Cursor, Cline, Copilot, or Claude Code) with the developer's core intentions, stopping task drift and premature code execution.

### 📥 Step 1: Downloading & Integrating AUM

1.  **Copy the Engine Root**: Copy the entire `.aum/` directory and place it in the root of the target project workspace:
    ```bash
    cp -r /path/to/AUM/.aum /path/to/target-project/
    ```
2.  **Deploy Agent Instructions**: Copy the rule files matching the IDE tools you use into the target project's root:
    *   For **Cursor**: Copy `.cursorrules` to the target root.
    *   For **Cline/Roo-Code**: Copy `.clinerules` to the target root.
    *   For **Claude Code**: Copy `CLAUDE.md` to the target root.
    *   For **Copilot**: Copy `.github/copilot-instructions.md` under the target's `.github/` folder.
    *   For **Customization-supporting Agents**: Copy the `.agents/` directory to the target root to enable auto-initialization.
3.  **Configure Gitignore**: Add the following exclusions to the target project's `.gitignore` file to ensure local task history and session states are not pushed to the shared codebase:
    ```gitignore
    # Exclude AUM local task history and dynamic session state
    .aum/intent_awakening/
    .aum/sphota.json
    .aum/sankalpas/sankalpa_*.md
    ```

---

## ⚙️ How it Works: The Cognitive Stages

Once deployed, the AUM instructions force the AI agent to follow a strict will-knowledge-action pipeline (**Trika Śakti**) to prevent premature execution. The development cycle moves sequentially through four beats:

```text
  [ Intake Stage ]   ➔   [ Blueprint Stage ]   ➔   [ Verification ]   ➔   [ Manifestation ]
  (intake beat)          (blueprint beat)          (verification beat)    (manifest beat)
  Clarify vision         Design abstract flows     Outline test plans     Write/edit code
```

1.  **Intake (`intake`)**: The agent interviews you to capture vision parameters. No code writing is allowed.
2.  **Blueprint (`blueprint`)**: The agent maps system diagrams and interfaces under `.aum/templates/blueprint_template.md`. No code writing is allowed.
3.  **Verification (`verification`)**: The agent maps boundary constraints ([boundaries.md](.aum/templates/boundaries.md)) and defines verification commands.
4.  **Manifestation (`manifest`)**: The agent physically edits files, compiles code, runs test validations, and logs completions.

---

## 🕉️ Using the AUM Engine (Instruction-Based Triggers)

The AUM Engine is entirely technology-agnostic. It runs without Python or other local scripts, orchestrating the codebase directly through **natural language trigger commands** parsed by the AI agent.

When you type a trigger command in your message, the AI agent is instructed to modify the configuration files inside `.aum/` and return a visual confirmation transaction receipt.

### 1. `AUM: SPARK [Idea]`
Captures raw brainstorms/ideas (Paśyantī state) in the gitignored thought incubator file.
*   **Input**: `AUM: SPARK Add custom validation logic`
*   **AI Action**: Appends to `.aum/intent_awakening/sparks.md` and renders:
```text
=====================================================================
            🕉️ [ PASHYANTĪ SEED CAPTURED ]
=====================================================================
  Spark ID   : spark_20260713_0702
  Concept    : "Add custom validation logic"
  Incubator  : .aum/intent_awakening/sparks.md
  Status     : Causal State (Phase 0)
=====================================================================
```

### 2. `AUM: RESOLVE [Goal Title]`
Initializes a new target resolve and logs it in `.aum/sankalpas/sankalpa_XXX_[name].md` (Saṅkalpa state).
*   **Input**: `AUM: RESOLVE Build dashboard analytics UI`
*   **AI Action**: Creates a new `.md` log file, sets `active_sankalpa_id` in `.aum/sphota.json`, and renders:
```text
=====================================================================
            🧵 [ SAṄKALPA RESOLVE INITIATED ]
=====================================================================
  Resolve ID : sankalpa_002_build_dashboard_analytics_ui
  Objective  : "Build dashboard analytics UI"
  Status     : Intake Stage (Tāla Beat: INTAKE)
  Log File   : .aum/sankalpas/sankalpa_002_build_dashboard_analytics_ui.md
=====================================================================
```

### 3. `AUM: BEAT next`
Advances the active Tāla beat stage (Intake ➔ Blueprint ➔ Verification ➔ Manifest).
*   **Input**: `AUM: BEAT next`
*   **AI Action**: Updates `tala_beat` in `.aum/sphota.json` and renders:
```text
=====================================================================
            ⏱️ [ TĀLA BEAT ADVANCED ]
=====================================================================
  Resolve ID : sankalpa_002_build_dashboard_analytics_ui
  Transition : INTAKE ➔ BLUEPRINT
  Directive  : "Map out abstract components and flow sequences. Do not edit source code yet."
=====================================================================
```

### 4. `AUM: DRONE`
Prints the Tanpura "reference pitch" containing invariants, active Saṅkalpa, and current beat.
*   **Input**: `AUM: DRONE`
*   **AI Action**: Displays the active rules and task context to anchor the conversation.



---

## 🛠️ Running the GitHub Reporter

The repository contains `github_reporter.py` which uses Python's standard library to query users' public repository statistics from the GitHub REST API.

### Execution
Run the script using any Python 3 environment:
```bash
python3 github_reporter.py
```

You will be prompted to enter:
1.  **GitHub Username** (e.g. `octocat`)
2.  **GitHub Personal Access Token** (Optional - bypasses the 60 requests/hour unauthenticated rate limit)

### Output
The reporter outputs:
*   Profile details (name, bio, location, followers)
*   Table of repositories detailing star counts, fork counts, and primary language
*   Languages breakdown highlighting repository counts per technology
