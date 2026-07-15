---
title: "Architecture Review Board: Vedic Engineering Onboarding Journey"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the interactive onboarding journey comparing classical Indian philosophy and modern software execution."
---

# Architecture Review Board (ARB) Report: ARB-018

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-018
  Subject     : Vedic Engineering Onboarding Journey
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.18.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes introducing a **Vedic Engineering Guided Journey** into the documentation portal. By mapping complex Sanskrit metaphysical systems side-by-side with modern software engineering concepts (such as compilation lifecycles, sandbox boundaries, event subscription cleanups, and static AST typing), this interface lowers onboarding friction for junior developers and external team members lacking a background in Vedic philosophy.

---

## 2. Context & Problem Statement

While the AUM framework is deeply documented in ADR logs (ADR-001 through ADR-017), the current format:
*   **Assumes Prior Vedic Knowledge**: Terms like *Sāṅkhya Evolution*, *Kañcukas*, *Spanda*, and *Hētvābhāsa* present a high cognitive barrier for new developers.
*   **Dense Document Reading**: Entering directly into raw architectural logs is confusing for team members who want to understand the overarching system logic first.

We require a guided, visual, and conceptual interface to compare the philosophy with its software implementation.

---

## 3. Theoretical & Cognitive Foundations

### A. Anumāna & Upamāna (Inference and Analogy)
In the Nyāya school of epistemology:
*   **Upamāna (Comparison/Analogy)** is a valid means of acquiring knowledge. By comparing an unfamiliar concept (Vedic philosophy) with a highly familiar one (modern design patterns and compiler lifecycles), the learner gains rapid understanding.
*   **Anumāna (Inference)**: Visualizing the structure allows junior developers to infer the execution behavior of the engine based on the metaphysical rules.

### B. Vaikharī Presentation
This extends our physical presentation (*Vaikharī*) of AUM, shifting it from a plain index reader to an active educational path.

---

## 4. Proposed Changes & Technical Architecture

### A. New "Guided Journey" Tab inside `App.jsx`
Introduce a third primary view state (`viewMode` = `'dashboard' | 'journey' | 'document'`).
The `journey` view will render an interactive, step-by-step roadmap:
*   **Step 1**: Sāṅkhya evolution ➔ Build/Compilation lifecycle
*   **Step 2**: Shaiva Kañcukas sheaths ➔ Execution sandbox parameters
*   **Step 3**: Advaita Neti-Neti ➔ Code refactoring and de-duplication rules
*   **Step 4**: Mīmāṃsā Hermeneutics ➔ Configuration conflict hierarchy
*   **Step 5**: Spanda event pulsation ➔ WebSocket reactive event cleanups
*   **Step 6**: Navya-Nyāya relations ➔ Strict compiler type limits (AST)
*   **Step 7**: Vāda-Vidhī debate rules ➔ Git branch code reviews (PR approval)

### B. Interactive Design System
*   **Vedic Sandstone Theme Extension**: Saffron and sandalwood card borders, visual flow arrows, interactive progress tabs, and tooltips for Sanskrit definitions.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested a visual onboarding journey for developers who lack a Vedic background.
*   **Manana (Reflecting)**: Upamāna is the perfect pedagogical tool. A side-by-side roadmap bridges the cognitive gap between AI engineering and Vedic systems.
*   **Nididhyāsana (Integrating)**: We will write the implementation plan, gain approval, update `App.jsx`, verify the build, commit, and push.
