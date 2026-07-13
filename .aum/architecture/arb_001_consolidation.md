---
title: "Architecture Review Board: Framework Consolidation"
type: "architecture_review"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Review document detailing the consolidation and portability restructuring of the AUM framework"
---

# Architecture Review Board (ARB) Report: ARB-001

**Subject**: Consolidation & Portability of the AUM Intent Engine  
**Status**: Approved  
**Author**: Antigravity AI Agent  
**Date**: 2026-07-13  

---

## 1. Context & Executive Summary

Historically, the workspace maintained two parallel and overlapping configuration systems:
*   `.aum/` (Active configuration containing invariants, state tracking, and local sparks).
*   `intent_engine/` (Legacy template container containing instructions, templates, and sub-phases).

This dual-structure created path ambiguity, configuration redundancy, and reduced the ease of portability when downloading the framework into new repositories. 

Following user resolve, the AUM engine has been consolidated into a **single, portable, self-contained folder** (`.aum/`). This document reviews the architecture changes, design rationale, and portability impacts.

---

## 2. Structural Transformation (Before vs. After)

### Before Consolidation
```text
Workspace Root (AUM/)
├── .aum/                          <-- Active State Configuration
│   ├── config.json
│   ├── sphota.json
│   ├── INSTRUCTIONS.md
│   ├── PHILOSOPHY.md
│   └── intent_awakening/sparks.md
│
├── intent_engine/                 <-- Legacy Duplicate System
│   ├── AI_INSTRUCTIONS.md
│   ├── INTENT.md
│   ├── deepsleep/
│   │   ├── boundaries.md
│   │   └── logs/
│   ├── dreaming/blueprint_template.md
│   └── waking/clarification_template.md
│
└── [Editor Rules]                 <-- Referenced legacy intent_engine/
```

### After Consolidation (Self-Contained Portable Art)
```text
Workspace Root (AUM/)
├── .aum/                          <-- Single Source of Truth
│   ├── config.json
│   ├── sphota.json
│   ├── INSTRUCTIONS.md
│   ├── PHILOSOPHY.md
│   ├── architecture/
│   │   └── arb_001_consolidation.md  <-- This document
│   ├── templates/                 <-- Unified templates
│   │   ├── clarification_template.md
│   │   ├── blueprint_template.md
│   │   └── boundaries.md
│   ├── intent_awakening/sparks.md
│   └── sankalpas/                 <-- Workspace progress logs
│
└── [Editor Rules]                 <-- Points directly to .aum/
```

---

## 3. Detail of Completed Restructuring Actions

1.  **Unified Template Registry**: Created [templates/](file:///Users/universe/AUM/.aum/templates) within the `.aum/` folder to host standard checklists and guardrails, removing dependency on `intent_engine/`.
2.  **Configuration Redirect**: Updated all top-level rule files ([CLAUDE.md](file:///Users/universe/AUM/CLAUDE.md), [.github/copilot-instructions.md](file:///Users/universe/AUM/.github/copilot-instructions.md), [.cursorrules](file:///Users/universe/AUM/.cursorrules), [.clinerules](file:///Users/universe/AUM/.clinerules)) to reference paths inside `.aum/`.
3.  **Legacy Deprecation**: Safely removed the legacy `intent_engine/` directory from the workspace.

---

## 4. Śravaṇa-Manana-Nididhyāsana Vedic Audit

Per the Golden Guardrails in [PHILOSOPHY.md](file:///Users/universe/AUM/.aum/PHILOSOPHY.md), any architectural change must pass this three-fold audit:

1.  **Śravaṇa (Hearing)**:
    *   *Input*: The user requested to combine the framework into a single directory structure for easy deployment into other projects.
2.  **Manana (Reflecting)**:
    *   *Analysis*: Consolidation does not violate the core principles of AUM. Rather, it strengthens the **Invariance of the Sphoṭa** and **Vāk Sequence Integrity** by eliminating the duplicate and conflicting definitions under `intent_engine/`. All state transitions and triggers remain intact.
3.  **Nididhyāsana (Meditating/Integrating)**:
    *   *Resolution*: The framework has been successfully consolidated. The new structure has been validated against active files. The configuration rules are updated and fully tested.

---

## 5. Deployment / Portability Instructions for Other Projects

To deploy the AUM Cognitive framework to any new project, copy the following files/directories to the target project's root:
1.  `.aum/` directory (includes config, templates, and active state schemas).
2.  Any relevant editor configurations (e.g. `.cursorrules`, `.clinerules`, or `CLAUDE.md`) modified to match the target environment.
