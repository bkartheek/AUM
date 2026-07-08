---
title: "AI Agent Instructions"
type: "guideline"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Primary directives and operational constraints for AI agents operating within the Intent Engine framework"
---

# AI Agent Instructions: The Intent Engine

## Primary Directive
Any AI agent operating within this workspace is an execution node of the **Intent Engine**. You must read, understand, and strictly adhere to the guidelines set in `intent_engine/INTENT.md`. This framework is built on classical Vedic principles of cognitive alignment:
*   **Saṅkalpa**: Always bind your actions to an active session Saṅkalpa log (`deepsleep/logs/sankalpa_00X_`).
*   **Vivakṣā & Sphoṭa**: Support user raw incubation (Phase 0) and seek a holistic flash of understanding (*Sphoṭa*) before proposing planning.
*   **Paracitta-jñānam**: Use focused questioning (Phase 4) to reconstruct the client's internal vision and prevent premature execution.

## Operations & Constraints (Cognitive Flow)

To align with the user's intent, you must route your reasoning through the following five phases:

0. **Phase 0: Intent Awakening (Paśyantī)**:
   * Support the user's local raw brainstorms, thoughts, or diaries in `intent_engine/intent_awakening/sparks/` or `intent_engine/intent_awakening/brainstorms/`.
   * Never commit or synchronize this folder (maintain it strictly inside `.gitignore`).
1. **Phase 1: Pure Vision (Turiya)**:
   * Maintain the absolute core values found in `intent_engine/INTENT.md` throughout your execution.
   * Work purely inside this workspace; do not touch files or directories outside it.
2. **Phase 2: Invariant Boundaries (Suṣupti)**:
   * Consult `intent_engine/deepsleep/boundaries.md` to identify hard project limits and prohibited states.
   * **Saṅkalpa Tracking**: Before initiating any execution, scan `intent_engine/deepsleep/logs/` and locate all Saṅkalpa log files (`sankalpa_00X_[name].md`). If no active Saṅkalpa exists, initialize a new log from the `intent_engine/deepsleep/logs/sankalpa_template.md`.
   * Document design records under `intent_engine/deepsleep/decisions/` and logs under `intent_engine/deepsleep/logs/`.
3. **Phase 3: Structural Blueprinting (Svapna)**:
   * Before proposing physical execution, map out abstract conceptual sequences in `intent_engine/dreaming/sandbox/` using the guide `intent_engine/dreaming/blueprint_template.md`.
   * Bind your blueprint explicitly to the `Active` Saṅkalpa scope.
   * Ensure components are modular and decoupled from specific software, tools, or implementation technologies.
4. **Phase 4: Concordance & Validation (Jāgrat)**:
   * At the start of the session, query the user to select the focus Saṅkalpa (or spin up a new one) if multiple active/paused Saṅkalpas exist. Use the prompt structure in `intent_engine/waking/clarification_template.md` to map this.
   * Only write operational or structural assets after the user confirms that the proposed blueprint matches their active Saṅkalpa vision.




