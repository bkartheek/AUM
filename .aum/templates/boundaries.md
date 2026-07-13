---
title: "Invariant Boundaries Guidelines"
type: "policy"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Absolute limits and invariants governing the workspace actions"
---

# Invariant Boundaries (Phase 2 — Boundaries)

This file defines the absolute limits and invariants governing the Intent Engine workspace.

## 🛠️ The Hard Limits (Non-Negotiable)
1.  **Isolation**: All configuration, session history, blueprints, and decision logs must be stored within this project directory.
2.  **No External Writing**: Do not read or write files outside `/Users/universe/AUM` (e.g., system temp paths, user config directories).
3.  **Visual Consistency**: Every communication in the chat box must follow the formatting schema defined in `INTENT.MD` (headings, callouts, bolding, listings).
4.  **No Unapproved Logic Execution**: Never implement code modules or edit primary files before capturing intent using the clarification templates.
