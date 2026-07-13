---
title: "Architecture Decision Record: Framework Consolidation"
type: "architecture_decision"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Reorganizing AUM cognitive files into a single .aum/ root to enable plug-and-play project deployment and eliminate legacy configuration conflicts."
---

# Architecture Decision Record (ADR) Log: ADR-001

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-001
  Subject     : Consolidation & Portability of the AUM Intent Engine
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.1.0
=====================================================================
```

---

## 1. Executive Summary

This report reviews the structural consolidation of the AUM Cognitive framework. By migrating legacy templates, instructions, and boundary logs from the redundant `intent_engine/` directory into a centralized, portable configuration root (`.aum/`), we have established a unified "source of truth." This consolidation solves path ambiguity, eliminates structural duplication, and allows developers to instantly integrate the framework into any codebase by dropping in a single, self-contained directory.

---

## 2. Context & Problem Statement

Prior to this intervention, the repository suffered from a dual-architecture setup. Two independent directory trees coexisted:
1.  **`.aum/`**: A hidden root directory that managed active sessions (`sphota.json`), runtime triggers (`INSTRUCTIONS.md`), philosophy foundations (`PHILOSOPHY.md`), and raw brainstorming logs (`sparks.md`).
2.  **`intent_engine/`**: A legacy container containing guidelines (`AI_INSTRUCTIONS.md`), manifests (`INTENT.md`), and folder structures (`waking/`, `dreaming/`, `deepsleep/`) designed to host template worksheets and decision records.

### What Was Affected
*   **AI Agent Context Drift**: AI tools (such as Cursor, Cline, and Copilot) were guided by configuration rules that pointed to two separate folders. This split-context caused agents to read incorrect templates, write logs in the wrong paths, and fail to synchronize active progress.
*   **Path Ambiguity**: Developers had to navigate multiple levels of directory depths to find equivalent files (e.g., active saṅkalpas under `.aum/sankalpas/` versus legacy templates under `intent_engine/deepsleep/logs/`).

### What Was Missing
*   A single, plug-and-play directory that could be compressed or copied into new repositories to instantly initialize the AUM cognitive guardrails.

### What Was Removed
*   The legacy `intent_engine/` directory in its entirety was purged.
*   Legacy manifests (`intent_engine/INTENT.md` and sub-folder `_intent.md` files) were deprecated, as their properties were consolidated into `.aum/config.json` and `.aum/INSTRUCTIONS.md`.
*   Legacy instructions (`intent_engine/AI_INSTRUCTIONS.md`) were merged into [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md).

---

## 3. Theoretical & Cognitive Foundations

The AUM framework maps the software development lifecycle to the Sanskrit grammarian Bhartrihari's theory of **Vāk (Levels of Speech)** and **Sphoṭa (Holistic Cognition)**, as documented in his text *Vākyapadīya* (5th Century CE). 

According to Bhartrihari, speech and meaning manifest in four descending levels:
1.  **Parā Vāk**: The unmanifest, silent potential of thought. In our system, this corresponds to the invariants in `config.json` which set the rules of what is possible.
2.  **Paśyantī Vāk**: The undifferentiated visual seed of an idea. Mapped to `sparks.md` where raw concepts are captured.
3.  **Madhyamā Vāk**: The structured, logical syntax formed in the mind. Mapped to the design blueprints and active Saṅkalpas.
4.  **Vaikharī Vāk**: The physical, audible articulation. Mapped to the compiled, executable source code written in the workspace.

### The Cognitive Pathologies of Dual-Architecture
When the cognitive framework is split across two directory trees (`intent_engine/` and `.aum/`), the **Sphoṭa**—the sudden, holistic flash of understanding—is fractured. The AI agent, when reading the workspace, is presented with a conflicted, split representation of the system rules. This causes the agent's reasoning flow to break down, resulting in cognitive drift.

Consolidating all layers of *Vāk* under a single root directory (`.aum/`) ensures that the agent's perception of the project's "Pure Vision" (*Turīya*) remains unified, preventing path confusion and ensuring that meaning flashes cleanly in the agent's context.

---

## 4. Proposed Changes & Technical Architecture

### Structural Diagram (Before vs. After)

```text
       ┌────────────────────────────────────────────────────────┐
       │                 BEFORE: FRAGMENTED STATE               │
       │  AUM/                                                  │
       │  ├── .aum/                  <-- Active state           │
       │  │   ├── config.json                                   │
       │  │   └── sphota.json                                   │
       │  └── intent_engine/         <-- Duplicate templates    │
       │      ├── waking/                                       │
       │      └── dreaming/                                     │
       └──────────────────────────┬─────────────────────────────┘
                                  │
                                  ▼ Consolidate into .aum/
       ┌────────────────────────────────────────────────────────┐
       │                 AFTER: UNIFIED STATE                   │
       │  AUM/                                                  │
       │  └── .aum/                  <-- Self-contained root    │
       │      ├── config.json        <-- Invariant rules        │
       │      ├── sphota.json        <-- Active session         │
       │      ├── templates/         <-- Consolidated templates │
       │      └── sankalpas/         <-- Git-ignored task logs  │
       └────────────────────────────────────────────────────────┘
