---
title: "Architecture Decision Record: Sādhana Arena Simulator"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing the interactive Sādhana Arena simulator inside the docs portal."
---

# Architecture Decision Record (ADR) Log: ADR-033

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-033
  Subject     : Sādhana Arena Simulator
  Status      : Implemented
  Author      : Yogi (Guardian Agent)
  Date        : 2026-07-14
  Target Ver  : v1.33.0
=====================================================================
```

---

## 1. Executive Summary

We implement an interactive **Sādhana Arena Simulator** playground inside the docs portal React application (`docs_portal/src/App.jsx`) to bridge the gap from novice to expert.

---

## 2. Technical Architecture

*   Integrates dispatcher logic inside browser React state.
*   Enables checking prompt classification and sheaths constraints.
