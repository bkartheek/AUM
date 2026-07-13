---
title: "Architecture Review Board: Vāda-Vidhī PR Code Reviews"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document mapping code review checklists, compilation fallacies, and pull request validations to the classical rules of Vedic debate (Vāda-Vidhī)."
---

# Architecture Review Board (ARB) Report: ARB-016

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-016
  Subject     : Vāda-Vidhī PR Review Integration
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.16.0
=====================================================================
```

---

## 1. Executive Summary

This report outlines the integration of the **Vāda-Vidhī PR Code Review** rules into the AUM Engine. By mapping pull request validations, semantic linter checks, and compiler tests to the classical rules of debate (*Vāda-Vidhī*) in the Nyāya and Buddhist logical traditions, we establish a structured, automated review process. This model ensures that no unaligned or broken code is merged into master, preserving repository stability.

---

## 2. Context & Problem Statement

In collaborative version control workflows:
*   **Arbitrary Merges**: AI agents and human developers push code and merge branches without rigorous logical checks, introducing compile regressions and formatting errors.
*   **Vague Code Review Criteria**: PR checks are often limited to checking if the code compiles, failing to analyze logical fallacies, duplicate helper additions, or documentation mismatch.

We require a rigorous, debate-based logic framework to govern branch review and merge approvals.

### What Was Affected
*   **Merge Quality & Stable Master Branch**: Inadequate code reviews led to regression drift and formatting violations in master.

### What Was Removed
*   None. This extends our active instruction manual.

---

## 3. Theoretical & Cognitive Foundations

The **Vāda-Vidhī** (Rules of Debate) in Indian logic (established in the *Nyāya Sūtras* and expanded by Buddhist logicians) defines the rules for logical debate (*Vāda*), the classification of valid arguments, logical fallacies (**Hētvābhāsa**), and specific grounds for defeat (**Nigrahasthāna**).

We map these debate categories directly to code reviews and PR approvals:

```text
         ┌────────────────────────────────────────────────────────┐
         │             VĀDA-VIDHĪ CODE REVIEW SCHEMA              │
         ├───────────────────┬────────────────────────────────────┤
         │ 1. PRATIJÑĀ       │ Proposition (The PR Description)   │
         │ 2. HETU           │ Reason (The Git Diff / Code changes)│
         │ 3. HĒTVĀBHĀSA     │ Fallacies (Logical & syntax bugs)  │
         │ 4. NIGRAHASTHĀNA  │ Defeat Grounds (Failed tests / Lints)│
         └───────────────────┴────────────────────────────────────┘
```

1.  **Pratijñā (Proposition)**: The initial statement to be proved. Mapped to the **Pull Request description and title**, stating what the code accomplishes.
2.  **Hetu (Reason / Evidence)**: The logical grounds for the proposition. Mapped to the **actual git diff modifications and test specifications**.
3.  **Hētvābhāsa (Logical Fallacies)**: Apparent but invalid reasons. Mapped to **type warnings, circular dependencies, dead code paths, and logic errors** caught during analysis.
4.  **Nigrahasthāna (Grounds for Defeat)**: Point at which a debater is declared defeated. Mapped to **failed compilation steps, broken unit tests, and style violations**. If a PR contains a *Nigrahasthāna*, it is instantly rejected and cannot be merged.

---

## 4. Proposed Changes & Technical Architecture

### A. Establish Vāda-Vidhī PR Rules in `INSTRUCTIONS.md`
We will append the **Vāda-Vidhī PR Rules** to [.aum/INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md).

### B. Create ADR-016 Log
Create [adr_016_vada_vidhi_reviews.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_016_vada_vidhi_reviews.md) in the decisions registry.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested the sequential implementation of the remaining Vedic philosophies, committing and pushing after each.
*   **Manana (Reflecting)**: Contemplating Vāda-Vidhī, PR reviews are precisely debates between the incoming code branch and the master invariants. Rejecting failed builds as *Nigrahasthāna* guarantees codebase sanity.
*   **Nididhyāsana (Integrating)**: We will write the ADR-016 log, update instructions, update the manifest, commit, and push.
