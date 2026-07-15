---
title: "Architecture Review Board: Agent Customizations Root Integration"
type: "architecture_review"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Creating the .agents/AGENTS.md rules file to enable auto-initialization of the AUM cognitive framework for customization-supporting agents."
---

# Architecture Review Board (ARB) Report: ARB-004

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-004
  Subject     : Auto-Initiating Workspace Customizations via .agents/
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.4.0
=====================================================================
```

---

## 1. Executive Summary

This report outlines the integration of the workspace customization rules under the `.agents/` customizations root. By introducing an [AGENTS.md](file:///Users/universe/AUM/.agents/AGENTS.md) file containing cognitive workspace constraints, any agent supporting custom workspace parameters (such as Antigravity or Gemini agent workflows) will automatically discover and load the AUM instructions at startup. This eliminates the need for manual rules configuration and ensures seamless agent alignment.

---

## 2. Context & Problem Statement

Currently, we support multiple IDE-specific instructions files:
*   `.cursorrules` (Cursor)
*   `.clinerules` (Cline)
*   `CLAUDE.md` (Claude Code)
*   `.github/copilot-instructions.md` (Copilot)

While this covers individual IDEs, it requires maintaining separate files for each new tool. Furthermore, when a customization-supporting agent loads the project, it does not automatically load these rules unless they are explicitly mapped to the customizations root (`.agents/`).

### What Was Affected
*   **Initialization Friction**: A new customization-supporting agent loaded in this directory would run without knowing the AUM framework, causing a potential breach of Yamas and Niyamas.

### What Was Removed
*   None. This is an extension of the existing configurations.

---

## 3. Theoretical & Cognitive Foundations

In Kashmir Shaivism, the ultimate silent reality (*Turīya*) manifests its active, dynamic power through **Spanda** (the divine vibration or creative pulsation of consciousness). 

Without *Spanda*, the silent consciousness is static and unperceived. In our system, the `.agents/` customizations root acts as the **Spanda (Pulsation)**—the active transducer that automatically broadcasts the core invariants (*Turīya*) directly into the agent's cognition upon startup. It bridges the gap between the static files in `.aum/` and the active mind of the newly spawned agent, automatically tuning it to the system's Tāla rhythm.

---

## 4. Proposed Changes & Technical Architecture

### Folder Structure Modifications

We will create a new `.agents/` directory at the root and update the `.gitignore` files:

```text
AUM/
├── .aum/
│   └── ...
├── .agents/                          <-- [NEW] Customization Root
│   └── AGENTS.md                     <-- [NEW] Workspace Customization Rules
└── README.md                         <-- [MODIFY] Document changes
```

### File Details

#### `.agents/AGENTS.md`
```markdown
# AUM Framework Integration Rules

Any agent operating in this workspace must read and strictly follow the state guidelines, cognitive beats, and invariants defined in:
1. `.aum/INSTRUCTIONS.md`
2. `.aum/config.json`

## Setup Configuration
* Read `.aum/sphota.json` and the active `.aum/sankalpas/` file at startup to load the persistent state.
* If a request is ambiguous, stop execution and present clarifying questions as defined in `.aum/templates/clarification_template.md`.
* Compile draft codes and blueprints under the active `.aum/sankalpas/` file or `.aum/templates/`.
* Log decisions and files under `.aum/sankalpas/`.
```

---

## 5. System Impact & Improvements

*   **Auto-Initiation**: Any customization-supporting agent will instantly auto-initialize the AUM rules without manual user prompting.
*   **Lower Redundancy**: Consolidating rules into `.agents/` provides a single file that can serve all customization-supporting agents, simplifying configuration maintenance.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing)
The user requested integrating the `.agents` customizations root to auto-initiate the project rules.

### 2. Manana (Reflecting)
Reflecting on this, we find that adding `.agents/AGENTS.md` perfectly implements the *Spanda* pulsation principle, automatically tuning the agent's context to the *Turīya* invariants. It does not conflict with existing IDE rules.

### 3. Nididhyāsana (Meditating/Integrating)
The directory `.agents/` will be created, `AGENTS.md` written, `README.md` updated, and the changes committed to Git.

---

## 7. References & Appendix
*   [config.json](file:///Users/universe/AUM/.aum/config.json) — System invariants.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — Active trigger instructions.
