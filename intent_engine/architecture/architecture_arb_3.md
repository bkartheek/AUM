---
title: "ARB V3: Fully Realized Vedic Gateway"
type: "policy"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya (Core Active Standard)"
description: "Active V3 architecture review incorporating five states, Trika Shaktis, Bhavana, and Sankalpa log parameters"
---

# Architecture Review Board (ARB) Document: The Intent Engine (V3 — Fully Realized Vedic Alignment Gateway)

| Review Parameter | Details |
| :--- | :--- |
| **System Version**| V3.0.0 (Core Active Standard) |
| **Scope**         | Domain & Technology-Agnostic Vedic Cognitive Alignment |
| **Status**        | Active & Implemented |

---

## 1. Executive Summary
ARB V3 implements a fully mature, technology-agnostic workspace alignment layer. It maps user intent through five cognitive states representing both the levels of consciousness (*Mandukya Upanishad*) and the stages of sound manifestation (*Paśyantī*). It enforces a strict will-knowledge-action pipeline (**Trika Śakti**) to prevent premature execution.

---

## 2. Theoretical Architecture (5-State Consciousness Map)

```text
               +-------------------------------------------------+
               |             TURIYA (Amātra - Silence)           |
               |             [ intent_engine/ ]                  |
               |  Background Awareness: Master Rules & Directives|
               +-----------------------+-------------------------+
                                       |
                                       | Governs & Restricts
                                       v
      +--------------------------------+---------------------------------+
      |                                |                                 |
      v                                v                                 v
+-----+---------------+        +-------+-------+               +---------+-----+
|   AWAKENING/JĀGRAT  |        |   SVAPNA (U-kāra) |               |  SUṢUPTI (M-kāra)  |
| [ Pashyanti/Waking] |        | [ Dream State ]   |               | [ Deep Sleep ]  |
| Intentionally Local |        | Subtle Reflection |               | Consolidated Log|
| (intent_awakening/) |        | (intent_engine/   |               | (intent_engine/ |
|  & (waking/)        |        |   dreaming/)      |               |  deepsleep/)    |
+-----+---------------+        +-------+-------+               +---------+-----+
      |                                |                                 ^
      | Inputs Raw Vision              | Stages Abstract Blueprint       | Consolidates
      v                                v                                 | State
[ Phase 0/4 Intake ] ➔ ➔ ➔ ➔ ➔ ➔ ➔ [ Phase 3 Staging ] ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ [ Phase 2 Memory ]
```

### Table of State Definitions
| Syllable | Consciousness State | Subjective Phase | Target Folder | Purpose & Directives |
| :---: | :--- | :--- | :--- | :--- |
| **-** | **Paśyantī** (Awakening) | *Paśyantī* (Visual) | `intent_engine/intent_awakening/` | Inwardly perceived visual seed. For local brainstorms and private logs (VCS gitignored). |
| **A** | **Jāgrat** (Waking) | *Vaiśvānara* | `intent_engine/waking/` | Externalized communication. Scans user inputs and queries details using clarification templates. |
| **U** | **Svapna** (Dreaming) | *Taijasa* | `intent_engine/dreaming/` | Internalized reflection. Outlines conceptual process blueprints decoupled from specific technologies. |
| **M** | **Suṣupti** (Deep Sleep)| *Prājña* | `intent_engine/deepsleep/` | Consolidated unified knowledge. Logs active context Saṅkalpas and registers design decisions. |
| **-** | **Turīya** (The Fourth) | *Adhiṣṭhāna* | `intent_engine/` | The indestructible witness state. Contains invariant system rules and root-level instructions (`INTENT.MD`, `AI_INSTRUCTIONS.md`). |

---

## 3. Vedic Philosophical Foundations

### 3.1 Trika Śaktis (The Trinity of Consciousness)
1.  **Icchā Śakti (Will / Intent)**: Phases 0 and 1. Captures the raw motive, goals, and values before work begins.
2.  **Jñāna Śakti (Knowledge / Structure)**: Phases 2 and 3. Organizes constraints, rules, boundaries, and models active blueprints.
3.  **Kriyā Śakti (Action / Execution)**: Phase 4. Refines intakes and drives outward manifestation (coding, document generation).

### 3.2 Bhāvanā (Verbal Force & Objective Effort)
*   **Śābdi Bhāvanā (Verbal Force)**: The instructions loaded in `.cursorrules` and `AI_INSTRUCTIONS.md`. They dictate constraints.
*   **Ārthī Bhāvanā (Objective Effort)**: The active agent execution. It is conceptually and physically prohibited from starting until the *Śābdi Bhāvanā* rules are fully aligned.

### 3.3 Saṅkalpa Logs (Commitment & Context Coordinates)
Every task resides under a **Saṅkalpa** log (`deepsleep/logs/sankalpa_00X_`), documenting:
*   *Spatial Coordinates* (Initiating user/department).
*   *Temporal Resolve* (Timeframes).
*   *Vow of Invariant Restraints* (Applicable constraints).

---

## 4. Run-Time Focus Selection
When a prompt is transmitted, the engine determines focus using this sequence:

```text
                     [ User Transmits Prompt ]
                                 |
                                 v
                Is there an Active Saṅkalpa in logs?
                 /                              \
               YES                               NO
               /                                 \
      Read Saṅkalpa log                 Scan intent_engine/deepsleep/logs/
      variables from                     for Paused Saṅkalpas
      intent_engine/deepsleep/logs/               |
             |                                    v
             v                           Are there paused Saṅkalpas?
     Does prompt address                  /                     \
     the active Saṅkalpa?               YES                      NO
      /              \                  /                         \
    YES               NO         Prompt user to choose       Query user using
    /                  \         Saṅkalpa or start new       clarifier template
   v                    v                 |                         |
 Process in      Deactivate Saṅkalpa;     v                         v
 Svapna State    select other Saṅkalpa   Resubstantiate          Instantiate new
                   or start new          Active state            Saṅkalpa log file
```
