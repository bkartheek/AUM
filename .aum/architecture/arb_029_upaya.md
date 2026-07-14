---
title: "Architecture Review Board: Catur-Upāya Error Resolver"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing Catur-Upāya four-stage recovery and error resolutions."
---

# Architecture Review Board (ARB) Report: ARB-029

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-029
  Subject     : Catur-Upāya Error Resolver
  Status      : Pending Review
  Author      : Yogi (Guardian Agent)
  Date        : 2026-07-14
  Target Ver  : v1.29.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a **Catur-Upāya Error Resolver** utility (`scripts/upaya.js`). The resolver structures compiler errors recovery into four progressive strategies: Sāma (adjust parameters), Dāna (mock stubs), Bheda (isolate code), and Daṇḍa (git rollback).

---

## 2. Context & Problem Statement

Standard compiler recovery runs basic commands. If an error is unresolvable by basic script actions, the build crashes, halting the CI pipeline. We need a progressive recovery runner.

---

## 3. Theoretical & Cognitive Foundations

### A. The Four Upāyas
1.  **Sāma (Conciliation)**: Softening constraints (e.g. toggling compiler warning configs).
2.  **Dāna (Concession)**: Satisfying compiler requirements (e.g. generating empty stubs for missing modules).
3.  **Bheda (Separation)**: Isolating components to compile the rest of the application.
4.  **Daṇḍa (Force)**: Git resetting the target files to a clean commit to recover state sanity.

---

## 4. Proposed Changes & Technical Architecture

### A. Upāya Script (`scripts/upaya.js`)
*   Executes compilation commands.
*   Sequentially runs Upāya strategies on error outputs.
