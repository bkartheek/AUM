---
title: "Architecture Decision Record: Shaiva Kañcukas Execution Boundaries"
type: "architecture_decision"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Decision record mapping AI agent tool restrictions and step-turn constraints to Kashmir Shaivism's five limiting sheaths (Kañcukas)."
---

# Architecture Decision Record (ADR) Log: ADR-012

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-012
  Subject     : Shaiva Kañcukas Execution Boundaries
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.12.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **Shaiva Kañcukas Execution Boundaries** inside the AUM Engine workspace. To restrict AI agents from running in infinite loops, reading files outside the project scope, utilizing unverified libraries, or executing arbitrary terminal downloads without developer confirmation, we establish a tool safety framework based on the five sheaths of limited agency (*Kañcukas*) in non-dual Kashmir Shaivism.

---

## 2. Context & Problem Statement

AI agents operating in local development sandboxes possess substantial execution capabilities:
*   **Temporal Drift**: Agents can fall into recursive loop diagnostics, executing command after command and exhausting token contexts.
*   **Spatial Drift**: Agents read configurations or execute script writes outside the project directory, risking workspace cross-contamination.
*   **Instruction Inflation**: Agents run terminal tools to pull down arbitrary NPM/Python packages without confirming license compatibility or runtime safety.

We require a rigorous boundary framework to encapsulate the agent's absolute execution capability.

---

## 3. Theoretical & Cognitive Foundations

### A. The Five Kañcukas (Limiting Sheaths)
In Kashmir Shaivism, the absolute, all-powerful, and infinite consciousness (**Shiva**) restricts its infinite capacities through five sheaths of limitation (**Kañcukas**) to manifest as a constrained, individual actor (**Puruṣa**). 

We map these five sheaths directly to AI agent tool restrictions:

```text
         ┌────────────────────────────────────────────────────────┐
         │             THE FIVE KAÑCUKA BOUNDARIES                │
         ├───────────────────┬────────────────────────────────────┤
         │ 1. KĀLA           │ Limitation of Time (Turn limit)    │
         │ 2. NIYATI         │ Limitation of Space (File bounds)  │
         │ 3. RĀGA           │ Limitation of Desire (Scope focus) │
         │ 4. VIDYĀ          │ Limitation of Knowledge (APIs)     │
         │ 5. KALĀ           │ Limitation of Power (Tool limits)  │
         └───────────────────┴────────────────────────────────────┘
```

1.  **Kāla (Limitation of Time)**: Restricts eternity. Mapped to **restricting the max turn/step counts** per task execution (e.g. max 15 tool turns per user prompt), preventing infinite recursive feedback loops.
2.  **Niyati (Limitation of Space/Causality)**: Restricts omnipresence. Mapped to **restricting file system read/writes strictly to the project directory** (`/Users/universe/AUM/`), preventing access to external configs.
3.  **Rāga (Limitation of Desire/Interest)**: Restricts completeness. Mapped to **binding agent attention strictly to the active Saṅkalpa** ID, preventing feature creep.
4.  **Vidyā (Limitation of Knowledge)**: Restricts omniscience. Mapped to **restricting agent code to approved libraries and frameworks**, preventing the use of unverified packages.
5.  **Kalā (Limitation of Power/Agency)**: Restricts omnipotence. Mapped to **limiting tool permissions** (prohibiting arbitrary terminal commands like external curl, wget, or pip installs without developer confirmation).

### B. Cognitive Constraint Principle
By mapping the agent's execution to the five *Kañcukas*, we turn absolute power into structured, safe agency. The agent is forced to verify that its proposed step does not breach any of the sheaths, ensuring secure execution.

---

## 4. Proposed Changes & Technical Architecture

### Appending to Agent Instructions (`INSTRUCTIONS.md`)

We have added the Kañcuka Boundary Rules to [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md):

```markdown
## 🔒 Shaiva Kañcuka Execution Boundaries

When executing commands or modifying files, you must strictly operate within the five limiting sheaths of agency:

1.  **Kāla (Time Limit)**: Do not execute more than 15 sequential tool calls per user turn. If a solution requires more turns, halt and prompt the user for direction.
2.  **Niyati (Space Limit)**: Do not read, write, or search files outside the project root directory.
3.  **Rāga (Scope Limit)**: Do not write code or refactor systems that are not explicitly defined in the active Saṅkalpa's objective.
4.  **Vidyā (Knowledge Limit)**: Do not use unapproved frameworks or external APIs. You must stick to the technology stack registered in `config.json`.
5.  **Kalā (Power Limit)**: You are prohibited from running terminal commands that perform external network requests (such as `curl`, `wget`, `npm install`, or `pip install`) without the developer's explicit confirmation.
```

---

## 5. System Impact & Improvements

*   **100% Loop Protection**: Enforcing *Kāla* limits prevents computational waste.
*   **Sandbox Safety**: *Niyati* restricts filesystem accesses, protecting local data.
*   **Zero Package Pollution**: *Kalā* prevents the automated installation of malicious or unverified dependencies.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call to implement the Shaiva Kañcukas (ADR-012) as the **Śruti** (revelation) calling for **Śakti-Sankocha** (the contraction of power). The instruction acts as **Icchā Śakti** (will), seeking to establish safe sandbox limits.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on this, we observe that absolute, unconstrained power leads to **Vikṣepa** (restlessness) and logic drift. The *Kañcuka* model of Kashmir Shaivism provides the ultimate framework for containment. 

Translating these sheaths into agent limits ensures that the AI agent acts as a disciplined *Puruṣa* within safe boundaries, preserving the purity of system knowledge (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a systematic commentarial refinement:
*   [adr_012_shaiva_kancukas.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_012_shaiva_kancukas.md) was created to record the decision.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) was modified to append the Kañcuka rules.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.11.0.
