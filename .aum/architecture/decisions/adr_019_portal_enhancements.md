---
title: "Architecture Decision Record: Portal Navigation and Onboarding Enhancements"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record detailing the collapsible sidebar, context-sensitive back navigation, and expansion of the onboarding journey to cover all 18 ADR logs."
---

# Architecture Decision Record (ADR) Log: ADR-019

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-019
  Subject     : Portal Navigation and Onboarding Enhancements
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.19.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements crucial navigation and content enhancements inside the documentation portal:
1.  **Collapsible Sidebar Layout**: Enforces layout flexibilities to expand reading viewport.
2.  **Context-Preserving Navigation**: Implements state-level memory (*Dharā-Vāha-Smṛti*) to return users back to their active step in the onboarding journey.
3.  **Comprehensive 18-Step Comparative Journey**: Expands the onboarding roadmap to map all 18 decisions side-by-side.
4.  **Embedded Metaphysical Engineering Handbook**: Places core concept references directly on the default home view.

---

## 2. Context & Problem Statement

The previous Vaikharī documentation portal layout:
*   **Wasted Viewport Space**: A fixed-width sidebar restricted horizontal reading room for wide tables.
*   **Cognitive Disconnection**: Navigating from a step in the guided journey to check an ADR log and returning back reset the user's state to the default home screen, losing their step.
*   **Incomplete Guided Journey**: Skipping ADRs 1–10 and 17–18 limited the onboarding value.

---

## 3. Theoretical & Cognitive Foundations

### A. Dharā-Vāha-Smṛti (Unbroken Stream of Memory)
In classical Indian cognitive theory:
*   **Dharā-Vāha-Smṛti** is the cognitive ability to maintain an unbroken stream of attention or memory across state shifts. 
*   Resetting a developer to the home screen after viewing a document breaks this continuity, causing cognitive re-indexing overhead. By mapping a `docSource` context state, we preserve the user's exact coordinate location in their guided path.

### B. Upamāna Expansion
Expanding the side-by-side journey to cover all 18 ADRs ensures that the analogical mapping (*Upamāna*) is comprehensive, tracing the architecture from its core statelessness (Brahman) up to visual page deployment (Vaikharī).

---

## 4. Proposed Changes & Technical Architecture

### A. Collapsible Sidebar UI
*   Introduce `sidebarCollapsed` state in `App.jsx`.
*   Style classes in `index.css` handle translating `.aum-sidebar` off-screen, shifting `.aum-main-content` to occupy full width, and rendering a floating menu button.

### B. Navigation Source Memory
*   Introduce `docSource` state tracking `'dashboard' | 'journey'`.
*   If `selectedDoc` is closed, the back button returns the user to the journey at `activeJourneyStep` if `docSource === 'journey'`.

### C. Dashboard Metaphysical Engineering Handbook
*   Add a visual, detailed section on the dashboard homepage explaining the quarters of Māṇḍūkya, Pramāṇas, and Kañcukas sheaths.

---

## 5. System Impact & Improvements

*   **Improved Usability**: Users can collapse the sidebar to read dense code.
*   **Context Preservation**: Prevents navigation state resets.
*   **Full Conceptual Coverage**: Maps every single architectural decision.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call for portal enhancements (ADR-019) as the **Śruti** (revelation) calling for **Sādhanā** (continuous practice/integration). The instruction acts as **Icchā Śakti** (will), seeking to refine the portal.

### 2. Manana (Reflecting / Contemplation)
Reflecting on this, we observe that breaking user state flow causes **Vikṣepa** (mental distraction/scatteredness) during framework research. Enforcing *Dharā-Vāha-Smṛti* in back-navigation preserves mental alignment and clarity (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a commentarial refinement:
*   [adr_019_portal_enhancements.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_019_portal_enhancements.md) was created to record the decision.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.18.0.
