---
title: "Architecture Review Board: Self-Healing Build Recovery (Prāyaścitta)"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the self-healing compile/test execution runner (Prāyaścitta)."
---

# Architecture Review Board (ARB) Report: ARB-023

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-023
  Subject     : Self-Healing Build Recovery (Prāyaścitta)
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.23.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a self-healing compiler/test executor wrapper script (`scripts/run_tests_with_healing.js`). By establishing atonement/corrective protocols (*Prāyaścitta*), this module traps compilation stack trace errors, maps them to known healing routines (e.g. installing native bundler bindings, clearing caching directories, or fixing npm configuration options), executes them, and automatically re-runs.

---

## 2. Context & Problem Statement

Vite compiles (especially under native bundlers like Rolldown) occasionally fail:
*   **Optional Dependency Skip**: standard npm operations skip platform-specific native binds on standard runner VMs, crashing the build.
*   **Manual Intervention Required**: AI agents lack recovery profiles for native environment errors, resulting in deployment failures.

We need automated self-healing build execution loops.

---

## 3. Theoretical & Cognitive Foundations

### A. Prāyaścitta (Corrective Atonement)
In classical Indian rituals:
*   **Prāyaścitta** refers to an action taken to correct, cleanse, or balance past errors and transgressions.
*   In software operations, runtime stack trace crashes represent system transgressions (*Doṣas*). The self-healing wrapper implements *Prāyaścitta* by catching these failures, running targeted corrections, and restoring the workspace to a compiling state, preventing manual termination blocks.

---

## 4. Proposed Changes & Technical Architecture

### A. Wrapper Script (`scripts/run_tests_with_healing.js`)
Build a Node script that runs:
1.  **Starts Vite Build**: Spawns `npm run build` inside `docs_portal/`.
2.  **Error Trap**: Catches output errors. If the error matches known patterns (e.g., `@rolldown/binding-linux-x64-gnu` missing):
    - Run healing step: `npm install @rolldown/binding-linux-x64-gnu --legacy-peer-deps`.
    - Automatically restart build run.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested implementation of the three remaining concepts, including Prāyaścitta.
*   **Manana (Reflecting)**: Autonomously repairing environment dependencies increases execution throughput and protects CI runners.
*   **Nididhyāsana (Integrating)**: We will write the ADR-023 log, write `run_tests_with_healing.js`, and verify it.
