---
title: "Architecture Review Board: AUM CLI Intent Orchestrator"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the central AUM CLI Intent Orchestrator wrapper command utility."
---

# Architecture Review Board (ARB) Report: ARB-024

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-024
  Subject     : AUM CLI Intent Orchestrator
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.24.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a centralized CLI execution hub script `scripts/aum.js` integrating all sub-script tools under a unified Pañcakṛtya (Turn Lifecycle) invocation command structure. By wrapping the context pruner, linter check, self-healer compiler, and document parser into unified commands (`start`, `verify`, `audit`, `publish`), AUM provides developer agents with a single entry point for cognitive automation.

---

## 2. Context & Problem Statement

We have multiple distinct script systems (`aum_audit.js`, `prune_context.js`, `run_tests_with_healing.js`, `parse_docs.js`). As a result:
*   **Segmented Invocation**: The developer or AI agent must manually call different scripts at different phases.
*   **Workflow Inconsistency**: It is easy to skip linter audits before git pushes, letting debug comments bypass validation checks.

We require a single command utility that orchestrates the cognitive lifecycles.

---

## 3. Theoretical & Cognitive Foundations

### A. Pañcakṛtya (Turn Lifecycle Integration)
In Shaivism, the five actions (Pañcakṛtya) are performed by the supreme reality to manifest and maintain the cosmos.
In AUM:
*   **Sṛṣṭi (Creation / Intake)** maps to `node scripts/aum.js start` (runs `prune_context.js` to create the focus file maps).
*   **Sthiti (Maintenance / Verification)** maps to `node scripts/aum.js verify` (runs `run_tests_with_healing.js` to compile/test).
*   **Saṃhāra (Dissolution / Linter)** maps to `node scripts/aum.js audit` (runs `aum_audit.js` to prune logic errors).
*   **Tirobhāva (Concealment / Parser)** and **Anugraha (Grace / Commit)** map to `node scripts/aum.js publish` (runs `parse_docs.js` and staged commits to remote).

---

## 4. Proposed Changes & Technical Architecture

### A. CLI Utility Script (`scripts/aum.js`)
Build a Node CLI command router parsing:
*   `start` ➔ runs context compressor.
*   `verify` ➔ runs test runner with healing.
*   `audit` ➔ runs fallacy linter.
*   `publish` ➔ runs doc compiler and staged checks.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested implementation of the CLI entry point orchestrator.
*   **Manana (Reflecting)**: Consolidating tool boundaries under a single CLI mimics the central coordination of the mind (*Manas*).
*   **Nididhyāsana (Integrating)**: We will write the ADR-024 log, write `aum.js`, and verify it.
