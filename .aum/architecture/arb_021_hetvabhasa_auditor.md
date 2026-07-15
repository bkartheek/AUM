---
title: "Architecture Review Board: Programmatic Fallacy CLI Auditor (Hētvābhāsa)"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document detailing the validation checks of the Git pre-commit fallacy (Hētvābhāsa) auditor script."
---

# Architecture Review Board (ARB) Report: ARB-021

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-021
  Subject     : Programmatic Fallacy CLI Auditor (Hētvābhāsa)
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.21.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a Git pre-commit static audit script `scripts/aum_audit.js` mapping logical fallacies (*Hētvābhāsa*) to software code violations. By programmatically scanning file modifications for commented-out debug options, orphan TODO comments, and changes outside of active task paths, AUM enforces branch invariants before commits are staged.

---

## 2. Context & Problem Statement

While ADR-016 defines Vāda-Vidhī review fallacies, these checklists:
*   **Rely on Manual Checking**: Human reviewers can miss simple syntax traps, empty test stubs, or legacy commented blocks.
*   **Allow Unaligned Commits**: Agents can write code outside the active scope if focus lock files are not programmatically validated against staged file paths.

We require automated, script-level logical validation checks.

---

## 3. Theoretical & Cognitive Foundations

### A. Hētvābhāsa (Logical Fallacies)
In Nyāya epistemology, **Hētvābhāsa** represents invalid reasons or fallacies in an argument:
*   **Asiddha (Unproved Premise)**: Commented-out stubs or empty functions that claim to solve a problem but contain no operational code.
*   **Viruddha (Contradictory Logic)**: Staging changes that directly violate the active Yamas or safety rules (e.g., bypassing network restrictions).
*   **Savyabhicāra (Irregular / Out-of-Scope Edits)**: Editing files outside of the focus path listed in the active Saṅkalpa registry.

---

## 4. Proposed Changes & Technical Architecture

### A. Validator Script (`scripts/aum_audit.js`)
Build a Node script that runs:
1.  **Scope Verification**: Compares staged git changes against target files listed in the active `.aum/sankalpas/` lock.
2.  **Boilerplate / Stub Verification**: Searches for placeholder comments (`TODO`, `FIXME`, `console.log`).
3.  **Vedic Syntax Audit**: Validates Sanskrit nomenclature spelling invariants.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested implementation of the three remaining concepts, including Hētvābhāsa.
*   **Manana (Reflecting)**: Restricting code commits via git hook logical audits ensures master code branch integrity (*Nigrahasthāna*).
*   **Nididhyāsana (Integrating)**: We will write the ADR-021 log, write `aum_audit.js`, and verify it.
