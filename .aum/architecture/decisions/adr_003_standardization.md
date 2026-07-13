---
title: "Architecture Decision Record: Premium ARB Standardization"
type: "architecture_decision"
phase: "Phase 2: Invariant Boundaries"
vedic_state: "Suṣupti"
description: "Standardizing the documentation schema for system decisions to make it publication-ready and fit for future book integration."
---

# Architecture Decision Record (ADR) Log: ADR-003

```text
=====================================================================
                    ARCHITECTURE DECISION RECORD
=====================================================================
  ADR Number  : ADR-003
  Subject     : Establishing Publication-Grade ARB Guidelines
  Status      : Implemented
  Author      : Antigravity AI Agent
  Date        : 2026-07-13
  Target Ver  : v1.3.0
=====================================================================
```

---

## 1. Executive Summary

This report outlines the standardization of the Architecture Review Board (ARB) guidelines within the AUM Cognitive workspace. To support the user's intent to publish these architectural documents in a future design book, we have established a publication-grade ARB template. This template enforces rigorous detail regarding context, cognitive foundations, structural transitions, system impacts, and Vedic audits. Using this template, we have successfully rewritten all prior ARB logs (ARB-001 and ARB-002) to ensure structural consistency and depth.

---

## 2. Context & Problem Statement

As the AUM Cognitive framework evolved, early ARB logs (specifically ARB-001 and ARB-002) were created as short, summary-style documents. While they tracked the file changes, they lacked:
*   **Deep Research Context**: They did not fully explain the Sanskrit grammatical and Vedic psychological foundations backing the designs.
*   **System Impact Mapping**: The reports lacked clear before/after ASCII drawings and detailed breakdowns of how different IDE tools (Cursor, Copilot, Cline) are impacted.
*   **Deprecation Logs**: They did not explicitly detail what was removed or untracked from the codebase.

This lack of depth made the early logs unfit for compilation into a published book and less useful as a learning resource for external developers.

### What Was Affected
*   **Documentation Uniformity**: ARB logs lacked a standard schema, causing inconsistencies in metadata and depth of content.
*   **Knowledge Lineage**: Future developers could not easily trace the complete reasoning behind early consolidation and guardrail decisions.

### What Was Removed
*   The previous, short-form versions of `arb_001_consolidation.md` and `arb_002_vedic_guards_alignment.md` were overwritten and replaced by their comprehensive, premium editions.

---

## 3. Theoretical & Cognitive Foundations

In the classical Indian intellectual and philosophical traditions, complex systems of knowledge are preserved and transmitted through a rigorous, two-tiered commentarial structure:
1.  **Sūtra (Aphoristic Thread)**: Extremely concise, dense statements of rules or guidelines, derived from the Sanskrit root *siv* (to sew). A *Sūtra* is designed for optimal memory retention, conveying maximum meaning with minimum syllables (*alpākṣaram asandigdham*).
2.  **Bhāṣya (Commentarial Exposition)**: An expansive, detailed analysis that handles justifications, reconciles apparent contradictions, addresses opposing views (**Pūrvapakṣa**), and establishes the final logical conclusion (**Siddhānta**).

Without its corresponding *Bhāṣya*, a bare *Sūtra* is easily misinterpreted, misapplied, or forgotten over time. 

In software engineering, runtime rule files (`.cursorrules`, `.clinerules`, or instructions sets) act as concise *Sūtras*. They are execution-level threads. If an AI agent operates *only* on these raw instructions without access to the *Bhāṣya* (the complete history of architectural designs, research contexts, and structural impacts), it acts with superficial comprehension. This leads to **Smṛti-Bhramśa** (loss of memory/intent alignment) and cognitive drift.

By standardizing our ARB reports into a detailed, publication-grade format, we bridge the gap between sūtras and bhāṣyas. It preserves the complete intellectual lineage (**Paramparā**) of the workspace, ensuring the "Why" is never lost. This commentarial depth is essential both for locking AI agent alignment and preparing our design logs for future book publication (**Grantha-Nirmāṇa**).

