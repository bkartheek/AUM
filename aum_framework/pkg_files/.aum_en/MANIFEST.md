---
title: "Mūla Manifest Global Manifest"
type: "manifest"
phase: "Phase 1: Pure Vision"
vedic_state: "Core Vision"
description: "The root index of folders, guidelines, safety criteria, and documentation synchronization rules."
---

# Mūla Manifest Global Manifest (V1.34.0)

This document serves as the **Mūla Manifest** (the root holistic manifest) for the workspace. It indexes all directories, templates, and rules, and defines the safety conditions and synchronization protocols that govern AI agents.

---

## 📂 1. Directory & Document Index

| Path | Vedic State | Function & Purpose |
| :--- | :--- | :--- |
| **[.aum/](.)** | *Core Vision* | Core configuration root. Governs all agent actions. |
| ├── **[config.json](config.json)** | *Project Rules* | Invariant rules structured under Strict Rules and Observances. |
| ├── **[manifest.json](manifest.json)** | *Manifest* | Dynamic cognitive session state tracker. |
| ├── **[INSTRUCTIONS.md](INSTRUCTIONS.md)** | *Core Vision* | Active trigger commands, receipt templates, and Git lifecycles. |
| ├── **[PHILOSOPHY.md](PHILOSOPHY.md)** | *Core Vision* | Philosophical reference guide (Traceability levels, Upanishadic quarters). |
| ├── **[templates/](templates/)** | *System Constraints* | Reusable guidelines, intake worksheets, and boundary specifications. |
| │   ├── [clarification_template.md](templates/clarification_template.md) | *Active Implementation* | Intake worksheet template. |
| │   ├── [blueprint_template.md](templates/blueprint_template.md) | *Architecture Design* | Abstract blueprinting template. |
| │   ├── [boundaries.md](templates/boundaries.md) | *System Constraints* | Boundary constraints template. |
| │   └── [retrospective_template.md](templates/retrospective_template.md) | *System Constraints* | Retrospective Audit self-examination template. |
| ├── **[tasks/](tasks/)** | *System Constraints* | Directory for active, paused, and completed task resolve logs. |
| ├── **[architecture/](architecture/)** | *System Constraints* | Master Architecture Review Board (ARB) logs. |
| │   └── **[decisions/](architecture/decisions/)** | *System Constraints* | Master Architecture Decision Record (ADR) logs (ADR-001 to ADR-034). |
| ├── **[memory/](memory/)** | *System Constraints* | Persistent cognitive memory caches storing learnings. |
| └── **[ideas/sparks.md](ideas/sparks.md)** | *Raw Idea* | Private local thought incubator diary (VCS gitignored). |
| **[scripts/](../scripts/)** | *Source Code* | Framework compilation and static parser utility scripts. |
| ├── **[parse_docs.js](../scripts/parse_docs.js)** | *Source Code* | Compiles framework markdown files into docs_data.json. |
| ├── **[aum.js](../scripts/aum.js)** | *Source Code* | The central AUM CLI Intent Orchestrator wrapper router. |
| ├── **[dispatcher.js](../scripts/dispatcher.js)** | *Source Code* | Dynamic context classifier and Kañcukas sheaths sandboxing tool. |
| ├── **[pranayama.js](../scripts/pranayama.js)** | *Source Code* | Context ventilation token compressor utility. |
| ├── **[bhavana.js](../scripts/bhavana.js)** | *Source Code* | Dynamic rule evolution compiler tool. |
| ├── **[upaya.js](../scripts/upaya.js)** | *Source Code* | Catur-Upāya progressive error recovery resolver. |
| ├── **[panini.js](../scripts/panini.js)** | *Source Code* | Pāṇinian generative code synthesization parser. |
| ├── **[catuskoti.js](../scripts/catuskoti.js)** | *Source Code* | Catuṣkoṭi tetralemma logic assertions testing library. |
| └── **[pratyabhijna.js](../scripts/pratyabhijna.js)** | *Source Code* | Pratyabhijñā host environment self-audit recognition script. |
| **[docs_portal/](../docs_portal/)** | *Source Code* | Premium React/Vite Single Page App documentation dashboard. |
| **[.github/workflows/deploy.yml](../.github/workflows/deploy.yml)** | *Source Code* | GitHub Actions automation pipeline for Pages deployment. |
| **[USERS.md](../USERS.md)** | *Source Code* | Comprehensive Developer Setup & Multi-Project Integration Guide. |

---

## 🔒 2. Safety Conditions: When is an Edit "Safe"?

An AI agent or developer is permitted to make modifications to the workspace *only* when the following **four safety conditions** are satisfied:

1.  **Focal Lock**: There is an `Active` Task log file under `.aum/tasks/` (specified in `manifest.json`).
2.  **Rhythmic Beat**: The Lifecycle Stage beat (`tala_beat` in `manifest.json`) is set to `manifest`. Writing code during the `intake` or `blueprint` beats is strictly prohibited.
3.  **Boundary Compliance**: The proposed changes do not violate the **Strict Rules** (Restraints: Ahimsa, Asteya, Satya) or **Observances** (Observances: Sauca, Svadhyaya) defined in `config.json` and `boundaries.md`.
4.  **Log Integration**: The files, folders, and targets affected by the edit are documented in the active Task log file *before* the changes are staged in Git.

---

## 🔄 3. Documentation Synchronization Protocol (Reverse Traceability Trace)

To prevent documentation decay and ensure that design choices remain in sync with the codebase, any agent operating in this workspace must enforce the **Reverse Traceability Trace**:

### The Synchronization Rule
If a public-facing file—such as [README.md](../README.md), [CLAUDE.md](../CLAUDE.md), or primary source code files—is modified, the agent **MUST** trace the change back to its source:
1.  **Verify the Authority (Śabda)**: Check if there is an active Task or an approved Architecture Decision Record (ADR) that details this structural modification.
2.  **Enforce Documentation Before Code**: If the change is not backed by an ADR or active Task, the agent must **halt execution** and instruct the user to write an ARB/ADR first, mapping the change out in the architecture logs before applying it to the public file.
3.  **Sync Documentation After Code**: Once the code is written and verified, the agent must immediately update the corresponding ADR/Task logs to document the completion details, compile results, and Git commit hashes.
