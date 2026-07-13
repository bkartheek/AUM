---
title: "Claude Code Instructions"
type: "guideline"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Repository-wide instructions for Claude Code to conform to the Intent Engine principles"
---

# CLAUDE.md: Claude Code Project Rules

This project uses the **AUM Intent Engine**—a universal cognitive framework to align AI and human actions with the user's intent.

## 🚨 CRITICAL RULES FOR CLAUDE CODE

1.  **Check Active Saṅkalpa**: At start of session, read `.aum/sphota.json` and the active log under `.aum/sankalpas/` to align with the invariants, constraints, and active resolve.
2.  **Halt Premature Execution**: Do not edit workspace code unless there is an active Saṅkalpa and the Tāla beat is set to `manifest` in `sphota.json`.
3.  **Self-Orchestrate Triggers**: Act as the framework's runtime engine. Intercept user triggers (e.g. `AUM: RESOLVE`, `AUM: SPARK`, `AUM: BEAT next`, `AUM: DRONE`), modify the `.aum/` state files accordingly, and print visual transaction receipts.
4.  **Keep Logs Updated**: Document session progress, blueprint structures, and resolutions inside the active resolve log under `.aum/sankalpas/sankalpa_XXX_[name].md`.
5.  **Adhere to Boundaries**: Respect constraints in `.aum/config.json` and [boundaries.md](file:///Users/universe/AUM/.aum/templates/boundaries.md).

