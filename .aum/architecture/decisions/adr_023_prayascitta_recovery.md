---
title: "Architecture Decision Record: Self-Healing Build Recovery (Prāyaścitta)"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing the self-healing compile/test execution runner (Prāyaścitta)."
---

# Architecture Decision Record (ADR) Log: ADR-023

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-023
  Subject     : Self-Healing Build Recovery (Prāyaścitta)
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.23.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements an **automated self-healing compilation runner** (`scripts/run_tests_with_healing.js`). The wrapper intercepts compiler stack traces, matches issues to recovery solutions (such as native bindings skipping or cache locks), executes corrections (*Prāyaścitta*), and restarts execution cleanly.

---

## 2. Context & Problem Statement

Vite compiler environments contain hidden optional dependencies that skip installation on specific runner VMs. Junior developer agents lack environment knowledge to recover from native build binding errors, halting CI pipelines.

---

## 3. Theoretical & Cognitive Foundations

### A. System Atonement (Prāyaścitta)
*   **Prāyaścitta** restores system equilibrium by repairing deviations.
*   In software delivery, native binary skipped installations are *deviations*. Programmatic catch-repair routines act as the atonement process, cleansing environment parameters without human intervention.

---

## 4. Proposed Changes & Technical Architecture

### A. Script Details
*   File Location: [run_tests_with_healing.js](file:///Users/universe/AUM/scripts/run_tests_with_healing.js)
*   Wrapper execution: Spawns the compiler.
*   Traps standard error logs. If matching `@rolldown/binding` missing, triggers installation and retries.

---

## 5. System Impact & Improvements

*   **Self-Healing Deployments**: Blocks build errors from stopping the deployment pipeline.
*   **Robust Agent Actions**: Agent runs can resolve environment dependencies autonomously.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the instruction to build the self-healer (ADR-023) as the **Śruti** (revelation) calling for **Prāyaścitta-Anuṣṭhāna** (performance of corrective actions).

### 2. Manana (Reflecting / Contemplation)
We observe that compilation errors correspond to **Karmic Obstacles** (past environment settings). Executing automatic repair rituals restores alignment (**Kriyā Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The decision was recorded in [adr_023_prayascitta_recovery.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_023_prayascitta_recovery.md).
