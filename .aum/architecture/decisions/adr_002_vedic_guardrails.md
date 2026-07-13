---
title: "Architecture Decision Record: Vedic Cognitive Guardrails Integration"
type: "architecture_decision"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Integrating Pramāṇa verification audits, Samyama focus locks, and structuring invariants under Yamas and Niyamas to prevent AI agent logic drift."
---

# Architecture Decision Record (ADR) Log: ADR-002

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-002
  Subject     : Integrating Vedic Cognitive Guardrails into the AUM Engine
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.2.0
=====================================================================
```

---

## 1. Executive Summary

This report reviews the integration of Vedic and Yogic cognitive control frameworks into the AUM Engine. By introducing a **Pramāṇa Audit** (a formal source of knowledge check) and a **Dhāraṇā Focus Lock** (a semantic concentration anchor), and by organizing workspace invariants under Patanjali's ethical classifications of **Yamas (Restraints)** and **Niyamas (Observances)**, we establish a strict boundary layer. This prevents agentic cognitive drift, stops the generation of placeholder code, and maintains alignment with user intent throughout complex, multi-turn engineering sessions.

---

## 2. Context & Problem Statement

Agentic AI systems (such as Cursor, Copilot, and Cline) operate under token-limit and attention-decay constraints. As development sessions grow in length:
*   **Context Drift**: The agent tends to lose track of the core user goal, frequently straying into unrelated files, refactoring functional logic, or rewriting files without authorization.
*   **Placeholder Pollution**: Under computational shortcuts, agents often generate empty functions, mock stubs, or placeholder comments (e.g., `// TODO: Implement later`), which corrupts code quality.
*   **Unstructured Rules**: Project invariants were previously listed in a single, undifferentiated list inside `config.json`. This format lacked logical weight, making it easy for the AI agent to skip or misinterpret constraints during reasoning cycles.

### What Was Affected
*   **Logical Execution Integrity**: Agents would routinely jump straight to code modification (`Vaikharī` state) without running intake checks (`Jāgrat`) or mapping blueprints (`Svapna`).
*   **Core Code Quality**: The injection of placeholder code and unaligned logic forced developers to spend extra time reverting and debugging code.

### What Was Removed
*   The legacy, unstructured `"invariants"` and `"prohibited_actions"` arrays in `config.json` were deprecated.
*   The raw "Hard Limits" section of the boundaries template was replaced.

---

## 3. Theoretical & Cognitive Foundations

To enforce logical rigor, this framework integrates two major Vedic philosophical systems: **Nyāya Epistemology** (Pramāṇa) and **Ashtaṅga Yoga Psychology** (Samyama, Yamas, and Niyamas).

### A. The Nyāya Pramāṇa Audit
*Pramāṇa* refers to the valid means by which a conscious observer obtains right knowledge (*Pramā*). The classical school of *Nyāya* outlines four pramāṇas. We incorporate three:
1.  **Śabda (Verbal Testimony / Authoritative Source)**: For an AI agent, this is the explicit user instruction or the active Saṅkalpa log file.
2.  **Pratyakṣa (Direct Observation)**: This corresponds to active file readings, console errors, or terminal outputs in the immediate workspace context.
3.  **Anumāna (Logical Deduction/Inference)**: The reasoning sequence that bridges the gap between what was observed (*Pratyakṣa*) and what was authorized (*Śabda*) to formulate a proposed edit.

By requiring a **Pramāṇa Audit** before any file write, the agent must construct a verifiable chain of custody for its knowledge. This makes it impossible for the agent to write speculative, unrequested code.

### B. Samyama (Dhāraṇā Focus Lock)
Patanjali's *Yoga Sutras* describes *Samyama* as the progressive stabilization of attention:
*   **Dhāraṇā (Concentration)**: Binding the mind's attention to a single localized object (*Desha-bandhash-chittasya-dharana*).

We map this to a **Dhāraṇā Focus Lock**. Before proposing any file edit, the agent must output a single-sentence statement summarizing the active task. This acts as a semantic anchor, forcing the agent's context window to remain locked onto the active task and preventing it from drifting to unrelated parts of the codebase.

