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
