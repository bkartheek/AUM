---
title: "Architecture Review Board: Mūla Sphoṭa Manifest"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the Mūla Sphoṭa global manifest and the Reverse Vāk Trace synchronization protocol."
---

# Architecture Review Board (ARB) Report: ARB-006

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-006
  Subject     : Mūla Sphoṭa Manifest & Grantha Sync Protocol
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.6.0
=====================================================================
```

---

## 1. Motivation & Purpose

As the AUM Engine codebase expands, we need a mechanism to coordinate all files, rule constraints, and active goals. Currently, information is distributed across several directories (`.aum/templates/`, `.aum/sankalpas/`, `.aum/architecture/decisions/`). 

To prevent AI agents from having to parse all documents simultaneously (which exhausts context and causes attention drift), we are introducing:
1.  **Mūla Sphoṭa Global Manifest (`.aum/MULA_SPHOTA.md`)**: A root file mapping every subdirectory, template purpose, rule dependency, and safety criteria.
2.  **Reverse Vāk Trace (Grantha Sync Protocol)**: A synchronization guard. If a public-facing file (like `README.md` or source files) is modified, the agent must execute a validation check tracing it back to the corresponding architectural decision record (ADR) or active resolve log (Saṅkalpa) for alignment confirmation.

---

## 2. Proposed Changes & Technical Architecture

### A. Create the Global Manifest (`.aum/MULA_SPHOTA.md`)
This file will serve as the index of directories and establish safety conditions (e.g. when is a file edit considered "safe" or "unlocked").

### B. Implement the Reverse Vāk Trace Sync Protocol
We will update [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md) to require:
*   Before modifying public files, the agent must check if an active Saṅkalpa or ADR authorizes the change.
*   If a change is proposed to `README.md` or source code without an ADR, the agent must prompt the user to create the ARB/ADR first (reversing from Vaikharī back to Parā).

### C. Create ADR-006 Log
Create `.aum/architecture/decisions/adr_006_mula_sphota.md` under the standardized template to log this structural decision.

---

## 3. Theoretical & Cognitive Foundations

In Kashmir Shaivism and Sanskrit grammar theory:
*   **Mūla Sphoṭa**: The primordial, unified mass of meaning before it splits into multiple words. The global manifest acts as this unified source, detailing how the diverse parts of the repository relate.
*   **Śabda-Pūrvaka-Yoga**: The cognitive practice of ascending from physical speech (*Vaikharī*) back to silent intent (*Parā*). The **Reverse Vāk Trace** implements this practice in code: when a physical file is modified, the agent must logically trace it back to its silent architectural seed, ensuring documentation and code remain in sync.

---

## 4. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested a global manifest file mapping folders, documentation sequence, and defining when changes are safe, along with a synchronization link between file edits and architecture reviews.
*   **Manana (Reflecting)**: Structuring this under *Mūla Sphoṭa* and *Śabda-Pūrvaka-Yoga* ensures the framework maintains complete conceptual unity. It saves token overhead by allowing the agent to read the manifest index first instead of loading all background files.
*   **Nididhyāsana (Integrating)**: We will create `.aum/MULA_SPHOTA.md`, write `adr_006_mula_sphota.md`, and update `INSTRUCTIONS.md` and `README.md`.
