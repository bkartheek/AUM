---
title: "ARB V2: Domain-Agnostic Container"
type: "policy"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Superseded architecture review for the containerized and domain-agnostic AUM engine"
---

# Architecture Review Board (ARB) Document: The Intent Engine (V2 — Domain-Agnostic AUM Engine)

| Review Parameter | Details |
| :--- | :--- |
| **System Version**| V2.0.0 |
| **Scope**         | Technology & Department Agnostic Cognitive Alignment |
| **Status**        | Superseded |

---

## 1. Executive Summary
The primary focus of ARB V2 was to isolate the Intent Engine under a containerized subdirectory `intent_engine/` (moving instructions away from the project root) and **generalize its templates**. This allowed non-technical groups (e.g. HR, Insurance Underwriting, Call Centers) to use the cognitive gates.

---

## 2. Theoretical Architecture (4-State Container)

```text
               +-------------------------------------------------+
               |             TURIYA (Amātra - Silence)           |
               |                [ intent_engine/ ]               |
               |  Background Awareness: Master Rules & Directives|
               +-----------------------+-------------------------+
                                       |
                                       | Governs & Restricts
                                       v
      +--------------------------------+---------------------------------+
      |                                |                                 |
      v                                v                                 v
+-----+---------------+        +-------+-------+               +---------+-----+
|   JĀGRAT (A-kāra)   |        |   SVAPNA (U-kāra) |               |  SUṢUPTI (M-kāra)  |
|  [ Waking State ]   |        | [ Dream State ]   |               | [ Deep Sleep ]  |
|  Outward Dialog  |        | Subtle Reflection |               | Consolidated Log|
| (intent_engine/waking/) |  | (intent_engine/dreaming/) |         | (intent_engine/deepsleep/) |
+-----+---------------+        +-------+-------+               +---------+-----+
```

### Table of State Definitions
| Syllable | Consciousness State | Subjective Phase | Target Folder | Purpose & Directives |
| :---: | :--- | :--- | :--- | :--- |
| **A** | **Jāgrat** (Waking) | *Vaiśvānara* | `intent_engine/waking/` | Externalized communication. Scans user inputs and queries details using the **Cognitive Intake Worksheet** (generalized). |
| **U** | **Svapna** (Dreaming) | *Taijasa* | `intent_engine/dreaming/` | Internalized reflection. Outlines **Conceptual Process Blueprints** decoupled from target software environments. |
| **M** | **Suṣupti** (Deep Sleep)| *Prājña* | `intent_engine/deepsleep/` | Consolidated unified knowledge. Logs active context threads and registers design decisions. |
| **-** | **Turīya** (The Fourth) | *Adhiṣṭhāna* | `intent_engine/` | The indestructible witness state. Contains invariant system rules and root-level instructions (`INTENT.MD`, `AI_INSTRUCTIONS.md`). |

---

## 3. Operations & File Layout
*   **`intent_engine/waking/clarification_template.md`**: Refactored to prompt for core outputs, resources, operational transformations, compliance limits, and success proof.
*   **`intent_engine/dreaming/blueprint_template.md`**: Refactored to map abstract process flows, sequential action nodes, and risk mitigation parameters.
*   **`intent_engine/deepsleep/logs/thread_template.md`**: Kept standard active/paused thread logs.

---

## 🚀 Inflection Note (Motivation for Migration)
*   **Issues Resolved**: Core engine instructions no longer cluttered the workspace root. Templates became fully adaptable to non-tech operations.
*   **Identified Gaps**: 1) There was no private, local-only space to capture unstructured user thoughts before they officially activated an intent thread. 2) The thread log was still named "thread", missing deep alignment with Vedic *Saṅkalpa* structures.
