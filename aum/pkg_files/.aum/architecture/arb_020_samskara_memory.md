---
title: "Architecture Review Board: Persistent Cognitive Memory Caching (Saṃskāras)"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document detailing the implementation of a persistent cognitive cache (Saṃskāra database) storing bug resolutions and learnings."
---

# Architecture Review Board (ARB) Report: ARB-020

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-020
  Subject     : Persistent Cognitive Memory Caching (Saṃskāras)
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.20.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a **Persistent Cognitive Memory Cache** system under the directory `.aum/samskaras/`. By recording structured summaries of resolved tasks, compiler bugs, and corrections, AUM enables developer agents to load past experiences at startup, preventing logical drifts and repetitive errors across separate sessions.

---

## 2. Context & Problem Statement

AI coding agents run inside stateless execution environments. As a result:
*   **Knowledge Reset**: Lessons learned during previous tasks are lost once the conversation finishes.
*   **Repetitive Debugging**: Agents waste turns troubleshooting the exact same compiler bindings, dependency conflicts, or configuration issues repeatedly.

We require a lightweight, directory-level database of past cognitive impressions.

---

## 3. Theoretical & Cognitive Foundations

### A. Saṃskāras and Vāsanās (Subconscious Impressions)
In classical Indian psychology (specifically Sāṅkhya and Yoga):
*   **Saṃskāra** represents the residual trace or impression left in the mind by every action, word, or cognitive event.
*   These impressions coalesce into **Vāsanās** (habit patterns / behavioral tendencies) that steer future actions.
*   By writing a structured log of what was done, what failed, and what succeeded, we create digital *Saṃskāras* that guide the agent's future behavior (*Vāsanās*), leading to self-improving cognitive flow.

---

## 4. Proposed Changes & Technical Architecture

### A. Directory Structure
*   Create `.aum/samskaras/` folder.
*   Individual memory files are stored as JSON files: `.aum/samskaras/samskara_[sankalpa_id].json`.
*   A schema structure:
    ```json
    {
      "sankalpa_id": "sankalpa_018_onboarding",
      "summary": "Resolved unstyled docs portal view by shifting from Tailwind to Vanilla CSS.",
      "critical_learnings": [
        "Tailwind was not configured in the Vite template, rendering styles invalid.",
        "Must use Vanilla CSS variable rules in index.css for portal custom skins."
      ],
      "compiler_gotchas": [
        "Vite v8 native bindings skip skipped-binding checks on standard Linux runners. Run 'npm install @rolldown/binding-linux-x64-gnu' before compile."
      ]
    }
    ```

### B. Compilation parser integration
*   Modify `scripts/parse_docs.js` to parse `.aum/samskaras/*.json` and compile them into a unified list inside `docs_data.json` so they are readable on the live Vaikharī portal dashboard as a "Persistent Memory Ledger".

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested implementation of the proposed Vedic engineering concepts starting with the persistent memory cache.
*   **Manana (Reflecting)**: Saṃskāra mapping is the perfect conceptual solution for stateless session memory drift.
*   **Nididhyāsana (Integrating)**: We will write the implementation plan, get approval, apply edits, build, commit, and push.