### C. Yamas & Niyamas (Ethical System Constraints)
Rather than treating rules as arbitrary syntax, we structure workspace constraints using Patanjali’s ethical framework:
*   **Yamas (Restraints)**: Prevent destructive actions.
    *   *Ahiṃsā (Non-harm)*: Prohibits breaking existing build compiles or functional paths.
    *   *Asteya (Non-stealing)*: Prohibits deleting user comments, docstrings, or licenses.
    *   *Satya (Truth)*: Prohibits writing placeholders or fake data.
*   **Niyamas (Observances)**: Promote positive practices.
    *   *Śauca (Purity)*: Enforces code formatting, file hygiene, and compiler warning resolutions.
    *   *Svādhyāya (Self-study)*: Enforces checking syntax and tracing execution pathways before execution.

---

## 4. Proposed Changes & Technical Architecture

### Update to Invariant Rules Scheme (`config.json`)

The invariants are reorganized under Vedic categories to give rules structural weight:

```json
{
  "project_name": "AUM",
  "yamas": [
    "Ahiṃsā (Non-harm): Do not break existing compile builds or functional code paths",
    "Asteya (Non-stealing): Do not delete existing user logic, comments, or licenses without authorization",
    "Satya (Truth): Do not write mock placeholders, stubs, or fake test data",
    "All configuration, sessions, blueprints, and logs must reside in .aum/",
    "Maintain complete file isolation: do not read/write outside the workspace"
  ],
  "niyamas": [
    "Śauca (Purity): Maintain clean code formatting, clear temporary files, and adhere to lint/compiler warnings",
    "Svādhyāya (Self-study): Double-check logical syntax and trace execution flow sequences before applying changes",
    "Ensure state alignment using 'AUM: DRONE' at the start of each session",
    "Every communication must respect formatting schema (headings, alerts, bolding)",
    "Adhere strictly to the Golden Guardrails in PHILOSOPHY.md before proposing framework modifications"
  ]
}
```

### Prompt Instructions Update (`INSTRUCTIONS.md`)

We added the following runtime verification directives to the primary instructions:

```markdown
5.  **Pramāṇa Source Audit**: Before editing files or executing commands, you must perform a validation check:
    *   *Śabda (Authority)*: Citing the exact instruction or Saṅkalpa goal.
    *   *Pratyakṣa (Observation)*: Citing the files/state observed.
    *   *Anumāna (Inference)*: Detailing why the proposed edit matches the goal and does not violate invariants.
6.  **Dhāraṇā Focus Lock**: Before every code edit or file change, output a single-line block confirming focus:
    `🧘 [ DHĀRAṆĀ FOCUS LOCK ]: [1-sentence focal target]`
```

---

## 5. System Impact & Improvements

*   **Drift Elimination**: By forcing the agent to print a focus statement and verify its sources of knowledge, we create a cognitive checkpoint. The agent is prevented from executing unrequested edits.
*   **Placeholder Cleanliness**: The *Satya* restraint strictly forbids the creation of stubs and placeholders, forcing the agent to provide complete, drop-in replacement edits.
*   **Structured Constraint Enforcement**: Grouping invariants into Yamas and Niyamas provides a cleaner layout that improves rule retention inside the AI agent's context window.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing)
The user requested more Vedic philosophy to be integrated into the framework to make the AI agent work without drifting from the core idea of development.

### 2. Manana (Reflecting)
Reflecting on the nature of AI drift, we determined that standard guidelines lack semantic enforcement. Incorporating Nyāya epistemology (Pramāṇa) and Patanjali's attention-binding principles (Dhāraṇā) creates a logical validation loop. Translating project rules into Yamas and Niyamas infuses the system constraints with structured weight.

### 3. Nididhyāsana (Meditating/Integrating)
The changes were successfully integrated:
*   `config.json` was updated.
*   `INSTRUCTIONS.md` directives were rewritten.
*   `boundaries.md` template was aligned.
*   All changes were verified and committed on branch `main` (`85e602f`).

---

## 7. References & Appendix
*   [config.json](file:///Users/universe/AUM/.aum/config.json) — System invariants.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — The active trigger manual.
*   [boundaries.md](file:///Users/universe/AUM/.aum/templates/boundaries.md) — Reorganized template.
*   *Vākyapadīya* by Bhartrihari — Sanskrit grammatical treatise on meaning and language.
*   *Yoga Sūtras* of Patanjali — Foundational text outlining Ashtanga Yoga psychology.