```

### Detailed File Changes

*   **Templates Migrated**: 
    *   Legacy `intent_engine/waking/clarification_template.md` migrated to [.aum/templates/clarification_template.md](file:///Users/universe/AUM/.aum/templates/clarification_template.md).
    *   Legacy `intent_engine/dreaming/blueprint_template.md` migrated to [.aum/templates/blueprint_template.md](file:///Users/universe/AUM/.aum/templates/blueprint_template.md).
    *   Legacy `intent_engine/deepsleep/boundaries.md` migrated to [.aum/templates/boundaries.md](file:///Users/universe/AUM/.aum/templates/boundaries.md).
*   **Rules Updated**: 
    *   Reconfigured [.cursorrules](file:///Users/universe/AUM/.cursorrules), [.clinerules](file:///Users/universe/AUM/.clinerules), [CLAUDE.md](file:///Users/universe/AUM/CLAUDE.md), and [.github/copilot-instructions.md](file:///Users/universe/AUM/.github/copilot-instructions.md) to redirect search paths from `intent_engine/` to the corresponding `.aum/` folders.

---

## 5. System Impact & Improvements

*   **Zero Configuration Ambiguity**: Since there is now only one configuration directory (`.aum/`), there is no risk of the agent reading stale rules or conflicting instructions.
*   **Enhanced Portability**: Any new repository can be AUM-aligned by executing a single copy operation:
    ```bash
    cp -r /path/to/AUM/.aum /path/to/new-project/
    ```
*   **Standardized Agent Induction**: System agents immediately grasp the workspace rules upon loading because the core rules files (`.cursorrules`, `CLAUDE.md`) are unified and point directly to the consolidated path.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing)
The user requested a mechanism to combine the framework into a single folder structure to make it portable and easily deployable to other projects.

### 2. Manana (Reflecting)
Reflecting on this restructure, we identified that having duplicate layout files violated the *Golden Guardrails of Vedic Alignment* (specifically **Guardrail 1: Invariance of the Sphoṭa**). A dual structure created dual realities. The consolidation resolves this issue, simplifying the mapping of the descending levels of *Vāk* and providing a clean, single-point reference system.

### 3. Nididhyāsana (Meditating/Integrating)
The restructuring was fully executed and verified:
*   Redundant files were deleted.
*   The system was updated and the configurations were validated.
*   A clean git history was committed on branch `main`.

---

## 7. References & Appendix
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — The active trigger manual.
*   [PHILOSOPHY.md](file:///Users/universe/AUM/.aum/PHILOSOPHY.md) — The core theoretical references.
*   [config.json](file:///Users/universe/AUM/.aum/config.json) — System invariants.
*   [sphota.json](file:///Users/universe/AUM/.aum/sphota.json) — Dynamic cognitive session logs.
