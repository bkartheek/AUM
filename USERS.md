# AUM Developer Setup & Integration Guide

Welcome to the **AUM Cognitive Framework**. This guide provides step-by-step instructions to set up the framework locally, run linter and compiler subcommands, and integrate AUM's cognitive state controls into external developer projects.

---

## 1. Local Environment Setup

To initialize AUM in your local workspace environment:

### Step A: Clone the Repository
Clone the framework repository to your target folder:
```bash
git clone https://github.com/bkartheek/AUM.git
cd AUM
```

### Step B: Validate Host Capabilities (Pratyabhijñā Audit)
Run the self-recognition audit script to diagnose operating system type, node environment features, and directories write permissions:
```bash
node scripts/aum.js recognize
```
This aligns the agent execution limits with your host hardware specifications.

---

## 2. Daily Developer Lifecycle (Pañcakṛtya Workflows)

AUM coordinates code turns under a five-stage lifecycle. Execute these CLI subcommands during development:

### ⚙️ Lifecycle CLI Subcommands Reference

| Command | Lifecycle Phase | Vedic Translation | Technical Action |
| :--- | :--- | :--- | :--- |
| `node scripts/aum.js start` | **Sṛṣṭi** (Intake) | Creation / Awakening | Initiates a new task resolve (*Saṅkalpa*) and prunes context. |
| `node scripts/aum.js verify` | **Sthiti** (Maintenance) | Preservation / Healing | Runs compiler builds with automatic environment self-healing. |
| `node scripts/aum.js audit` | **Saṃhāra** (Debate Audit) | Dissolution / Cleanup | Audits staged changes for comments, stubs, and logic fallacies. |
| `node scripts/aum.js prune` | **Prāṇāyāma** (Ventilation) | Breath regulation | Prunes raw build logs from the context window to prevent decay. |
| `node scripts/aum.js evolve` | **Sphoṭa-Bhāvanā** (Incubate) | Rule incubation | Synthesizes subconscious memories cache into system prompt rules. |
| `node scripts/aum.js assert` | **Catuṣkoṭi** (Non-Binary) | Tetralemma | Runs tetralemma assertions testing on async reactive streams. |
| `node scripts/aum.js compile` | **Pāṇinian** (Synthesize) | Grammar | Generates boilerplates and classes from semantic intent roots. |
| `node scripts/aum.js publish`| **Tirobhāva** (Reveal) | Concealment | Compiles framework markdown logs into the docs portal json database. |

---

## 3. Integrating AUM in Other Projects

You can easily port the AUM state machines and constraints to separate projects (such as Next.js React codebases, Python backends, or Golang APIs).

### Step A: Copy Core Abstractions
Copy the `.aum/` configuration folder and `.agents/` customization files into the root of your target repo:
```bash
cp -r .aum /path/to/target/project/
cp -r .agents /path/to/target/project/
cp -r scripts /path/to/target/project/
```

### Step B: Configure Project Safety Invariants
1.  **System Prompt Customizations**: Modify `/path/to/target/project/.agents/AGENTS.md` and `.cursorrules` to instruct developer agents to load setup settings from `.aum/config.json`.
2.  **Custom Linter Rules**: Update `.aum/config.json` to define block lists for the linter (e.g. blocking certain console logs, debuggers, or unproved function stubs).
3.  **Define Target Sandboxes (Kañcukas)**: Modify `.aum/config.json` properties to enforce strict turn budget ceilings (Kāla) or block write permissions (Kalā) on critical release branches.

### Step C: Execute CLI Auditing
Setup a pre-commit git hook in your target repo to run:
```bash
node scripts/aum.js audit
```
This guarantees that no developer commits code to the master branch of your new project if it contains unaligned modifications or fails semantic compilation.
