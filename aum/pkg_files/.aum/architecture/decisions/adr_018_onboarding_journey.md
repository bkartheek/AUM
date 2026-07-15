---
title: "Architecture Decision Record: Vedic Engineering Onboarding Journey"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing the interactive onboarding journey comparing classical Indian philosophy and modern software execution."
---

# Architecture Decision Record (ADR) Log: ADR-018

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-018
  Subject     : Vedic Engineering Onboarding Journey
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.18.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **Vedic Engineering Onboarding Journey** inside the documentation portal. To reduce cognitive load for junior developers and external team members lacking a background in Sanskrit metaphysics, we introduce a step-by-step side-by-side comparison interface that maps classical philosophical systems directly to compiler, typing, sandbox, and review workflows.

---

## 2. Context & Problem Statement

The AUM framework operates on a sophisticated cognitive model. However:
*   **High Onboarding Friction**: External team members cannot quickly understand why the codebase is structured around quarters of consciousness (*Māṇḍūkya*) or sheaths of restriction (*Shaiva Kañcukas*).
*   **Need for Analogical Bridges**: Developers need to understand the practical *why* of the architecture before reading raw, formal ADR logs.

We require a structured pedagogical interface.

---

## 3. Theoretical & Cognitive Foundations

### A. Upamāna (Analogy and Comparison)
In the Nyāya school of epistemology, **Upamāna** is a valid pramāṇa (means of valid knowledge). It operates by comparing an unknown object or concept to a known one. By establishing a direct, side-by-side analogy between Vedic metaphysics and modern compiler/linter systems, developers can instantly map their existing engineering knowledge to AUM's concepts.

### B. Mappings of the Onboarding Path

The guided journey maps the following seven steps:
1.  **Sāṅkhya Evolution ➔ Build Lifecycle**: Manifestation of Prakṛti (unmanifest code) to Bhūtas (compiled binary).
2.  **Shaiva Kañcukas ➔ Execution Sandboxes**: Restriction of consciousness via sheaths (turns, directory limits, scopes).
3.  **Advaita Vedānta ➔ Code Refactoring**: Eliminating superimposition (*Adhyāsa*) through negation (*Apavāda* / *Neti-Neti*).
4.  **Mīmāṃsā Hermeneutics ➔ Config Hierarchy**: Overlapping text rules resolved by Jaimini's hierarchical rules.
5.  **Spanda Event Pulsation ➔ WebSocket Streams**: Dynamic pulsation of Unmeṣa (emission) and Nimeṣa (subscription cleanup).
6.  **Navya-Nyāya Logic ➔ Strict Typing (AST)**: Structuring properties via subject (*Dharmin*) and relation limiters (*Avacchedaka*).
7.  **Vāda-Vidhī debate ➔ Code Reviews (PRs)**: Structuring reviews around Pratijñā (proposition), Hetu (evidence), and Nigrahasthāna (build failure).

---

## 4. Proposed Changes & Technical Architecture

### A. App.jsx View Mode State
We expand the app's state machine to support three navigation modes:
*   `selectedDoc = null` and `showJourney = false` ➔ **Dashboard**
*   `showJourney = true` ➔ **Vedic Engineering Guided Journey**
*   `selectedDoc = [DocObject]` ➔ **Document Reader**

### B. CSS Styling additions (`index.css`)
Custom layouts for comparative steps, timeline trackers, and sandalwood/saffron card borders to keep the site visual layout highly premium.

---

## 5. System Impact & Improvements

*   **Faster Onboarding**: Junior developers understand the framework in minutes.
*   **Conceptual Clarity**: Explains the exact engineering reason behind every metaphysical concept.
*   **Improved Accessibility**: Replaces dense reading with interactive roadmaps.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call for a developer onboarding journey (ADR-018) as the **Śruti** (revelation) calling for **Samanvaya** (harmonization of disparate systems). The instruction acts as **Icchā Śakti** (will), seeking to guide external minds.

### 2. Manana (Reflecting / Contemplation)
Reflecting on this, we observe that locking systems in exclusive Sanskrit jargon creates **Avidyā** (ignorance/disconnect) in collaborative workspaces. Utilizing *Upamāna* (comparison) bridges this gap, showing that classical Vedic logic is highly compatible with modern computer science, preserving system knowledge (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a commentarial refinement:
*   [adr_018_onboarding_journey.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_018_onboarding_journey.md) was created to record the decision.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.17.0.
