---
title: "Architecture Decision Record: Vāda-Vidhī PR Code Reviews"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record mapping code review checklists, compilation fallacies, and pull request validations to the classical rules of Vedic debate (Vāda-Vidhī)."
---

# Architecture Decision Record (ADR) Log: ADR-016

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-016
  Subject     : Vāda-Vidhī PR Code Reviews
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.16.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **Vāda-Vidhī PR Code Review** protocol inside the AUM Engine workspace. To establish absolute merge protection, prevent buggy code from entering the main branch, and structure type validation and review checklists during automated execution, we define a pull request auditing schema based on the rules of debate (*Vāda-Vidhī*), fallacies (*Hētvābhāsa*), and grounds for defeat (*Nigrahasthāna*) in classical Indian logic.

---

## 2. Context & Problem Statement

In automated code generation and collaborative branch merges:
*   **Regression Vulnerabilities**: AI agents frequently merge feature branches without checking for downstream linter warning violations, leading to broken tests.
*   **Informal Review Criteria**: Code reviews often lack formal logical check rules, ignoring code formatting consistency and documentation synchronizations.

We require a rigorous, debate-like validation framework to govern branch review and merge approvals.

---

## 3. Theoretical & Cognitive Foundations

### A. Vāda-Vidhī (Rules of Debate)
The **Vāda-Vidhī** (Rules of debate) in classical Indian logic (formulated in the *Nyāya Sūtras* and refined by Buddhist logicians) outlines how to conduct truth-seeking discussions (*Vāda*). It details the parts of an argument, logical fallacies (**Hētvābhāsa**), and criteria under which a statement is rejected and a debater is defeated (**Nigrahasthāna**).

We translate these categories directly to code reviews and PR approvals:

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

### B. Merge Protection Principle
By mapping code reviews to *Vāda-Vidhī*, the master branch is protected. Any code change must present valid evidence (*Hetu*) and contain zero logical fallacies (*Hētvābhāsa*) or compilation failures (*Nigrahasthāna*) to be accepted.

---

## 4. Proposed Changes & Technical Architecture

### Appending to Agent Instructions (`INSTRUCTIONS.md`)

We have added the Vāda-Vidhī PR Rules to [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md):

```markdown
## ⚖️ Vāda-Vidhī Code Review & Merge Rules

When reviewing code, validating pull requests, or preparing branch merges, you must enforce the Vāda-Vidhī debate checks:

1.  **Assert Pratijñā (Intent)**: Ensure the branch description explicitly declares the goal and maps out the target changes.
2.  **Verify Hetu (Code Evidence)**: The git diff modifications must map exactly to the declared proposition. Do not bundle unrelated changes.
3.  **Scan for Hētvābhāsa (Fallacies)**: Inspect the code for type warnings, circular imports, dead execution branches, and unhandled logic exceptions.
4.  **Enforce Nigrahasthāna (Defeat Criteria)**: Rebuild the project and run all tests. If the build fails, linter checks report errors, or tests fail, this constitutes a *Nigrahasthāna*. The PR must be blocked and rejected.
```

---

## 5. System Impact & Improvements

*   **Robust Master Branch**: Blocking PRs with *Nigrahasthāna* guarantees that master remains compilation-clean.
*   **Logical Purity**: Scanning for *Hētvābhāsa* eliminates logical fallacies and dead code.
*   **Structured Reviews**: PR discussions are bounded by precise, logical check criteria.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call to implement the Vāda-Vidhī PR Review model (ADR-016) as the **Śruti** (revelation) calling for **Nigrahasthāna-Lakṣaṇa** (the definition of defeat criteria). The instruction acts as **Icchā Śakti** (will), seeking to protect the main repository branch.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on this, we observe that merging untested code leads to **Rāga-Dveṣa** (attachment/repulsion caused by unstable systems) in team development. Gautama's *Nyāya Sūtras* provide the ultimate logical rules for dialectical debate. 

Translating these debate rules into PR approvals ensures that incoming code is audited as a rigorous truth argument, preserving the purity of system knowledge (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a systematic commentarial refinement:
*   [adr_016_vada_vidhi_reviews.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_016_vada_vidhi_reviews.md) was created to record the decision.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) was modified to append the Vāda-Vidhī rules.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.15.0.
