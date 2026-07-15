---
title: "Architecture Review Board: Navya-Nyāya Logic Formal AST"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document mapping semantic type invariants, logical relations, and static compiler AST checking to Navya-Nyāya formal symbolic logic."
---

# Architecture Review Board (ARB) Report: ARB-015

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-015
  Subject     : Navya-Nyāya logic AST Integration
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.15.0
=====================================================================
```

---

## 1. Executive Summary

This report outlines the integration of the **Navya-Nyāya Logic Formal AST** rules into the AUM Engine. By mapping compiler static analysis, type signatures, and AST semantic checks to the highly structured symbolic language of *Navya-Nyāya* logic, we establish a rigorous verification protocol. This protocol ensures that codebases maintain complete type safety and structural invariants at compile-time.

---

## 2. Context & Problem Statement

In automated code generation and type checking:
*   **Weak Semantics**: AI agents frequently bypass type parameters, write loose or dynamic type castings (e.g. `any` in TypeScript or un-typed Python), which causes silent runtime errors.
*   **Logical Vagueness**: Type relationships and invariant bounds are poorly declared, preventing static analysis tools from catching logic contradictions early.

We need a formal symbolic logic framework to verify type interfaces and AST correctness.

### What Was Affected
*   **Type Safety & Logic Verification**: Loose type mappings led to runtime crashes and semantic inconsistencies.

### What Was Removed
*   None. This extends our active instruction manual.

---

## 3. Theoretical & Cognitive Foundations

The **Navya-Nyāya** (New Logic) school of Indian philosophy, founded by Gaṅgeśa Upādhyāya in the 12th century, developed a highly sophisticated formal language and logic. It analyzes cognitive states, relations (*Sambandha*), and properties without variables, using precise relational terminology:

```text
  [ Avacchedaka (Limiting Property) ] ➔ [ Nirūpaka (Relational Definer) ] ➔ [ Anuyogin (Substratum) ]
```

1.  **Dharma (Property) & Dharmin (Substratum)**: Mapped to **type signatures and variable instances**.
2.  **Avacchedaka (Limiter / Limiting Property)**: Mapped to **generic constraints and type limits** (e.g. `<T extends Dravya>`). The limiter restricts the applicability of a type.
3.  **Saṃyoga & Samavāya (Relations)**: Mapped to **class inheritance and database references**.
4.  **Abhāva (Negation / Absence)**: Mapped to **strict null check definitions and type exclusions**.

Applying Navya-Nyāya terminology forces the AI agent and developers to think of type parameters not as arbitrary comments, but as formal relational limiters (*Avacchedaka*) that mathematically prove code correctness.

---

## 4. Proposed Changes & Technical Architecture

### A. Establish Navya-Nyāya Logic Rules in `INSTRUCTIONS.md`
We will append the **Navya-Nyāya Logic Rules** to [.aum/INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md).

### B. Create ADR-015 Log
Create [adr_015_navya_nyaya_ast.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_015_navya_nyaya_ast.md) in the decisions registry.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested the sequential implementation of the remaining Vedic philosophies, committing and pushing after each.
*   **Manana (Reflecting)**: Contemplating Navya-Nyāya, it is the peak of formal symbolic logic. Mapping type limiters (*Avacchedaka*) to generic bounds provides a mathematical framework for type checking.
*   **Nididhyāsana (Integrating)**: We will write the ADR-015 log, update instructions, update the manifest, commit, and push.
