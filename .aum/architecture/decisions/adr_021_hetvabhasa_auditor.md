---
title: "Architecture Decision Record: Programmatic Fallacy CLI Auditor (Hētvābhāsa)"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record detailing the validation checks of the Git pre-commit fallacy (Hētvābhāsa) auditor script."
---

# Architecture Decision Record (ADR) Log: ADR-021

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-021
  Subject     : Programmatic Fallacy CLI Auditor (Hētvābhāsa)
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.21.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements a programmatic **Git Pre-commit static linter** script (`scripts/aum_audit.js`). It scans files for logical fallacies (*Hētvābhāsa*), including out-of-scope edits (violating the active Saṅkalpa), placeholder stubs, and code-smells, blocking Git staging on failure.

---

## 2. Context & Problem Statement

Human code reviews (ADR-016) are error-prone. Agents or junior engineers can stage unfinished files, merge untested lines, or edit files outside the focal scope. We require programmatic, file-level validation checks before code reaches VCS staging.

---

## 3. Theoretical & Cognitive Foundations

### A. Epistemological Auditing (Hētvābhāsa Rules)
We map three distinct coding flaws directly to classical Nyāya fallacies:
1.  **Savyabhicāra (Irregular / Scope Drift)**: Code edits occurring outside the files specified in the active focus lock file.
2.  **Asiddha (Unproved / Stub Codes)**: Staging empty function stubs, unfulfilled promises, or placeholder `TODO`/`FIXME` indicators.
3.  **Viruddha (Contradictory Rules)**: Edits that violate Yamas/Niyamas boundaries (e.g., hardcoded secrets, bypass scripts).

---

## 4. Proposed Changes & Technical Architecture

### A. Auditor Script Details
*   File Location: [aum_audit.js](file:///Users/universe/AUM/scripts/aum_audit.js)
*   The script reads `.aum/sphota.json` to find the active Saṅkalpa file.
*   Queries `git diff --name-only --cached` to list staged modifications.
*   Validates:
    - If a staged file is NOT registered in the Saṅkalpa's targets list, fail with **Savyabhicāra**.
    - If code contains `console.log` or stub words (`TODO` / `FIXME`), fail with **Asiddha**.

---

## 5. System Impact & Improvements

*   **Programmatic Focus Locking**: Enforces the Saṅkalpa strictly during git operations.
*   **Cleaner Commit History**: Prevents debug files or comments from slipping into code reviews.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the instruction to build the CLI auditor (ADR-021) as the **Śruti** (revelation) calling for **Hētvābhāsa-Nirāsa** (elimination of fallacies).

### 2. Manana (Reflecting / Contemplation)
We observe that logic errors and scope creep correspond to **Rāga-Dveṣa** (mental attachments/distractions). Implementing static checks anchors focus (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The decision was recorded in [adr_021_hetvabhasa_auditor.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_021_hetvabhasa_auditor.md).
