---
title: "Architecture Decision Record: AUM CLI Intent Orchestrator"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing the central AUM CLI Intent Orchestrator wrapper command utility."
---

# Architecture Decision Record (ADR) Log: ADR-024

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-024
  Subject     : AUM CLI Intent Orchestrator
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.24.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements a centralized **AUM CLI Intent Orchestrator** script (`scripts/aum.js`). This tool unites the context pruner, linter check, self-healer compiler, and document parser into a single command-line interface.

---

## 2. Context & Problem Statement

Calling multiple individual scripts during cognitive turn executions introduces developer friction and leads to inconsistent verification checks. We need a unified tool that manages workspace focus, validation, compilation, and documentation deployment in one sequence.

---

## 3. Theoretical & Cognitive Foundations

### A. Lifecycle Coordination (Pañcakṛtya Integration)
We consolidate all framework execution turns directly into the five cosmic acts:
1.  **Sṛṣṭi** (Creation): `start` -> extracts task context.
2.  **Sthiti** (Maintenance): `verify` -> compiles and self-heals bindings.
3.  **Saṃhāra** (Dissolution): `audit` -> runs fallacy lint blocks.
4.  **Tirobhāva** (Concealment) & **Anugraha** (Grace): `publish` -> compiles documentation data and pushes to remote.

---

## 4. Proposed Changes & Technical Architecture

### A. CLI Utility implementation
*   File Location: [aum.js](file:///Users/universe/AUM/scripts/aum.js)
*   Integrates execution of:
    - `node scripts/prune_context.js`
    - `node scripts/run_tests_with_healing.js`
    - `node scripts/aum_audit.js`
    - `node scripts/parse_docs.js`

---

## 5. System Impact & Improvements

*   **Single Entry Point**: AI agents and developers only need to remember one command tool (`node scripts/aum.js`).
*   **Absolute Safeguarding**: Ensures fallacy check is always executed before any code documentation is published.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the call to compile the CLI orchestrator (ADR-024) as the **Śruti** (revelation) calling for **Kriyā-Samanvaya** (integration of actions).

### 2. Manana (Reflecting / Contemplation)
We observe that segmented script execution is like scattered senses. Unifying them into a single command mimics **Samyama** (combined focus), locking workspace actions (**Kriya Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The decision was recorded in [adr_024_cli_orchestrator.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_024_cli_orchestrator.md).