---

## 4. Proposed Changes & Technical Architecture

### File Layout with New Template

We introduced the standardized template file and updated the active architecture logs:

```text
.aum/
├── templates/
│   └── arb_template.md               <-- [NEW] Standardized template
└── architecture/
    ├── arb_001_consolidation.md      <-- [REWRITTEN] Premium edition
    ├── arb_002_vedic_guards_alignment.md <-- [REWRITTEN] Premium edition
    └── arb_003_standardization.md     <-- [NEW] This report
```

### Key Changes
*   **[arb_template.md](file:///Users/universe/AUM/.aum/templates/arb_template.md)**: Created a template that outlines sections for Context, Vedic Foundations, Architecture, System Impact, Deprecations, and Audits.
*   **[arb_001_consolidation.md](file:///Users/universe/AUM/.aum/architecture/arb_001_consolidation.md)**: Expanded to include detailed explanations of Bhartrihari's *Vāk* speech levels, *Sphoṭa* holistic logic, and structural ASCII art.
*   **[arb_002_vedic_guards_alignment.md](file:///Users/universe/AUM/.aum/architecture/arb_002_vedic_guards_alignment.md)**: Expanded to include details on Nyāya epistemology (*Śabda*, *Pratyakṣa*, *Anumāna*), Patanjali's *Yoga Sutras* (Yamas/Niyamas, Dhāraṇā focus locks), and before/after configuration schemas.

---

## 5. System Impact & Improvements

*   **Book-Ready Documentation**: The ARB files are now formatted with consistent headings, ASCII diagrams, and deep explanations, making them ready to be published as a design book.
*   **Unified Documentation Standards**: Any future architectural changes must follow the template, ensuring high-quality, comprehensive entries.
*   **Improved Agent Alignment**: When system agents read the `.aum/architecture/` logs at startup, they gain a deep understanding of the project's historical reasons, preventing rule drift.

---

## 6. Vedic Alignment Audit

### 1. Śravaṇa (Hearing / Receiving the Vision)
We receive the user's voice requesting a standardized, book-ready documentation template as the **Śruti** (revelation) calling for **Grantha-Saṃskāra** (the refined purification of our texts). The user's vision demands that all decisions are tracked with extensive research context, clear diagrams, system impact analyses, and explicit deprecation logs. This instructions manifests as **Icchā Śakti** (will), seeking to preserve the system's intellectual lineage.

### 2. Manana (Reflecting / Philosophical Contemplation)
Reflecting on this request, we observe that concise documentation is prone to **Ajñāna** (ignorance) and **Adhyāsa** (false attribution). When an engineering choice is documented in only a few lines, future developers and AI agents are left to guess the underlying motives, leading to conceptual drift. 

By modeling our documentation on the classical **Sūtra-Bhāṣya** commentarial tradition, we establish a rich repository of knowledge (**Jñāna Śakti**). This ensures that every aphoristic rule has a corresponding commentary, preserving the design context and providing a rigorous treatise ready for publication.

### 3. Nididhyāsana (Meditating / Deep Integration)
The implementation of these documentation standards was executed as a meditative refinement:
*   [arb_template.md](file:///Users/universe/AUM/.aum/templates/arb_template.md) was created to establish the standard commentary schema.
*   Prior logs (ARB-001 and ARB-002) were completely rewritten and expanded, integrating detailed Vedic context, ASCII architectural maps, and impact parameters.
*   The final changes were validated and committed on branch `main` (`8a7fc77`).

---

## 7. References & Appendix
*   [arb_template.md](file:///Users/universe/AUM/.aum/templates/arb_template.md) — The standardized template.
*   [arb_001_consolidation.md](file:///Users/universe/AUM/.aum/architecture/arb_001_consolidation.md) — Unified engine report.
*   [arb_002_vedic_guards_alignment.md](file:///Users/universe/AUM/.aum/architecture/arb_002_vedic_guards_alignment.md) — Vedic guardrails report.
