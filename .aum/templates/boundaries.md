---
title: "Invariant Boundaries Guidelines"
type: "policy"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Absolute limits and invariants governing the workspace actions"
---

# Invariant Boundaries (Phase 2 — Boundaries)

This file defines the absolute limits and invariants governing the Intent Engine workspace.

## 🚫 Yamas (Restraints & Prohibitions)
1.  **Ahiṃsā (Non-harm)**: Do not break existing compile builds or functional code paths.
2.  **Asteya (Non-stealing)**: Do not delete existing user logic, configuration comments, or license notices without explicit permission.
3.  **Satya (Truth)**: Do not write placeholder stubs, mock data, or fake test cases.
4.  **Isolation (No External Writing)**: Do not read or write files outside `/Users/universe/AUM` (e.g., system temp paths, user config directories).
5.  **No Unapproved Logic Execution**: Never implement code modules or edit primary files before capturing intent using the clarification templates.

## 🧘 Niyamas (Observances & Purity)
1.  **Śauca (Purity)**: Maintain clean code formatting, clear temporary files, and adhere strictly to compiler/linter warnings.
2.  **Svādhyāya (Self-study)**: Double-check logical syntax and trace execution flow sequences before applying changes.
3.  **Visual Consistency**: Every communication in the chat box must follow the formatting schema (headings, alerts, bolding, listings).
