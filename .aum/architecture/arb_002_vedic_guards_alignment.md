---
title: "Architecture Review Board: Vedic Guardrails Integration"
type: "architecture_review"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Review document detailing the integration of Pramāṇa audits, Samyama guard focus locks, and Yamas/Niyamas rules"
---

# Architecture Review Board (ARB) Report: ARB-002

**Subject**: Integrating Vedic Cognitive Guardrails into the AUM Engine  
**Status**: Pending Review  
**Author**: Antigravity AI Agent  
**Date**: 2026-07-13  

---

## 1. Motivation & Purpose

To ensure that AI agents operating within an AUM-enabled workspace stay strictly aligned with user-defined intents and do not drift during execution, we are integrating three Vedic and Yogic cognitive control frameworks:
1.  **Pramāṇa Audit**: Enforcing sources of right knowledge (*Śabda*, *Pratyakṣa*, *Anumāna*) before any file modification.
2.  **Samyama Guard**: Implementing a *Dhāraṇā* focus statement requirements for all action sequences.
3.  **Yamas & Niyamas**: Structuring workspace rule sets in `config.json` into ethical restraints and active clean observances.

---

## 2. Proposed System Design Changes

### A. `.aum/config.json`
Re-organize current rules under explicit Vedic categories:
*   `yamas`: Asteya (non-stealing of code/comments), Satya (no placeholder stubs), Ahimsa (no compile breakages).
*   `niyamas`: Sauca (formatting & linting purity), Svadhyaya (logic checking).

### B. `.aum/INSTRUCTIONS.md`
Add strict runtime protocols for the AI agent:
*   **Pramāṇa Validation**: Before calling edit/write tools, the agent must output a Pramāṇa block citing its authority source (*Śabda*), observed context (*Pratyakṣa*), and logical inference (*Anumāna*).
*   **Dhāraṇā Focus Statement**: Before any file modification, the agent must output a single-line focal check confirming zero semantic drift from the active Saṅkalpa.

### C. `.aum/templates/boundaries.md`
Update default boundary constraints to reflect the Yamas and Niyamas classification.

---

## 3. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested a new ARB workflow guardrail and suggested incorporating more Vedic philosophy to prevent AI agent drift.
*   **Manana (Reflecting)**: Introducing Pramāṇa and Samyama checks gives the AI agent a strict logical and cognitive boundary. Organizing configuration constraints as Yamas (restraints) and Niyamas (observances) translates raw system rules into clean development ethics.
*   **Nididhyāsana (Integrating)**: These updates will be written directly to the `.aum/` framework configuration, updating instructions, configuration schemas, and templates.
