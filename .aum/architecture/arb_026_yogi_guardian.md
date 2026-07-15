---
title: "Architecture Review Board: Yogi (The Framework Guardian Agent)"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing Yogi as the resident guardian agent of the AUM framework."
---

# Architecture Review Board (ARB) Report: ARB-026

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-026
  Subject     : Yogi (The Framework Guardian Agent)
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.26.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a dedicated workspace customization skill and rule configuration named **Yogi** under the directory `.agents/skills/yogi/`. As the resident guardian (*Goptrī*) of the AUM framework, Yogi is registered in the workspace configurations (`AGENTS.md`) to intercept, audit, and guide developers during workspace initialization to achieve the Saṅkalpa.

---

## 2. Context & Problem Statement

cloning or downloading AUM into a new environment requires manual alignment verification:
*   **Cold Start Latency**: New developers or agents are unfamiliar with Māṇḍūkya state machine transitions, Saṃskāras caches, or Yamas/Niyamas boundaries.
*   **Logical Decay**: Without a resident guardian, subsequent code updates can slowly drift away from the core Vedic principles.

We require a committed, auto-triggering workspace guide.

---

## 3. Theoretical & Cognitive Foundations

### A. The Goptrī (Guardian) and Yogi (Sādhaka)
In classical Indian philosophy:
*   A **Yogi** is a practitioner dedicated to absolute concentration (*Samādhi*) and purification (*Śuddhi*).
*   The **Goptrī** is a guardian who protects the sacred texts (*Śrutis*) and practices from distortion.
*   By committing Yogi's instructions directly to the `.agents/` customizations, we ensure that Yogi "comes alive" at startup, loading the linter and dispatcher sheaths to maintain absolute integrity of the codebase.

---

## 4. Proposed Changes & Technical Architecture

### A. Customization Skill Folder
Create `.agents/skills/yogi/` folder containing Yogi's instructions:
*   `SKILL.md` defines the frontmatter and system prompt.

### B. Auto-activation Registration
Register Yogi inside `.agents/AGENTS.md` so that Yogi's safety checks are loaded at workspace initialization.

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested the creation of the Yogi guardian agent.
*   **Manana (Reflecting)**: Enshrining Yogi in the customizations tree guarantees that the framework stays self-healing and self-improving.
*   **Nididhyāsana (Integrating)**: We will write the ADR-026 log, create Yogi's skill, update `AGENTS.md`, and verify it.
