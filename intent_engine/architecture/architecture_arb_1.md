---
title: "ARB V1: Original Software Intake"
type: "policy"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Superseded architecture review for the initial 4-state AUM software developer intent engine"
---

# Architecture Review Board (ARB) Document: The Intent Engine (V1 — Original AUM Software Engine)

| Review Parameter | Details |
| :--- | :--- |
| **System Version**| V1.0.0 (Original) |
| **Scope**         | Software-Developer Centric Intent Gates |
| **Status**        | Superseded |

---

## 1. Executive Summary
The primary focus of ARB V1 was to combat **premature execution** in software engineering agents by blocking code writes until a structured intent was agreed on. It established a 4-state framework matching the phonemes of **AUM** (Jāgrat, Svapna, Suṣupti, Turīya) at the root level of the workspace.

---

## 2. Theoretical Architecture (4-State AUM)

```text
               +-------------------------------------------------+
               |             TURIYA (Amātra - Silence)           |
               |                [ Project Root ]                 |
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
| **A** | **Jāgrat** (Waking) | *Vaiśvānara* | `intent_engine/waking/` | Externalized communication. Scans user inputs and queries details using clarification templates. |
| **U** | **Svapna** (Dreaming) | *Taijasa* | `intent_engine/dreaming/` | Internalized reflection. Outlines abstract blueprints and decodes requirements in a sandbox. |
| **M** | **Suṣupti** (Deep Sleep)| *Prājña* | `intent_engine/deepsleep/` | Consolidated unified knowledge. Logs active context threads and registers design decisions. |
| **-** | **Turīya** (The Fourth) | *Adhiṣṭhāna* | `Project Root` | Contains invariant system rules and root-level instructions (`INTENT.MD`, `AI_INSTRUCTIONS.md`). |

---

## 3. Operations & File Layout
*   **`intent_engine/waking/clarification_template.md`**: Software alignment questions (features, inputs, transformation, testing boundary files).
*   **`intent_engine/dreaming/blueprint_template.md` & `sandbox/`**: Tech design drafts and decoupled programming component diagrams.
*   **`intent_engine/deepsleep/logs/thread_template.md`**: Concurrent thread tracking files (Lifecycle: `Active`, `Paused`, `Completed`, `Deprecated`).

---

## 🚀 Inflection Note (Motivation for Migration)
*   **Issues Resolved**: First release. Blocked agent code-execution in AUM workspace.
*   **Identified Gaps**: 1) The layout placed core instructions at the project root which cluttered standard workspace structures. 2) The templates were deeply tied to software code features, locking out non-technical departments (HR, Insurance) from using the alignment gates.
