---
title: "Architecture Decision Record: Prāṇāyāma Context Ventilation"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing Prāṇāyāma context window ventilation and token limit controls."
---

# Architecture Decision Record (ADR) Log: ADR-027

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-027
  Subject     : Prāṇāyāma Context Ventilation
  Status      : Implemented
  Author      : Yogi (Guardian Agent)
  Date        : 2026-07-14
  Target Ver  : v1.27.0
=====================================================================
```

---

## 1. Executive Summary

We implement a **Prāṇāyāma Context Compressor** script (`scripts/pranayama.js`) to regulate token limits and prevent instruction decay during multi-turn agent runs.

---

## 2. Technical Architecture

*   File Location: [pranayama.js](file:///Users/universe/AUM/scripts/pranayama.js)
*   Cleans raw prompt dumps by identifying and removing redundant log segments and tracing reports.
*   Enforces a clean balance of inhalation and exhalation.
