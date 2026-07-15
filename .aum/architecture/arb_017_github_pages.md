---
title: "Architecture Review Board: GitHub Pages Documentation Portal"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the automated GitHub Pages documentation portal with static parsing and React/Vite-based responsive web app design."
---

# Architecture Review Board (ARB) Report: ARB-017

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-017
  Subject     : GitHub Pages Documentation Portal
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.17.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes the creation of an automated documentation portal published via **GitHub Pages**. We will develop a responsive, premium web application built with **React/Vite**, powered by a **static parser script** that converts the entire `.aum/` framework database (ADRs, ARBs, Manifest, and Instructions) into a unified documentation database. A **GitHub Actions workflow** will automate build and deployment to the `gh-pages` branch on every push.

---

## 2. Context & Problem Statement

Currently, the AUM Framework's deep Vedic-cognitive architecture is documented exclusively in markdown files under `.aum/`. While clean and version-controlled, this layout:
*   **Lacks Accessibility**: Public contributors and developers cannot easily search, view, or navigate the ADR logs without cloning the repository and parsing markdown.
*   **No Centralized Portal**: There is no live visual dashboard that represents the current state of AUM engine parameters, safety indicators, and active Saṅkalpas.

We require a premium, live web application that renders this rich knowledge base in a highly aesthetic, responsive format.

### What Was Affected
*   **Public Readability**: The lack of an interactive documentation portal limited external understanding and developer onboarding.

---

## 3. Theoretical & Cognitive Foundations

### A. Vaikharī Manifestation (Physical Web Portal)
In Bhartṛhari’s levels of speech, **Vaikharī** is the physical, audible, and visible manifestation of consciousness. Up to this point, the AUM framework has resided in the *Svapna* (blueprint) and *Suṣupti* (invariant instructions) states. Creating a public web portal is the ultimate act of **Vaikharī**—bringing the silent, inner design of the engine into physical form for external minds.

### B. Pratyakṣa (Direct Perception)
For external developers to understand the framework, they need **Pratyakṣa** (direct perception). The interactive dashboard provides a clear, visual representation of active engine state configurations, allowing users to directly inspect the parameters and logic sheaths.

---

## 4. Proposed Changes & Technical Architecture

```text
  [.aum/ ADRs & Manifest] ➔ [Node Parser Script] ➔ [React/Vite SPA Web App] ➔ [GitHub Actions] ➔ 🌐 GitHub Pages
```

### A. Static Parser (`scripts/parse_docs.js`)
A Node.js script that scans `.aum/` to parse markdown frontmatter and content, compiling a single `docs_data.json` database.

### B. React/Vite SPA Documentation App (`docs/`)
A responsive, high-fidelity React single-page app displaying:
1.  **Dashboard**: Live status of AUM engine parameters, safety checks, and active Saṅkalpas.
2.  **Quarters Navigation**: Document lists categorized under Jāgrat, Svapna, Suṣupti, and Turīya.
3.  **Interactive Document Reader**: Rendering markdown with search functionality and dark mode support.
4.  **Vedic Design Theme**: Sleek slate background, saffron highlight accents, glassmorphic layout cards, and fluid transitions.

### C. Deployment Automation (`.github/workflows/deploy.yml`)
A workflow that installs packages, runs the parser script, compiles the Vite site, and deploys it to the `gh-pages` branch on every push.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested a GitHub Pages portal to make the documentation readable to the public.
*   **Manana (Reflecting)**: A custom React/Vite portal is far superior to generic static generators. It allows custom interactive charts (e.g. visualizing the five sheaths and four states) and guarantees rich, premium aesthetics.
*   **Nididhyāsana (Integrating)**: We will write the implementation plan, gain approval, code the portal, configure the workflow, and deploy.
