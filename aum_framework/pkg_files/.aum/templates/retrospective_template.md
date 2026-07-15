---
title: "Pratyavēkṣaṇa Retrospective Template"
type: "template"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Worksheet template to perform periodic alignment retrospectives, auditing codebase purity, and preventing rule drift."
---

# Pratyavēkṣaṇa Retrospective Log (Phase 2 — Self-Examination)

Use this template to perform periodic introspection on project and framework development. Retrospectives should be run at regular milestones (e.g. end of release cycles or every 5th completed Saṅkalpa) to prevent cognitive and structural drift.

---

## 📅 1. Audit Metadata
*   **Retrospective ID**: `retrospective_[YYYYMMDD]_[milestone]`
*   **Audit Date**: [YYYY-MM-DD]
*   **Active Framework Version**: [vX.Y.Z]
*   **Contributors Audited**: [List of developers & AI agents active in this cycle]
*   **Logs Analyzed**: [List of Saṅkalpas & ADRs reviewed]

---

## 🚫 2. Yamas & Niyamas Compliance Audit

Audit the files modified in this cycle against the system ethics:

### Yamas (Restraints)
*   **Ahiṃsā (Non-harm)**: Did any commit break compilation builds, unit tests, or existing functionality? (Yes/No - detail any occurrences).
*   **Asteya (Non-stealing)**: Did any agent delete user comments, logic functions, or licenses without authorization? (Yes/No - detail).
*   **Satya (Truth)**: Are there any temporary stubs, empty placeholder functions, or mock codes left in the active codebase? (Yes/No - detail).
*   **Isolation**: Were any files read/written outside the designated workspace path? (Yes/No).

### Niyamas (Observances)
*   **Śauca (Purity)**: Is the codebase formatting clean? Are there any unresolved compiler/linter warnings?
*   **Svādhyāya (Self-study)**: Did the agent/developer run logical tracing and execution validations before staging?
*   **Visual Consistency**: Did all chat communications and transaction receipts adhere to formatting standards?

---

## 🔄 3. Grantha Synchronization & Vāk Trace Audit

Verify the alignment between design documents and public files:
*   **Reverse Vāk Trace Checks**: Did any edits to public files (e.g. `README.md`, `CLAUDE.md`, source code) occur without a corresponding Saṅkalpa or ADR?
*   **Sphoṭa Index Check**: Does [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) index match the physical files in the workspace exactly? (Yes/No - list discrepancies).

---

## 🧠 4. Satsaṅga Alignment (Drift Assessment)

Assess collective alignment and identify decay:
*   **Rule Drift**: Have any AI agents or developers bypass rules, ignore triggers, or drift away from the core philosophy?
*   **Proposed Amendments**: List any adjustments needed to invariants, trigger commands, or instructions to optimize future alignment.
