---
title: "Architecture Review Board: Dynamic Context Attention Filtering (Pratyāhāra)"
type: "architecture_review"
phase: "Phase 3: Structural Blueprinting"
vedic_state: "Svapna"
description: "Review document establishing the dynamic context filter mechanism (Pratyāhāra) to optimize agent attention window."
---

# Architecture Review Board (ARB) Report: ARB-022

```text
=====================================================================
                    ARCHITECTURE REVIEW BOARD REPORT
=====================================================================
  ARB Number  : ARB-022
  Subject     : Dynamic Context Attention Filtering (Pratyāhāra)
  Status      : Pending Review
  Author      : Antigravity AI Agent
  Date        : 2026-07-14
  Target Ver  : v1.22.0
=====================================================================
```

---

## 1. Executive Summary

This report proposes a dynamic **Workspace Context Compressor** script (`scripts/prune_context.js`). By implementing sensory/external abstraction limits (*Pratyāhāra*), this module parses the active task's focus list and filters out large, unrelated subdirectories and caching folders. This feeds developer agents only the absolute minimal file set needed for their active Saṅkalpa.

---

## 2. Context & Problem Statement

AI coding agents are subject to strict context-window token limits. When loaded:
*   **Context Bloat**: Including entire deep node modules directories, Vite builds, and caching caches in search results drifts the agent's focus.
*   **Losing Track of Rules**: Large workspaces overflow the context window, causing agents to forget Yamas/Niyamas constraints.

We require a programmatic pruner that detaches unrelated elements.

---

## 3. Theoretical & Cognitive Foundations

### A. Pratyāhāra (Sensory Withdrawal)
In classical Raja Yoga:
*   **Pratyāhāra** represents the withdrawal of the senses from external objects. It is the fifth limb of Yoga, preparing the mind for focus by blocking out sensory noise.
*   In agentic software engineering, a large workspace acts as sensory noise. By applying *Pratyāhāra* to the file system context, we withdraw the agent's "senses" (its search/indexing tools) from extraneous folders, focusing attention entirely on target files.

---

## 4. Proposed Changes & Technical Architecture

### A. Pruner Script (`scripts/prune_context.js`)
Build a Node script that runs:
1.  **Reads Active Scope**: Locates files specified in the active Saṅkalpa folder.
2.  **Generates Context Filter Map**: Emits a text file listing the exact paths that are relevant, hiding other directories (e.g. `node_modules`, `docs_portal/dist`).

---

## 5. Vedic Alignment Audit

*   **Śravaṇa (Hearing)**: The user requested implementation of the three remaining concepts, including Pratyāhāra.
*   **Manana (Reflecting)**: Restricting agent visibility to task-relevant code blocks prevents context drift and reduces token consumption.
*   **Nididhyāsana (Integrating)**: We will write the ADR-022 log, write `prune_context.js`, and verify it.
