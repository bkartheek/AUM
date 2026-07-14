---
title: "Mūla Sphoṭa Global Manifest"
type: "manifest"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "The root index of folders, guidelines, safety criteria, and documentation synchronization rules."
---

# Mūla Sphoṭa Global Manifest (V1.22.0)

This document serves as the **Mūla Sphoṭa** (the root holistic manifest) for the workspace. It indexes all directories, templates, and rules, and defines the safety conditions and synchronization protocols that govern AI agents.

---

## 📂 1. Directory & Document Index

| Path | Vedic State | Function & Purpose |
| :--- | :--- | :--- |
| **[.aum/](file:///Users/universe/AUM/.aum/)** | *Turīya* | Core configuration root. Governs all agent actions. |
| ├── **[config.json](file:///Users/universe/AUM/.aum/config.json)** | *Parā* | Invariant rules structured under Yamas and Niyamas. |
| ├── **[sphota.json](file:///Users/universe/AUM/.aum/sphota.json)** | *Sphoṭa* | Dynamic cognitive session state tracker. |
| ├── **[INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md)** | *Turīya* | Active trigger commands, receipt templates, and Git lifecycles. |
| ├── **[PHILOSOPHY.md](file:///Users/universe/AUM/.aum/PHILOSOPHY.md)** | *Turīya* | Philosophical reference guide (Vāk levels, Upanishadic quarters). |
| ├── **[templates/](file:///Users/universe/AUM/.aum/templates/)** | *Suṣupti* | Reusable guidelines, intake worksheets, and boundary specifications. |
| │   ├── [clarification_template.md](file:///Users/universe/AUM/.aum/templates/clarification_template.md) | *Jāgrat* | Intake worksheet template. |
| │   ├── [blueprint_template.md](file:///Users/universe/AUM/.aum/templates/blueprint_template.md) | *Svapna* | Abstract blueprinting template. |
| │   ├── [boundaries.md](file:///Users/universe/AUM/.aum/templates/boundaries.md) | *Suṣupti* | Boundary constraints template. |
| │   └── [retrospective_template.md](file:///Users/universe/AUM/.aum/templates/retrospective_template.md) | *Suṣupti* | Pratyavēkṣaṇa self-examination template. |
| ├── **[sankalpas/](file:///Users/universe/AUM/.aum/sankalpas/)** | *Suṣupti* | Directory for active, paused, and completed task resolve logs. |
| ├── **[architecture/](file:///Users/universe/AUM/.aum/architecture/)** | *Suṣupti* | Master Architecture Review Board (ARB) logs. |
| │   └── **[decisions/](file:///Users/universe/AUM/.aum/architecture/decisions/)** | *Suṣupti* | Master Architecture Decision Record (ADR) logs (ADR-001 to ADR-023). |
| ├── **[samskaras/](file:///Users/universe/AUM/.aum/samskaras/)** | *Suṣupti* | Persistent cognitive memory caches storing learnings. |
| └── **[intent_awakening/sparks.md](file:///Users/universe/AUM/.aum/intent_awakening/sparks.md)** | *Paśyantī* | Private local thought incubator diary (VCS gitignored). |
| **[scripts/](file:///Users/universe/AUM/scripts/)** | *Vaikharī* | Framework compilation and static parser utility scripts. |
| ├── **[parse_docs.js](file:///Users/universe/AUM/scripts/parse_docs.js)** | *Vaikharī* | Compiles framework markdown files into docs_data.json. |
| **[docs_portal/](file:///Users/universe/AUM/docs_portal/)** | *Vaikharī* | Premium React/Vite Single Page App documentation dashboard. |
| **[.github/workflows/deploy.yml](file:///Users/universe/AUM/.github/workflows/deploy.yml)** | *Vaikharī* | GitHub Actions automation pipeline for Pages deployment. |

---

## 🔒 2. Safety Conditions: When is an Edit "Safe"?

An AI agent or developer is permitted to make modifications to the workspace *only* when the following **four safety conditions** are satisfied:

1.  **Focal Lock**: There is an `Active` Saṅkalpa log file under `.aum/sankalpas/` (specified in `sphota.json`).
2.  **Rhythmic Beat**: The Tāla beat (`tala_beat` in `sphota.json`) is set to `manifest`. Writing code during the `intake` or `blueprint` beats is strictly prohibited.
3.  **Boundary Compliance**: The proposed changes do not violate the **Yamas** (Restraints: Ahimsa, Asteya, Satya) or **Niyamas** (Observances: Sauca, Svadhyaya) defined in `config.json` and `boundaries.md`.
4.  **Log Integration**: The files, folders, and targets affected by the edit are documented in the active Saṅkalpa log file *before* the changes are staged in Git.

---

## 🔄 3. Grantha Synchronization Protocol (Reverse Vāk Trace)

To prevent documentation decay and ensure that design choices remain in sync with the codebase, any agent operating in this workspace must enforce the **Reverse Vāk Trace**:

### The Synchronization Rule
If a public-facing file—such as [README.md](file:///Users/universe/AUM/README.md), [CLAUDE.md](file:///Users/universe/AUM/CLAUDE.md), or primary source code files—is modified, the agent **MUST** trace the change back to its source:
1.  **Verify the Authority (Śabda)**: Check if there is an active Saṅkalpa or an approved Architecture Decision Record (ADR) that details this structural modification.
2.  **Enforce Documentation Before Code**: If the change is not backed by an ADR or active Saṅkalpa, the agent must **halt execution** and instruct the user to write an ARB/ADR first, mapping the change out in the architecture logs before applying it to the public file.
3.  **Sync Documentation After Code**: Once the code is written and verified, the agent must immediately update the corresponding ADR/Saṅkalpa logs to document the completion details, compile results, and Git commit hashes.
