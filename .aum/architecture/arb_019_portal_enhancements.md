---
title: "Architecture Review Board: Portal Navigation and Guided Journey Enhancements"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document detailing the collapsible sidebar, context-sensitive back navigation, and expansion of the onboarding journey to cover all 18 ADR logs."
---

# Architecture Review Board (ARB) Report: ARB-019

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-019
  Subject     : Portal Navigation and Onboarding Enhancements
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.19.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes critical user experience and content upgrades to the documentation portal:
1.  **Collapsible Sidebar**: Introduce a toggle to collapse the navigation pane, maximizing readability for code and diagrams.
2.  **Context-Sensitive Back Button**: Track whether a user navigated to an ADR from the dashboard or the onboarding journey, returning them to their exact step instead of resetting to home.
3.  **Comprehensive 18-Step Guided Journey**: Expand the comparative onboarding roadmap to cover all decisions (ADR-001 through ADR-018).
4.  **Onboard Handbook on Dashboard**: Embed a detailed "Vedic Software Engineering Handbook" directly on the main page.

---

## 2. Context & Problem Statement

As the portal grows:
*   **Reading Space**: The fixed 320px sidebar leaves limited room for viewing wide tables and code blocks in ADRs.
*   **Navigation Resets**: When a user clicks to read a technical ADR from Step 4 of the guided journey and clicks "Back", the page resets to the Dashboard, losing their active step.
*   **Incomplete Journey**: The journey currently skips ADRs 1–10 and 17–18, missing the conceptual foundation.

---

## 3. Theoretical & Cognitive Foundations

### A. Dharā-Vāha-Smṛti (Continuous Unbroken Memory)
In Indian cognitive theories, **Dharā-Vāha-Smṛti** is the continuous stream of memory. A user's navigation should mimic this flow. Resetting the user to the home screen after they read a document breaks their cognitive stream. By tracking the navigation source, we preserve this continuity, returning the mind to its previous locus of focus (*Dharā*).

### B. Upamāna Expansion (Full Metaphysical Mapping)
Expanding the journey to all 18 decisions ensures that the analogical bridge (*Upamāna*) is comprehensive, tracing the architecture from its spiritual foundation (Brahman statelessness) to its mechanical deployment (Vaikharī pages).

---

## 4. Proposed Changes & Technical Architecture

### A. Sidebar Collapsing
Add a state `sidebarCollapsed` in `App.jsx`. When true:
*   Add a `.collapsed` class to the sidebar, translating it off-screen.
*   Add an expand button (`<Menu />`) floating on the top-left of the main layout.

### B. Navigation Source Memory
Add `docSource` state (`'dashboard' | 'journey'`) to preserve the path. If they click "Back" and `docSource === 'journey'`, return them to the Journey step panel.

### C. 18-Step Onboarding Data
Inject detailed side-by-side comparisons for all 18 ADRs, explaining the philosophy and modern software execution for each.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested a collapsible sidebar, back button memory, and a comprehensive onboarding journey.
*   **Manana (Reflecting)**: Unbroken memory mapping (*Dharā-Vāha-Smṛti*) is the perfect logical fix for the back button behavior. Expanding the handbook directly on the main page ensures immediate value for developers.
*   **Nididhyāsana (Integrating)**: We will write the implementation plan, get approval, apply edits, build, commit, and push.
