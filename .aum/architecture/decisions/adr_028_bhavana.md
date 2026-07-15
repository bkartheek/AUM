---
title: "Architecture Decision Record: Sphoṭa-Bhāvanā Rule Incubator"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing Sphoṭa-Bhāvanā rule incubator and self-improving prompts."
---

# Architecture Decision Record (ADR) Log: ADR-028

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-028
  Subject     : Sphoṭa-Bhāvanā Rule Incubator
  Status      : Implemented
  Author      : Yogi (Guardian Agent)
  Date        : 2026-07-14
  Target Ver  : v1.28.0
=====================================================================
```

---

## 1. Executive Summary

We implement a **Sphoṭa-Bhāvanā Rule Incubator** script (`scripts/bhavana.js`) that auto-updates system configuration files based on persistent Saṃskāra cache learnings.

---

## 2. Technical Architecture

*   File Location: [bhavana.js](file:///Users/universe/AUM/scripts/bhavana.js)
*   Compiles JSON memories into Markdown rule bullet points.
*   Modifies `.agents/AGENTS.md` to append the evolved rules block.
