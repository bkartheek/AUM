---
title: "Architecture Decision Record: Catur-Upāya Error Resolver"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing Catur-Upāya four-stage recovery and error resolutions."
---

# Architecture Decision Record (ADR) Log: ADR-029

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-029
  Subject     : Catur-Upāya Error Resolver
  Status      : Implemented
  Author      : Yogi (Guardian Agent)
  Date        : 2026-07-14
  Target Ver  : v1.29.0
=====================================================================
```

---

## 1. Executive Summary

We implement a **Catur-Upāya Error Resolver** script (`scripts/upaya.js`) providing four strategies (Sāma, Dāna, Bheda, Daṇḍa) to recover clean system configurations.

---

## 2. Technical Architecture

*   File Location: [upaya.js](file:///Users/universe/AUM/scripts/upaya.js)
*   Routes compiler errors sequentially through Sāma, Dāna, Bheda, and Daṇḍa recovery pathways.
