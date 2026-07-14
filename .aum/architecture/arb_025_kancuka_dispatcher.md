---
title: "Architecture Review Board: Kañcukas Intent Dispatcher"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the low-latency intent classifier dispatcher and Kañcukas sandboxing sheaths."
---

# Architecture Review Board (ARB) Report: ARB-025

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-025
  Subject     : Kañcukas Intent Dispatcher
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.25.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a dynamic **Kañcukas Intent Dispatcher** script (`scripts/dispatcher.js`). By splitting cognitive tasks into a fast-intake classifier (Prāṇa) and injecting safety sheaths (Kañcukas), the engine detects user intent in under 150ms and compiles custom, context-isolated execution sandboxes before invoking developer agents.

---

## 2. Context & Problem Statement

Feeding broad workspace trees and system rules to large models results in:
*   **High Latency**: Initial task parsing takes multiple seconds.
*   **Context Drift**: AI agents with wide workspaces can wander outside their target tasks or accidentally access restricted folders.

We require a lightweight intent classifier that seeds restrictive boundaries (sheaths) on execution prompts.

---

## 3. Theoretical & Cognitive Foundations

### A. Kañcukas (Limiting Sheaths)
In Shaiva metaphysics, the absolute Shiva restricts his infinite nature through five limiting sheaths (Kañcukas) to manifest as a finite, focused agent (Purusha):
1.  **Rāga (Scope / Desire)**: Restricts infinite capability to specific resolve limits.
2.  **Kāla (Time / Duration)**: Restricts eternity to linear sequence and turn counts.
3.  **Niyati (Space / Location)**: Restricts omnipresence to localized directory boundaries.
4.  **Vidyā (Knowledge / Tools)**: Restricts omniscience to selected cognitive tools.
5.  **Kalā (Power / Agency)**: Restricts omnipotence to minor authorized capabilities.

---

## 4. Proposed Changes & Technical Architecture

### A. Dispatcher Script (`scripts/dispatcher.js`)
Build a Node classifier script that:
1.  **Detects Intent (Prāṇa)**: Parses keyword patterns (e.g. `refactor`, `audit`, `fix`) to determine intent category in under 100ms.
2.  **Seeds Sheaths (Kañcukas)**:
    - Sets turn count limits (**Kāla**).
    - Sets path filters (**Niyati**).
    - Disables unauthorized tools (**Vidyā**).

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested implementation of the Kañcukas sandboxing dispatcher.
*   **Manana (Reflecting)**: Restricting an agent's senses (input files) and actions (command tools) is the only way to achieve absolute safety in LLM runtimes.
*   **Nididhyāsana (Integrating)**: We will write the ADR-025 log, implement `dispatcher.js`, and verify it.
