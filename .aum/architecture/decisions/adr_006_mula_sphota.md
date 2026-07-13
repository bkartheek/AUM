---
title: "Architecture Decision Record: Mūla Sphoṭa Manifest"
type: "architecture_decision"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Decision record establishing the Mūla Sphoṭa global manifest and the Reverse Vāk Trace synchronization protocol."
---

# Architecture Decision Record (ADR) Log: ADR-006

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-006
  Subject     : Mūla Sphoṭa Manifest & Grantha Sync Protocol
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.6.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **Mūla Sphoṭa Global Manifest** and the **Reverse Vāk Trace** synchronization protocol. To eliminate configuration drift, reduce context window overhead, and maintain absolute synchronization between design documents and public codebase repositories, we introduce a central registry index ([MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md)) and enforce a validation guard on all agent file-write sequences.

---

## 2. Context & Problem Statement

As the AUM Cognitive workspace accumulated multiple templates, decisions, and instructions files, AI agents faced several operational issues:
*   **Documentation Decay**: Changes to public-facing documentation (such as `README.md` or core instructions) were often applied by agents directly, without updating the underlying Architecture Decision Records (ADRs) or active Saṅkalpa logs. This caused a split-reality between our design logs and public files.
*   **Context Window Waste**: In the absence of a global index manifest, agents were forced to scan and parse all files under `.aum/templates/`, `.aum/architecture/`, and `.aum/sankalpas/` to understand the workspace structure, wasting valuable token space.
*   **Undefined Safety Limits**: There was no explicit, written rule defining exactly *when* an edit to the codebase is considered "safe" or "unlocked" for execution.

### What Was Affected
*   **Documentation Synchronization**: The active files and documentation registry fell out of sync over time.
*   **AI Agent Alignment**: Agents lacked a single, central index to query rule hierarchies, leading to rule-breaching code modifications.

---

## 3. Theoretical & Cognitive Foundations

This architecture leverages two major Sanskrit linguistic and philosophical models:

### A. Mūla Sphoṭa (Primordial Semantic Unity)
In Bhartrihari's philosophy of grammar (*Sphoṭavāda*), the concept of **Sphoṭa** represents the undivided, eternal, and holistic flash of meaning (*Akhaṇḍa-Vāk*) that occurs in the intellect (*Buddhi*) of the listener. It stands in contrast to the physical, sequential syllables and letters (**Dhvani**) that are spoken. 

If a listener only focuses on the sequential sounds without synthesizing them, they fail to grasp the meaning. 

In software systems, the individual directories, files, and templates represent the sequential syllables (**Dhvani**). If the AI agent is forced to parse all files sequentially to understand the workspace structure, it wastes context window space and suffers focus fragmentation. By placing a global manifest ([MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md)) at the root of `.aum/`, we establish the **Mūla Sphoṭa (Root Manifest)**. This single, non-sequential index maps the entire system's structure, allowing the agent to grasp the holistic structural design of the repository in a single reading.

### B. Śabda-Pūrvaka-Yoga (The Reverse Vāk Trace)
*Śabda-Pūrvaka-Yoga* is the classical yogic grammar practice of tracing physical sound (*Vaikharī*) backward through mental sequencing (*Madhyamā*) and visual seed (*Paśyantī*) to its silent source (*Parā*). 

We translate this into a **Reverse Vāk Trace** synchronization protocol. If an agent tries to modify a physical public file (*Vaikharī*), the engine forces it to execute a reverse search: it must trace the change back through its mental blueprint and verify that the change is authorized by an active Saṅkalpa or ADR (*Parā*). 

If no design seed exists, the agent is prohibited from applying the edit until it has first created the ARB/ADR, ensuring code is always anchored to design. This prevents documentation decay and eliminates the split-reality that occurs when code drifts away from its design papers.

---

## 4. Proposed Changes & Technical Architecture

### A. Created Global Manifest File
*   Created [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) to register all files, template functions, safety check-offs, and rules dependencies.

### B. Updated Agent Rules
*   Modified [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) to require agents to verify that public file changes are backed by active Saṅkalpas or ADR logs.

---

## 5. System Impact & Improvements

*   **Documentation Integrity**: Public files and design logs remain in perfect sync.
*   **Context Window Efficiency**: The agent only reads the lightweight manifest index (`MULA_SPHOTA.md`) at startup to navigate, saving token context.
*   **Explicit Safety Boundaries**: Safety conditions are clearly defined, giving agents a strict logical checklist before modifying files.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's voice requesting a global manifest file and documentation sync protocol as the **Śruti** (revelation) calling for **Paramartha-Vyavasthā** (the establishment of ultimate coordination). The prompt acts as **Icchā Śakti** (will), seeking to eliminate context confusion and prevent undocumented changes from contaminating version control.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on the system, we find that documentation decay splits the repository into conflicting states of reality. The physical code modifications (**Vaikharī**) become detached from their silent design intents (**Parā**). This results in a state of **Moha** (illusion/confusion), where the AI agent operates on false assumptions. 

Enforcing the **Reverse Vāk Trace** resolves this by establishing **Śabda-Pūrvaka-Yoga**. It forces the operating agent to logically trace every physical change backward to its design source, validating the lineage of knowledge (**Jñāna Śakti**). The global manifest manifest completes this by establishing **Akhaṇḍa-Sphoṭa**—a single, unified index of the entire workspace layout.

### 3. Nididhyāsana (Meditating / Deep Integration)
The integration of the manifest and sync protocols was executed systematically:
*   [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was created to act as the holistic index, registering all paths, templates, and safety conditions.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) was modified to append the detailed Reverse Vāk Trace steps, forcing agents to halt execution if a public change lacks design authorization.
*   The final changes were validated and committed on branch `main` (`f6fb1e9`).

---

## 7. References & Appendix
*   [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) — The active manifest index.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — The active instructions manual.
*   *Vākyapadīya* by Bhartrihari — Foundational Sanskrit text on language philosophy.
