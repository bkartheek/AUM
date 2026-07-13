---
title: "Architecture Decision Record: Mūla Sphoṭa Manifest"
type: "architecture_decision"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Decision record establishing the Mūla Sphoṭa global manifest and the Reverse Vāk Trace synchronization protocol."
---

# Architecture Decision Record (ADR) Log: ADR-006

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-006
  Subject     : Mūla Sphoṭa Manifest & Grantha Sync Protocol
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.6.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **Mūla Sphoṭa Global Manifest** and the **Reverse Vāk Trace** synchronization protocol. To eliminate configuration drift, reduce context window overhead, and maintain absolute synchronization between design documents and public codebase repositories, we introduce a central registry index ([MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md)) and enforce a validation guard on all agent file-write sequences.

---

## 2. Context & Problem Statement

As the AUM Cognitive workspace accumulated multiple templates, decisions, and instructions files, AI agents faced several operational issues:
*   **Documentation Decay**: Changes to public-facing documentation (such as `README.md` or core instructions) were often applied by agents directly, without updating the underlying Architecture Decision Records (ADRs) or active Saṅkalpa logs. This caused a split-reality between our design logs and public files.
*   **Context Window Waste**: In the absence of a global index manifest, agents were forced to scan and parse all files under `.aum/templates/`, `.aum/architecture/`, and `.aum/sankalpas/` to understand the workspace structure, wasting valuable token space.
*   **Undefined Safety Limits**: There was no explicit, written rule defining exactly *when* an edit to the codebase is considered "safe" or "unlocked" for execution.

### What Was Affected
*   **Documentation Synchronization**: The active files and documentation registry fell out of sync over time.
*   **AI Agent Alignment**: Agents lacked a single, central index to query rule hierarchies, leading to rule-breaching code modifications.

---

## 3. Theoretical & Cognitive Foundations

This architecture leverages two major Sanskrit linguistic and philosophical models:

### A. Mūla Sphoṭa (Primordial Unified Meaning)
In Sanskrit grammar theory, *Mūla Sphoṭa* represents the unified mass of meaning in the speaker's consciousness before it is partitioned into diverse syllables, words, and sentences. 
By placing a global manifest ([MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md)) at the root of `.aum/`, we establish a **Mūla Sphoṭa** layer. This single, unified index holds the core mappings of the entire workspace, allowing the agent to grasp the holistic structural design of the repo in a single reading.

### B. Śabda-Pūrvaka-Yoga (Reverse Vāk Trace)
*Śabda-Pūrvaka-Yoga* is the yogic grammar practice of tracing physical sound (*Vaikharī*) backward through mental sequencing (*Madhyamā*) and visual spark (*Paśyantī*) to its silent source (*Parā*). 

We translate this into a **Reverse Vāk Trace** synchronization protocol. If an agent tries to modify a physical public file (*Vaikharī*), the engine forces it to trace the change back through its mental blueprint and verify that the change is authorized by an active Saṅkalpa or ADR (*Parā*). If no design seed exists, the agent is prohibited from applying the edit until it has first created the ARB/ADR, ensuring code is always anchored to design.

---

## 4. Proposed Changes & Technical Architecture

### A. Created Global Manifest File
*   Created [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) to register all files, template functions, safety check-offs, and rules dependencies.

### B. Updated Agent Rules
*   Modified [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) to require agents to verify that public file changes are backed by active Saṅkalpas or ADR logs.

---

## 5. System Impact & Improvements

*   **Documentation Integrity**: Public files and design logs remain in perfect sync.
*   **Context Window Efficiency**: The agent only reads the lightweight manifest index (`MULA_SPHOTA.md`) at startup to navigate, saving token context.
*   **Explicit Safety Boundaries**: Safety conditions are clearly defined, giving agents a strict logical checklist before modifying files.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing)
The user requested a global manifest file containing records of folders, documentation sequence, safety checks, and a synchronization protocol between code modifications and design logs.

### 2. Manana (Reflecting)
Reflecting on the system structure, we found that documentation decay is a primary source of cognitive drift. Enforcing a *Reverse Vāk Trace* ensures that the codebase can never drift away from its design papers, preserving the framework's philosophical and technical purity.

### 3. Nididhyāsana (Meditating/Integrating)
The manifest file has been created, the instructions updated, `README.md` refreshed, and the commits pushed to branch `main` (`f6fb1e9`).

---

## 7. References & Appendix
*   [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) — The active manifest index.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — The active instructions manual.
*   *Vākyapadīya* by Bhartrihari — Foundational Sanskrit text on language philosophy.
