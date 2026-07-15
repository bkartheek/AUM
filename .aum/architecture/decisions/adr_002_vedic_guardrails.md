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

To enforce absolute logical rigor and prevent cognitive drift, this framework integrates two major classical Indian systems: **Nyāya Epistemology (Pramāṇavāda)** and **Patanjali's Yoga Psychology (Aṣṭāṅga Yoga)**.

### A. The Nyāya Pramāṇa Audit (Epistemic Verification)
*Pramāṇa* refers to the valid means by which a conscious observer (*Pramātā*) obtains right and verified knowledge (*Pramā*). The classical school of *Nyāya* outlines four distinct sources of valid knowledge. We incorporate three of these as active verification steps inside the agent's reasoning loop:
1.  **Śabda (Verbal Testimony / Authoritative Revelation)**: The primary, trusted source of truth. For the operating AI agent, this is the explicit user instruction, the system invariants, or the active Saṅkalpa log file. It establishes the baseline objective and direction.
2.  **Pratyakṣa (Direct Sensory Observation)**: The direct perception of the current environment. This corresponds to the agent performing active file readings, inspecting compiler outputs, reading console errors, or parsing shell logs. It represents the immediate, physical state of the codebase.
3.  **Anumāna (Logical Deduction / Inference)**: The reasoning sequence that bridges the gap between what was directly observed (*Pratyakṣa*) and what was authorized (*Śabda*) to formulate a proposed edit. For example, if the compiler (*Pratyakṣa*) shows an error, and the instructions (*Śabda*) require compilation safety, the agent infers (*Anumāna*) the necessary code fix.

By requiring a **Pramāṇa Audit** before any file edit, the agent must construct a verifiable chain of custody for its knowledge. This prevents the agent from introducing speculative, unrequested code based on hallucinated logic (**Bhrama**).

### B. Saṃyama (Dhāraṇā Focus Lock)
Patanjali's *Yoga Sūtras* describes *Samyama* as the progressive stabilization of attention through the three internal stages: *Dhāraṇā* (concentration), *Dhyāna* (absorption), and *Samādhi* (oneness). We apply the first stage to anchor agent attention:
*   **Dhāraṇā (Concentration)**: Defined as binding the mind's attention to a single localized point or object (*deśa-bandhaś-cittasya dhāraṇā*, Yoga Sūtras III.1).

We implement this as the **Dhāraṇā Focus Lock**. Before proposing any file edit, the agent must output a single-sentence statement summarizing the active task. This acts as a semantic anchor, forcing the agent's context window to remain locked onto the active task, preventing it from drifting to unrelated parts of the codebase.

### C. Yamas & Niyamas (Ethical System Constraints)
Rather than treating rules as arbitrary syntax, we structure workspace constraints using Patanjali’s ethical framework:
*   **Yamas (Universal Restraints / Prohibitions)**: Prevent actions that lead to entropy and system harm.
    *   *Ahiṃsā (Non-harm)*: Prohibits breaking existing build compiles or functional paths.
    *   *Asteya (Non-stealing)*: Prohibits deleting user comments, docstrings, or licenses.
    *   *Satya (Truth)*: Prohibits writing placeholders or fake data.
*   **Niyamas (Individual Observances / Duties)**: Promote practices that lead to system purity.
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

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call to prevent agent logic drift as a request to establish **Sthairyam** (cognitive stability). The user's vision calls for guardrails that bind the agent's attention directly to the human developer's intent. This instruction manifests as **Icchā Śakti** (the energy of pure will), demanding a system where the operating agent cannot drift into unauthorized codebase changes.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on the problem of drift, we observe that standard prompt instructions lack epistemic authority, leading to **Vikṣepa** (mental distraction/scattering of focus). We resolve this by drawing directly from **Nyāya Epistemology** (Pramāṇavāda) and **Aṣṭāṅga Yoga**. 

By establishing the three-fold *Pramāṇa* verification (Śabda, Pratyakṣa, Anumāna), we force the agent to establish the valid means of knowledge before proposing any action. Furthermore, by framing workspace rules under *Yamas* (Restraints) and *Niyamas* (Observances), system constraints are elevated from syntax validation to ethical code conduct boundaries. The *Dhāraṇā Focus Lock* completes this by anchoring the agent's mind to a single point, preventing cognitive scattering.

### 3. Nididhyāsana (Meditating / Deep Integration)
The integration of these guardrails was executed systematically across our configuration systems:
*   [config.json](file:///Users/universe/AUM/.aum/config.json) was restructured to group all file system invariants under explicit `yamas` and `niyamas` parameters.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) was updated to enforce the Pramāṇa verification loop and the Dhāraṇā Focus Lock on all agent execution beats.
*   The boundary limits template ([boundaries.md](file:///Users/universe/AUM/.aum/templates/boundaries.md)) was aligned to ensure validation checks are run during staging.
*   The final changes were committed to branch `main` (`85e602f`).

---

## 7. References & Appendix
*   [config.json](file:///Users/universe/AUM/.aum/config.json) — System invariants.
*   [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) — The active trigger manual.
*   [boundaries.md](file:///Users/universe/AUM/.aum/templates/boundaries.md) — Reorganized template.
*   *Vākyapadīya* by Bhartrihari — Sanskrit grammatical treatise on meaning and language.
*   *Yoga Sūtras* of Patanjali — Foundational text outlining Ashtanga Yoga psychology.
