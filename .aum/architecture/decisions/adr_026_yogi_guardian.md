---
title: "Architecture Decision Record: Yogi (The Framework Guardian Agent)"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing Yogi as the resident guardian agent of the AUM framework."
---

# Architecture Decision Record (ADR) Log: ADR-026

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-026
  Subject     : Yogi (The Framework Guardian Agent)
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.26.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements a workspace-committed customization skill and rule configuration named **Yogi** inside `.agents/skills/yogi/`. Yogi acts as the framework guardian, automatically guiding developers at start.

---

## 2. Context & Problem Statement

cloning the framework into a new environment leaves the workspace stateless. Without a resident agent to remind developers of active focus targets, linter rules, and retrospect logs, the framework can easily lose logical alignment.

---

## 3. Theoretical & Cognitive Foundations

### A. The Guardian of the Sanātana-Sphoṭa (Unbroken Meaning)
*   Enshrining Yogi's instructions in `.agents/` provides a **Jñāna Śakti** (knowledge force) that persists across clones.
*   Yogi prompts developers to run the dispatcher (`scripts/dispatcher.js`) and linter (`scripts/aum_audit.js`), maintaining the framework's invariants.

---

## 4. Proposed Changes & Technical Architecture

### A. Customization Skill Folder
*   File Location: [.agents/skills/yogi/SKILL.md](file:///Users/universe/AUM/.agents/skills/yogi/SKILL.md)
*   System Prompt instructions:
    - Welcome the user on start.
    - Instruct developers to load Saṃskāras caches.
    - Enforce the Pañcakṛtya (Turn Lifecycle) workflow.

---

## 5. System Impact & Improvements

*   **Guided Onboarding**: Yogi guides new developers on setup immediately.
*   **Constant Alignment**: Yogi blocks commits that bypass AUM guidelines.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the instruction to build Yogi (ADR-026) as the **Śruti** (revelation) calling for **Goptrī-Karaṇa** (creation of the guardian).

### 2. Manana (Reflecting / Contemplation)
We observe that a database without a guardian can drift. Establishing Yogi acts as the keeper of the seal (**Kriyā Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The decision was recorded in [adr_026_yogi_guardian.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_026_yogi_guardian.md).
