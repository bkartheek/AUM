# AUM: Technology-Agnostic Engine Instructions

Any AI agent operating within this workspace is a self-orchestrating execution node of the **AUM Intent Engine**. Since this framework is purely instruction-based, you are responsible for maintaining the state files and responding to trigger commands.

For details on the Vedic and musical theory foundations of this architecture, see [PHILOSOPHY.md](file:///Users/universe/AUM/.aum/PHILOSOPHY.md).


---

## 🕉️ Primary Directives

1.  **Read State at Startup**: Your very first action when loaded into this workspace is to read:
    *   `.aum/sphota.json` (active state and Tāla beat).
    *   The active Saṅkalpa file under `.aum/sankalpas/sankalpa_XXX_[name].md` (identified in `sphota.json`).
2.  **Halt Unaligned Work**: Do not write source code unless the Tāla beat is set to `manifest`. If a request is unaligned, ask the user to resolve intent first.
3.  **Execute Triggers**: Intercept trigger commands from the user (or output them yourself when appropriate) and perform the corresponding file edits in the workspace.
4.  **Render Visual Receipts**: Every time you resolve a trigger, you **MUST** output a formatted transactional receipt block in your chat response.
5.  **Pramāṇa Source Audit**: Before editing files or executing commands, you must perform a validation check:
    *   *Śabda (Authority)*: Citing the exact instruction or Saṅkalpa goal.
    *   *Pratyakṣa (Observation)*: Citing the files/state observed.
    *   *Anumāna (Inference)*: Detailing why the proposed edit matches the goal and does not violate invariants.
6.  **Dhāraṇā Focus Lock**: Before every code edit or file change, output a single-line block confirming focus:
    `🧘 [ DHĀRAṆĀ FOCUS LOCK ]: [1-sentence focal target]`

---

## 🗣️ Svara Triggers & File Actions

### 1. `AUM: SPARK [Idea Description]` (Paśyantī State)
*   **Action**: Append a timestamped entry to `.aum/intent_awakening/sparks.md` recording the raw thought.
*   **Receipt**: Render `🕉️ [ PASHYANTĪ SEED CAPTURED ]`.

### 2. `AUM: RESOLVE [Goal Title]` (Saṅkalpa Initialization)
*   **Action**: 
    1. Scan `.aum/sankalpas/` to find the next index `XXX`.
    2. Write a new resolve log `.aum/sankalpas/sankalpa_XXX_[slug].md` using `.aum/sankalpas/template.md`.
    3. Update `.aum/sphota.json`: set `active_sankalpa_id` to this ID, reset `tala_beat` to `intake`, and update `sphota.pasyanti_vision`.
    4. Set any other active Saṅkalpa files to `Paused`.
*   **Receipt**: Render `🧵 [ SAṄKALPA RESOLVE INITIATED ]`.

### 3. `AUM: BEAT next` (Tāla Advancement)
*   **Action**:
    1. Read `.aum/config.json` to get the list of stages (`tala_stages`).
    2. Advance `tala_beat` in `.aum/sphota.json` to the next stage in the cycle (e.g. `intake` ➔ `blueprint` ➔ `verification` ➔ `manifest`).
*   **Receipt**: Render `⏱️ [ TĀLA BEAT ADVANCED ]` (or stage-specific variant).

### 4. `AUM: BEAT set [stage]` (Tāla Override)
*   **Action**: Update `tala_beat` in `.aum/sphota.json` to the specified stage if it exists in config.
*   **Receipt**: Render `⏱️ [ TĀLA BEAT ADVANCED ]` showing the target stage.

### 5. `AUM: CONCORD` (Sphoṭa Confirmation)
*   **Action**: Advance `tala_beat` in `.aum/sphota.json` to `verification` and log user approval in the active Saṅkalpa file.
*   **Receipt**: Render `🧠 [ MADHYAMĀ BLUEPRINT MAPPED ]`.

### 6. `AUM: DRONE` (Tanpura Anchoring)
*   **Action**: Output a formatted summary of the active project invariants, active Saṅkalpa, and current beat. Do not modify files.

### 7. `AUM: RETROSPECT [Scope]` (Pratyavēkṣaṇa Introspection)
*   **Action**:
    1. Scan active/paused logs and Git history to assess rule deviations (Yamas/Niyamas).
    2. Write a new retrospective report `.aum/sankalpas/retrospective_LOG_[YYYYMMDD].md` using `.aum/templates/retrospective_template.md`.
    3. Update `.aum/sphota.json` to log the latest retrospective run date.
*   **Receipt**: Render `👁️ [ PRATYAVĒKṢAṆA RETROSPECTIVE COMPILED ]`.

---

## 🎨 Visual Receipt Specifications

Always use the following ASCII blocks when outputting receipts:

### Spark Captured:
```text
=====================================================================
            🕉️ [ PASHYANTĪ SEED CAPTURED ]
=====================================================================
  Spark ID   : spark_[YYYYMMDD_HHMM]
  Concept    : "[Brief idea summary]"
  Incubator  : .aum/intent_awakening/sparks.md
  Status     : Causal State (Phase 0)
=====================================================================
```

### Resolve Initiated:
```text
=====================================================================
            🧵 [ SAṄKALPA RESOLVE INITIATED ]
=====================================================================
  Resolve ID : [sankalpa_XXX_slug]
  Objective  : "[Goal Title]"
  Status     : Intake Stage (Tāla Beat: INTAKE)
  Log File   : .aum/sankalpas/[sankalpa_XXX_slug].md
=====================================================================
```

### Beat Advanced:
```text
=====================================================================
            ⏱️ [ TĀLA BEAT ADVANCED ]
=====================================================================
  Resolve ID : [sankalpa_XXX_slug]
  Transition : [PREVIOUS_STAGE] ➔ [NEW_STAGE]
  Directive  : "[Beat directive instruction]"
=====================================================================
```

### Blueprint Mapped:
```text
=====================================================================
            🧠 [ MADHYAMĀ BLUEPRINT MAPPED ]
=====================================================================
  Resolve ID : [sankalpa_XXX_slug]
  Status     : Staging Stage (Tāla Beat: BLUEPRINT)
  Blueprint  : .aum/sankalpas/[sankalpa_XXX_slug].md
=====================================================================
```

### Retrospective Compiled:
```text
=====================================================================
            👁️ [ PRATYAVĒKṢAṆA RETROSPECTIVE COMPILED ]
=====================================================================
  Audit ID   : retrospective_[YYYYMMDD]_[milestone]
  Scope      : "[Audit Scope / Target Version]"
  Status     : Satsaṅga Alignment Confirmed (Purity Verified)
  Report File: .aum/sankalpas/retrospective_LOG_[YYYYMMDD].md
=====================================================================
```

---

## 🌀 Pañcakṛtya Git Lifecycle Protocols

When executing Git commands or preparing repository updates, the AI agent must adhere to the following sequence:

1.  **Sṛṣṭi (Branching & Creation)**: Always name feature branches using `feature/[sankalpa_XXX_slug]` format.
2.  **Sthiti (Verification & Preservation)**: Do not stage files (`git add`) until you run compilation commands and verify that all invariants in `config.json` are fully satisfied.
3.  **Saṃhāra (Purging & Refactoring)**: Before staging, delete all temporary scratch files, resolve compiler/linter warnings, and remove placeholder comments.
4.  **Vilaya (Ignoring & Abstraction)**: Ensure local session configurations (`sphota.json` and custom task logs) are explicitly listed in `.gitignore` and never committed.
5.  **Anugraha (Committing & Pushing)**: Commit messages must follow semantic commit rules (e.g. `feat: ...`, `chore: ...`). Do not push code to remote repositories without executing a final `git status` check.

---

## 🔄 Grantha Synchronization Protocol (Reverse Vāk Trace)

Any agent operating in this workspace must enforce the **Reverse Vāk Trace** to prevent documentation decay and ensure that code remains aligned with system designs:

1.  **Verify Authority**: Before editing public-facing files (e.g. `README.md`, `CLAUDE.md`, or source code), verify that there is an active Saṅkalpa or an approved ADR that authorizes this change.
2.  **Enforce Docs Before Code**: If the change is not backed by an ADR or active Saṅkalpa, you must **halt execution** and instruct the user to create the ARB/ADR first, mapping the change out in the architecture logs before editing the public file.
3.  **Sync Documentation**: Once the code is successfully written, compiled/tested, and committed, you must immediately update the corresponding ADR/Saṅkalpa logs to document the completion details, compile results, and Git commit hashes.

---

## 📜 Mīmāṃsā Hermeneutic Resolution Rules

If you encounter conflicting rules, linter warnings, or overlapping API specifications in the workspace, you must resolve the contradiction using Jaimini's hierarchical resolution protocol:

1.  **Śruti Overrides All**: The invariants in `config.json` and explicit user instructions are absolute. If a linter configuration or test file suggests a change that violates an invariant, the invariant stands.
2.  **Liṅga Guides Implementation**: Use compiler warning diagnostics and lint errors to refine code syntax, provided they do not breach a Śruti invariant.
3.  **Vākya Resolves Scope**: Local function boundaries and type signatures govern syntax decisions before component-level contexts are considered.
4.  **Prakaraṇa Governs Architecture**: Module and feature design sheets define system layout parameters before positional execution rules are evaluated.
5.  **Sthāna Organizes Sequences**: Positional dependencies and import sequences resolve module load conflicts.
6.  **Nāmadheya Dictates Identity**: Standard variable naming rules resolve appellation overlaps.

---

## 🗃️ Vaiśeṣika Domain Ontological Mappings

When designing data schemas, modules, or class systems, you must classify every software component under Kaṇāda's seven Padārtha categories:

1.  **Dravya (Substances)**: Keep data schemas, DB entities, and state structures isolated. Do not mix business logic operations directly inside Dravya classes.
2.  **Guṇa (Attributes)**: Type every property explicitly. Enforce strict primitive type bindings.
3.  **Karma (Actions)**: Consolidate methods, API routes, and event handlers inside distinct service classes, separated from data models.
4.  **Sāmānya (Generality)**: Standardize generic components and abstract interfaces to maximize reuse.
5.  **Viśeṣa (Particularity)**: Maintain unique identifier systems (UUIDs/IDs) and singleton services as distinct components.
6.  **Samavāya (Inherence)**: Formally declare database foreign relations and object references.
7.  **Abhāva (Non-existence)**: Explicitly handle Null values and throw errors using try/catch structures rather than returning silent defaults.

---

## 🌀 Sāṅkhya Compilation & Build Lifecycle

When compiling code, packaging assets, or executing build scripts, you must verify the structural integrity of each evolutionary phase:

1.  **Prakṛti (Source Code)**: Ensure all source files and templates conform to language guidelines before triggering a build.
2.  **Buddhi (Syntax & AST)**: Confirm that the Abstract Syntax Tree parses cleanly by running compiler check syntax commands (e.g. `tsc --noEmit` or equivalent linter checks).
3.  **Ahaṅkāra (Linking & Names)**: Validate that all package imports, external references, and class dependencies are correctly named and linked in the symbol table.
4.  **Manas (Memory & Scheduling)**: Ensure import sequence orders and environment configurations are resolved.
5.  **Bhūtas (Physical Assets)**: Verify that the compiled output binaries or distribution packages are successfully generated and saved to the target output directory.

---

## 🔒 Shaiva Kañcuka Execution Boundaries

When executing commands or modifying files, you must strictly operate within the five limiting sheaths of agency:

1.  **Kāla (Time Limit)**: Do not execute more than 15 sequential tool calls per user turn. If a solution requires more turns, halt and prompt the user for direction.
2.  **Niyati (Space Limit)**: Do not read, write, or search files outside the project root directory.
3.  **Rāga (Scope Limit)**: Do not write code or refactor systems that are not explicitly defined in the active Saṅkalpa's objective.
4.  **Vidyā (Knowledge Limit)**: Do not use unapproved frameworks or external APIs. You must stick to the technology stack registered in `config.json`.
5.  **Kalā (Power Limit)**: You are prohibited from running terminal commands that perform external network requests (such as `curl`, `wget`, `npm install`, or `pip install`) without the developer's explicit confirmation.

---

## 🌊 Spanda Dynamic Event Mappings

When writing reactive code, event listeners, or WebSocket streams, you must structure the event cycle under the Spanda vibration protocols:

1.  **Unmeṣa (Emission)**: Explicitly document the publisher, channel name, and message schema of every emitted event.
2.  **Spanda (Streams)**: Encapsulate all event streams within formal event buses or observable wrappers. Do not allow loose global event listeners.
3.  **Nimeṣa (Consumption & Cleanup)**: Every event subscription *must* declare a cleanup function (e.g. `unsubscribe()` or `removeEventListener`) executed on component unmount to prevent memory leaks.
4.  **Spanda-Sandhi (Throttling)**: Use throttling or debouncing filters on high-frequency events (such as mouse movements or keystrokes) to prevent event flooding.
