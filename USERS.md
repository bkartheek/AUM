# ॐ SĀKSHĪ (साक्षी) & SPHOTA OS — Developer Guide

Welcome to **SĀKSHĪ** (साक्षी) and the **SPHOTA Intent Operating System** (v1.6.0). This guide explains how to install, run, and integrate the SPHOTA global intent nervous system across any coding environment.

---

## 1. Quickstart & Installation

SPHOTA OS operates as a **pure OS-level global intent hub** residing in `~/.aum/`. You never need to commit local `.aum` directories into your target repositories.

### Option A: Global CLI Installation
```bash
# Install globally from npm or git release
npm install -g aum-framework

# Initialize the global nervous system & auto-hook detected agents
aum install
```

### Option B: Zero-Install Instant Run (via NPX)
```bash
# Run any command directly
npx aum-framework distill "refactor the guitar pages according to news planning"
npx aum-framework mandukya
```

---

## 2. Core SPHOTA OS CLI Reference

| Command | Category | Function |
| :--- | :--- | :--- |
| `aum distill "<prompt>"` | **Intent Engine** | Sub-15ms acoustic and phonetic normalization, filler stripping, and AST grounding. |
| `aum patterns` | **Consciousness** | Inspects hierarchical L1 (Routines), L2 (Strategies), and L3 (Archetypes) pattern registry. |
| `aum patterns --mine` | **Consciousness** | Promotes recurring Saṃskāras memory impressions into higher-order heuristics. |
| `aum lock --reason "..."` | **Guardrails** | Deterministically engages OS write-lock (`~/.aum/.intent_locked`) to block premature code writes. |
| `aum unlock` | **Guardrails** | Releases the mechanical lock upon reaching the `manifest` (Turīya) beat. |
| `aum anchor` | **Token Economy** | Synthesizes ultra-lean context anchor (`< 380 tokens`) into `~/.aum/ACTIVE_CONTEXT.md`. |
| `aum beat [stage]` | **Māṇḍūkya** | Stages or inspects active quarter: `intake` (A), `blueprint` (U), `verification` (M), `manifest` (Turīya). |
| `aum drone` | **Witness** | Synthesizes continuous witness drone logging of developer ↔ agent interactions. |
| `aum hook` | **Multi-Agent** | Injects the SPHOTA Bi-Directional Intent Bridge into Cursor, Claude, Copilot, Cline, and Gemini rules. |
| `aum sync` | **Ecosystem** | Verifies and refreshes all active global configurations in `~/.aum`. |

---

## 3. The 4 Māṇḍūkya Quarters of Development

Sākshī organizes agent execution around the four quarters of consciousness (*Catuṣpāt*):

```
       A · JĀGRAT (Intake / Clarify)        ➔ No code; acoustic distillation & prompt distillation.
       U · SVAPNA (Blueprint / Plan)        ➔ No code; architecture planning, pattern promotion.
       M · SUṢUPTI (Verification / Still)   ➔ No code; AST & invariant gate validation.
       · · TURĪYA (Manifest / Act)          ➔ Authorized code execution & deployment.
```

### Prompt #1 Bi-Directional Protocol
Every AI agent integrated with Sākshī follows this mandatory rule:
1. **Never write code or execute diffs on the initial prompt.**
2. Echo the **Distilled Human Intent** (*Paśyantī*), stripping vocal hesitations and phonetic slips.
3. State the **Agent Intent** with an architectural blueprint and exact file impact list.
4. Probe for **unstated assumptions**.
5. Conclude with: `"Awaiting approval. Reply 'Proceed' to begin implementation."`

---

## 4. Multi-Agent Integration

Sākshī harmonizes across all major AI coding agents simultaneously using `aum hook`:
- **Cursor**: Hooks into `.cursorrules` / `.cursor/rules`
- **Claude Code**: Hooks into `CLAUDE.md`
- **GitHub Copilot**: Hooks into Copilot instructions
- **Cline & Roo Code**: Hooks into `.clinerules` / `.roocode`
- **Gemini / Antigravity**: Hooks into `.gemini/AGENTS.md` and global rules

Each agent reads the centralized `< 380 token` anchor at `~/.aum/ACTIVE_CONTEXT.md`, ensuring all agents work under one shared, unified intent without memory drift.
