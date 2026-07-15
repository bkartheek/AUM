---
title: "Architecture Decision Record: Persistent Cognitive Memory Caching (Saṃskāras)"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record detailing the implementation of a persistent cognitive cache (Saṃskāra database) storing bug resolutions and learnings."
---

# Architecture Decision Record (ADR) Log: ADR-020

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-020
  Subject     : Persistent Cognitive Memory Caching (Saṃskāras)
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.20.0
=====================================================================
```

---

## 1. Executive Summary

This decision establishes a structured **Persistent Cognitive Memory Cache** (the *Saṃskāra* system) under `.aum/samskaras/`. By writing task-completion reports, debug resolutions, and linter gotchas to JSON files, AUM enables developer agents to load and parse past cognitive impressions at startup. This prevents recurring compiler binding errors, configuration conflicts, and logical drifts.

---

## 2. Context & Problem Statement

AI coding agents are loaded into a workspace in a stateless manner. This leads to:
*   **Knowledge Dissolution**: A bug resolved in a previous task is forgotten in the next session.
*   **Wasted Turns**: The agent must re-discover how to configure Vite options, resolve native compilation bindings on Linux runners, or format layouts from scratch.

We require a lightweight, workspace-committed memory registry.

---

## 3. Theoretical & Cognitive Foundations

### A. Saṃskāras and Vāsanās (Cognitive Caching)
In Patanjali's Yoga philosophy:
*   Every cognitive experience leaves a residual trace in the subconscious called a **Saṃskāra** (impression).
*   Multiple related *Saṃskāras* combine to form **Vāsanās** (habits/tendencies) that influence subsequent actions.
*   By writing structured experience logs to `.aum/samskaras/`, we record code impressions. When loading, these impressions generate aligned behavior tendencies (*Vāsanās*) in the agent's prompt, preventing repetitious mistakes.

---

## 4. Proposed Changes & Technical Architecture

### A. Memory Database Folder
Create `.aum/samskaras/` directory to store JSON memory records.

### B. Standard Schema Structure
Each Saṃskāra record follows a structured layout:
```json
{
  "sankalpa_id": "sankalpa_017_pages_portal",
  "summary": "Tailwind rendering fix and Vite binding resolution.",
  "learnings": [
    "Tailwind was unconfigured in the portal template; fallback to Vanilla CSS variable variables in index.css is required for layout themes.",
    "GitHub Actions standard Linux runners omit native compiler bindings for Rolldown under Vite v8. Run 'npm install @rolldown/binding-linux-x64-gnu' before compile."
  ]
}
```

### C. Parser and UI Compilation
*   `scripts/parse_docs.js` reads all `.json` files inside `.aum/samskaras/` and compiles them into a unified list inside `docs_data.json`.
*   `App.jsx` renders a list of memories on the Dashboard home page as a **Memory Ledger**, showing resolved experiences at a glance.

---

## 5. System Impact & Improvements

*   **Zero-Shot Bug Prevention**: Future agent runs immediately load the Rolldown native binding fix, preventing CI failures.
*   **Unbroken Learning Stream**: Knowledge persists across commits, creating a growing workspace documentation system.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call to build persistent caches (ADR-020) as the **Śruti** (revelation) calling for **Saṃskāra-Saṅgraha** (assembly of memory impressions).

### 2. Manana (Reflecting / Contemplation)
Reflecting on this, we observe that statelessness is analogous to a blank slate (*Tabula Rasa*), which leads to **Sāṃsārika** loops (repeating the same actions and mistakes). Committing *Saṃskāras* to the version control system acts as a persistent memory vault (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a commentarial refinement:
*   [adr_020_samskara_memory.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_020_samskara_memory.md) was created to record the decision.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.19.0.
