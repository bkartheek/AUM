---
title: "Architecture Decision Record: Agent Customizations Root Integration"
type: "architecture_decision"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Creating the .agents/AGENTS.md rules file to enable auto-initialization of the AUM cognitive framework for customization-supporting agents."
---

# Architecture Decision Record (ADR) Log: ADR-004

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-004
  Subject     : Auto-Initiating Workspace Customizations via .agents/
  Status      : Implemented
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

In Kashmir Shaivism, the absolute, silent reality of consciousness (**Anuttara**) is not a static void. It possesses a dynamic, creative, and spontaneous pulsation known as **Spanda** (the divine vibration or creative throb of consciousness). *Spanda* is the active agency (*Kriyā Śakti*) that bridges the unmanifest silence and the physical manifest universe (**Viśva**). 

Without *Spanda*, the silent consciousness remains inert and unperceived. 

In our repository architecture, the static guidelines and invariant rules stored under [.aum/](file:///Users/universe/AUM/.aum) represent the silent, unmanifest source (**Anuttara**). However, when a new customization-supporting AI agent is spawned in the workspace, it has no direct pathway to perceive these rules unless they are actively pushed into its context. 

The [.agents/](file:///Users/universe/AUM/.agents) customizations root acts as the **Spanda (Pulsation)**—the active transducer that automatically broadcasts the core invariants directly into the newly spawned agent's cognition upon startup. By reading [AGENTS.md](file:///Users/universe/AUM/.agents/AGENTS.md) at the moment of initialization, the agent is instantly tuned to the workspace's Tāla rhythm, bridging the gap between static files and active agent execution.

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

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's request to auto-initiate the workspace rules as the **Śruti** (revelation) calling for **Svata-Prabodhaka** (self-awakening rules). The user's vision calls for a setup where the framework's rules are automatically active from the moment the agent enters the workspace, acting as **Icchā Śakti** to eliminate manual setup steps.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on this, we observe that without an auto-initialization directory like `.agents/`, the system invariants remain in a state of **Suṣupti** (dreamless sleep) or **Svapna** (dreaming) inside the folder tree until manually invoked. 

By implementing [.agents/AGENTS.md](file:///Users/universe/AUM/.agents/AGENTS.md), we create the **Spanda-Kārikā** (the vibration catalyst) that automatically transitions the operating agent into the **Jāgrat** (waking) state of rule awareness. It does not conflict with individual IDE-specific rules; rather, it serves as the universal gateway that bridges the unmanifest rules into active agent cognition (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The creation of the customizations root was executed as a meditative physical configuration:
*   The [.agents/](file:///Users/universe/AUM/.agents) directory was created at the workspace root.
*   [AGENTS.md](file:///Users/universe/AUM/.agents/AGENTS.md) was written to map the agent's initialization process directly to the AUM core instructions.
*   The system deployment guide was updated in `README.md` and the final files were committed to Git.

---

## 7. References & Appendix
*   [config.json](file:///Users/universe/AUM/.aum/config.json) — System invariants.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — Active trigger instructions.
