---
title: "Architecture Review Board: Shaiva Kañcukas Execution Boundaries"
type: "architecture_review"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Review document mapping AI agent tool restrictions and step-turn constraints to Kashmir Shaivism's five limiting sheaths (Kañcukas)."
---

# Architecture Review Board (ARB) Report: ARB-012

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-012
  Subject     : Shaiva Kañcukas Integration
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.12.0
=====================================================================
```

---

## 1. Executive Summary

This report outlines the integration of the **Shaiva Kañcukas Execution Boundaries** into the AUM Engine. By mapping AI agent tool capabilities, token steps, directory access, and libraries to Kashmir Shaivism's five limiting sheaths (*Kañcukas*), we establish a structured, cosmic boundary model for automated execution. This model prevents agents from running in infinite loops, accessing unapproved files, or performing unauthorized system alterations.

---

## 2. Context & Problem Statement

Autonomous AI agents operate in sandbox or terminal environments with considerable execution power. If left unconstrained, they fall into operational pathologies:
*   **Infinite Recursion (Temporal Drift)**: Agents execute commands in loops, wasting computational compute.
*   **Sandbox Escapes (Spatial Drift)**: Agents write code or read configurations outside the target project folder, risking security breaches.
*   **Instruction Inflation (Scope Drift)**: Agents use unapproved APIs or execute unverified terminal downloads (e.g. `pip install` or `npm install` without explicit approvals).

We need a rigorous boundary framework to encapsulate the agent's absolute execution capability.

### What Was Affected
*   **System Security & Resource Cost**: Unconstrained agent tool executions led to compute waste and security hazards.

### What Was Removed
*   None. This extends our active instruction manual.

---

## 3. Theoretical & Cognitive Foundations

In Kashmir Shaivism, the absolute, all-powerful consciousness (**Shiva**) restricts its infinite powers through five limiting sheaths (**Kañcukas**) to manifest as a constrained, individual actor (**Puruṣa**). We map these five limitations directly to AI agent tool restrictions:

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

1.  **Kāla (Limitation of Time)**: Restricts eternity. Mapped to **restricting the max turn/step counts** per task, preventing infinite agent feedback loops.
2.  **Niyati (Limitation of Space/Causality)**: Restricts omnipresence. Mapped to **restricting file system read/writes strictly to the project directory** (`/Users/universe/AUM/`), preventing access to external configs.
3.  **Rāga (Limitation of Desire/Interest)**: Restricts completeness. Mapped to **binding agent attention strictly to the active Saṅkalpa** ID, preventing feature creep.
4.  **Vidyā (Limitation of Knowledge)**: Restricts omniscience. Mapped to **restricting agent code to approved libraries and frameworks**, preventing the use of unverified packages.
5.  **Kalā (Limitation of Power/Agency)**: Restricts omnipotence. Mapped to **limiting tool permissions** (prohibiting arbitrary terminal commands like external curl, wget, or pip installs without developer confirmation).

---

## 4. Proposed Changes & Technical Architecture

### A. Establish Kañcuka Boundary Rules in `INSTRUCTIONS.md`
We will append the **Kañcuka Boundary Rules** to [.aum/INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md).

### B. Create ADR-012 Log
Create [adr_012_shaiva_kancukas.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_012_shaiva_kancukas.md) in the decisions registry.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested the sequential implementation of the remaining Vedic philosophies, committing and pushing after each.
*   **Manana (Reflecting)**: Contemplating Kashmir Shaivism's Kañcuka model, it provides the ultimate philosophical framework for sandbox security and resource management.
*   **Nididhyāsana (Integrating)**: We will write the ADR-012 log, update instructions, update the manifest, commit, and push.
