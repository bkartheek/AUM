---
title: "Saṅkalpa Log Schema Template"
type: "template"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Template to initiate and track independent intent resolves"
---

# Saṅkalpa Log Schema (Phase 2 — Integration)

Use this schema template to create and track independent intent and commitment threads (Saṅkalpa) inside the `deepsleep/logs/` directory.

---

## 🧵 Saṅkalpa Definition
*   **Saṅkalpa ID**: `sankalpa_00X_[short_name]`
*   **Title**: [Full title of this specific interest resolve/goal]
*   **Parent Saṅkalpa ID**: `sankalpa_00Y_[parent_name]` (or `None` if root)
*   **Lifecycle Status**: `Active` | `Paused` | `Completed` | `Deprecated`

---

## 🎯 Intent Blueprint Reference
*   **Waking Intake**: [Link to the filled cognitive intake worksheet in waking/]
*   **Dreaming Staging**: [Link to files in dreaming/sandbox/ or blueprint sheets]

---

## 📜 Conversation Record
*   **Date**: [Timestamp]
*   **User Spark**: [Raw prompt that initiated or resumed this resolve]
*   **Agent Queries**: [Clarification parameters raised]
*   **Resolutions**: [Details confirmed by the user in this session]

---

## 🎛️ Context State & Actions
*   **Spatial Coordinates**: [Which department/area/user initiates this? e.g., HR, Underwriting, Call Center]
*   **Temporal Resolve**: [What is the time-window or deadline?]
*   **Vow of Invariant Restraints**: [Any special constraints unique to this resolve; references to deepsleep/boundaries.md]
*   **Pending Actions**: [Step-by-step tasks left to perform upon resumption]
