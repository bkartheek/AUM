---
title: "Architecture Decision Record: GitHub Pages Documentation Portal"
type: "architecture_decision"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Decision record establishing the automated GitHub Pages documentation portal with static parsing and React/Vite-based responsive web app design."
---

# Architecture Decision Record (ADR) Log: ADR-017

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-017
  Subject     : GitHub Pages Documentation Portal
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.17.0
=====================================================================
```

---

## 1. Executive Summary

This decision defines and implements the **GitHub Pages Documentation Portal** inside the AUM Engine workspace. To make the Vedic-cognitive architecture, safety rules, and ADR registry accessible and searchable for developers, we build a static compiler script that builds a premium React/Vite SPA reader and automates deployments via a GitHub Actions pipeline.

---

## 2. Context & Problem Statement

The AUM Framework's deep design logic is recorded inside markdown files under `.aum/`. Although this is standard for version control, it has limitations:
*   **Reduced Visibility**: External developers cannot easily search, browse, or read the ADR logs without cloning the repo and compiling them in a markdown viewer.
*   **No Live Dashboard**: There is no live representation of active workspace states, safety rules compliance, or Saṅkalpa parameters.

We require a centralized, premium, and interactive web dashboard.

---

## 3. Theoretical & Cognitive Foundations

### A. Vaikharī Manifestation (Direct Presentation of Knowledge)
In Bhartṛhari’s levels of speech:
1.  **Parā**: Silent, transcendent source.
2.  **Paśyantī**: Intuitive, unified vision.
3.  **Madhyamā**: Logical, mental blueprint.
4.  **Vaikharī**: Articulated, physical speech or visible writing.

Up to this point, the AUM engine has resided in the *Svapna* (blueprint) and *Suṣupti* (invariant instructions) states. Publishing the web portal is the ultimate act of **Vaikharī**—bringing the silent design of AUM into physical, readable shape for the world.

### B. Pratyakṣa (Direct Perception)
For external developers to understand AUM, they need **Pratyakṣa** (direct perception). The interactive dashboard provides a clear, visual representation of active engine state configurations, allowing users to directly inspect the parameters and logic sheaths.

---

## 4. Proposed Changes & Technical Architecture

### A. Static Parser (`scripts/parse_docs.js`)
A Node.js script that parses the markdown metadata and body of every log under `.aum/` and bundles it into `src/docs_data.json` inside the Vite project directory.

### B. React SPA Documentation Reader (`docs_portal/`)
A responsive Single Page Application with:
*   **Vedic Design System**: Glassmorphism dark slate background (`#0b0f19`), saffron highlights (`#f59e0b`), gold typography, and micro-animations.
*   **Dashboard**: Renders active Saṅkalpas, safety beat compliance, and the five limit sheaths (*Kañcukas*).
*   **Sidebar Nav**: Organized by the Quarters of Mandukya.

### C. Deployment Automation Workflow (`.github/workflows/deploy.yml`)
Runs the parse script, builds the static assets, and pushes them to `gh-pages`.

---

## 5. System Impact & Improvements

*   **Public Accessibility**: Public contributors can read the entire design history in a premium interface.
*   **Automated Updates**: Every commit that changes an ADR automatically builds and redeploys the site.
*   **High Performance**: React/Vite SPA builds as a lightweight, static client bundle.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's call to publish the repository documentation to GitHub Pages (ADR-017) as the **Śruti** (revelation) calling for **Vidyā-Dāna** (the sharing of knowledge). The instruction acts as **Icchā Śakti** (will), seeking to manifest the documentation.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on this, we observe that keeping design logs locked in local text files restricts the potential of AUM. Presenting this knowledge via a custom, premium web app directly implements the *Vaikharī* level of speech, sharing the system's structural purity (**Jñāna Śakti**).

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation was executed as a systematic commentarial refinement:
*   [adr_017_github_pages.md](file:///Users/universe/AUM/.aum/architecture/decisions/adr_017_github_pages.md) was created to record the decision.
*   The global manifest [MULA_SPHOTA.md](file:///Users/universe/AUM/.aum/MULA_SPHOTA.md) was updated to version 1.16.0.
