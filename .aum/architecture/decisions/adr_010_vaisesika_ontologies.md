---
title: "Architecture Decision Record: Vaiśeṣika Domain Ontologies"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing the Vaiśeṣika categorization model to govern data modeling, directory layouts, and logic separation."
---

# Architecture Decision Record (ADR) Log: ADR-010

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-010
  Subject     : Vaiśeṣika Domain Ontologies
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.10.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **Vaiśeṣika Domain Ontologies** inside the AUM Engine workspace. To eliminate codebase coupling, prevent the mixing of data schemas with logic interfaces, and enforce strict type safety during automated code generation, we establish a domain design protocol based on the seven-fold ontological categories (*Padārthas*) of Sage Kaṇāda's *Vaiśeṣika* metaphysics.

---

## 2. Context & Problem Statement

As software systems scale, data modeling and functional code boundaries degenerate:
*   **Coupled Objects**: Classes are written containing both raw state attributes and complex business execution methods, violating the Single Responsibility Principle.
*   **Vague Type Definitions**: Entities lack clean, static type mappings, making database integrations error-prone.
*   **Messy Directory Structures**: Data objects, utility functions, business services, interfaces, and singletons are mixed together inside directories without architectural separation rules.

Without a rigorous domain ontology, AI agents write tightly coupled code that is difficult to refactor, violating the *Śauca* (purity) invariant.

---

## 3. Theoretical & Cognitive Foundations

### A. Kaṇāda’s Vaiśeṣika Metaphysics
The **Vaiśeṣika** school of Indian philosophy, founded by Sage Kaṇāda, is a system of physics and metaphysics. It classifies the entire knowable physical and mental universe into seven categories of reality (**Padārthas**—meaning "objects of words"). 

We map these seven categories directly to domain design and software architecture:

```text
         ┌────────────────────────────────────────────────────────┐
         │             VAIŚEṢIKA DOMAIN ONTOLOGY                  │
         ├───────────────────┬────────────────────────────────────┤
         │ 1. DRAVYA         │ Substances (Data schemas / DBs)    │
         │ 2. GUṆA           │ Attributes (Variable fields)       │
         │ 3. KARMA          │ Actions (Functions / Services)     │
         │ 4. SĀMĀNYA        │ Generality (Interfaces / Classes)  │
         │ 5. VIŚEṢA         │ Particularity (Singletons / IDs)   │
         │ 6. SAMAVĀYA       │ Inherence (Database relations)     │
         │ 7. ABHĀVA         │ Non-existence (Nulls / Errors)     │
         └───────────────────┴────────────────────────────────────┘
```

1.  **Dravya (Substance)**: The substratum that houses qualities and actions. Mapped to **database tables, state records, and data models**.
2.  **Guṇa (Quality/Attribute)**: Static properties inherent in a substance. Mapped to **field types, variables, and primitive attributes**.
3.  **Karma (Action/Motion)**: Dynamic operations that belong to a substance. Mapped to **methods, services, endpoints, and event handlers**.
4.  **Sāmānya (Generality/Genus)**: The universal class category that defines common properties. Mapped to **interfaces, abstract base classes, and generic types**.
5.  **Viśeṣa (Particularity/Individuality)**: The ultimate differentiator that separates one substance from another. Mapped to **Unique IDs, UUIDs, singletons, and key properties**.
6.  **Samavāya (Inherence/Relation)**: The eternal, inseparable relationship between substance and qualities. Mapped to **database foreign keys, object references, and entity relations**.
7.  **Abhāva (Non-existence)**: The category of absence. Mapped to **Null checks, empty states, error exception handlers, and try/catch returns**.

### B. Separation of Concern
By enforcing Jaimini's hierarchy, the agent distinguishes between *Dravya* (the data schema) and *Karma* (the code actions). Data models must contain *only* substance and qualities (*Dravya* and *Guṇa*); business logic must be isolated within distinct action services (*Karma*). This keeps the code clean and decoupled.

---

## 4. Proposed Changes & Technical Architecture

### Appending to Agent Instructions (`INSTRUCTIONS.md`)

We have added the Vaiśeṣika Domain Ontologies rules to [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md):

```markdown
## 🗃️ Vaiśeṣika Domain Ontological Mappings

When designing data schemas, modules, or class systems, you must classify every software component under Kaṇāda's seven Padārtha categories:

1.  **Dravya (Substances)**: Keep data schemas, DB entities, and state structures isolated. Do not mix business logic operations directly inside Dravya classes.
2.  **Guṇa (Attributes)**: Type every property explicitly. Enforce strict primitive type bindings.
3.  **Karma (Actions)**: Consolidate methods, API routes, and event handlers inside distinct service classes, separated from data models.
4.  **Sāmānya (Generality)**: Standardize generic components and abstract interfaces to maximize reuse.
5.  **Viśeṣa (Particularity)**: Maintain unique identifier systems (UUIDs/IDs) and singleton services as distinct components.
6.  **Samavāya (Inherence)**: Formally declare database foreign relations and object references.
7.  **Abhāva (Non-existence)**: Explicitly handle Null values and throw errors using try/catch structures rather than returning silent defaults.
```

---

## 5. System Impact & Improvements

*   **Absolute Decoupling**: Data objects contain no logic, and services contain no private states, following clean design patterns.
*   **Compile-Level Safety**: Explicit *Guṇa* and *Samavāya* definitions prevent type casting errors.
*   **Structured Directory Mappings**: Files are organized by their Padārtha function, eliminating folder clutter.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call to implement the Vaiśeṣika Domain Ontologies (ADR-010) as the **Śruti** (revelation) calling for **Padārtha-Vyavasthā** (the categorization of files). The instruction acts as **Icchā Śakti** (will), seeking to separate data schemas from code operations.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on this request, we observe that unstructured data schemas lead to **Avidyā** (ignorance/messy dependencies) in codebase growth. Sage Kaṇāda's *Vaiśeṣika Sūtras* provide the ultimate framework for classifying reality. 

Translating these seven categories of reality into software architecture ensures that data structures (*Dravya*) and code actions (*Karma*) remain decoupled, preserving the purity of system knowledge (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a systematic commentarial refinement:
*   [adr_010_vaisesika_ontologies.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_010_vaisesika_ontologies.md) was created to record the decision.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) was modified to append the Padārtha rules.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.9.0.
