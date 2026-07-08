---
title: "The Intent Engine Master Directory Manifest"
type: "directory_manifest"
phase: "Phase 1: Pure Vision"
vedic_state: "Turīya"
description: "Governing index of the active Intent Engine, mapping states of consciousness to directory depths"
parent_directory: "AUM/"
subdirectories:
  - name: "intent_awakening"
    description: "Inwardly perceived visual seed (Paśyantī state) for private brainstorms (gitignored)"
  - name: "waking"
    description: "Externalized communication (Jāgrat state) for active client intake worksheets"
  - name: "dreaming"
    description: "Internalized reflection (Svapna state) for abstract blueprints and sandboxes"
  - name: "deepsleep"
    description: "Consolidated knowledge (Suṣupti state) for invariants and Saṅkalpa logs"
  - name: "architecture"
    description: "Architecture Review Board (ARB) specifications and evolution logs"
files:
  - name: "INTENT.md"
    description: "This master directory manifest file"
  - name: "AI_INSTRUCTIONS.md"
    description: "Primary directives and operational constraints for loaded AI agents"
directives:
  - "Every subdirectory must contain an _intent.md manifest."
  - "Agents must scan deepsleep/logs/ at startup before execution."
  - "All markdown files must contain YAML frontmatters."
---

# THE INTENT ENGINE

This workspace defines the **Intent Engine**—a universal, technology-agnostic cognitive framework designed to align an agent (human or AI) with a user's core vision, goals, and values before any physical planning or execution takes place.

---

## 🌀 Concept & Philosophy
The framework is mapped to the five states of consciousness (Mandukya Upanishad & Sound Manifestation) using classical Vedic principles of cognitive alignment:
*   **Saṅkalpa** (Ritual Resolve) forms the backbone of our multi-threaded logging system.
*   **Vivakṣā** (Desire to Speak) is incubated locally in Phase 0 (Intent Awakening).
*   **Sphoṭa** (Holistic Insight burst) is targeted by Phase 4 (Waking Intake) queries to align the agent and user.
*   **Paracitta-jñānam** (Knowledge of another's mind) guides the active listening/questioning strategy.
*   **Śravaṇa-Manana-Nididhyāsana** defines our intake, blueprinting, and logging pipeline.

The five phases:

### Phase 0: Intent Awakening (Paśyantī State)
*   **Location**: `intent_engine/intent_awakening/`
*   **Objective**: Gather local-only raw thoughts, brainstorms, and diaries before any active thread or agent communication takes place. Excluded from version control.

### Phase 1: Pure Vision (Turiya State)
*   **Location**: `intent_engine/INTENT.md` and `intent_engine/AI_INSTRUCTIONS.md`
*   **Objective**: Capture the ultimate "Why" behind the idea, its driving force, and its core invariant values.

### Phase 2: Invariant Boundaries (Suṣupti State)
*   **Location**: `intent_engine/deepsleep/`
*   **Objective**: Capture hard limits, strict prohibitions, environmental constraints, and preserve the progress memory log.

### Phase 3: Structural Blueprinting (Svapna State)
*   **Location**: `intent_engine/dreaming/`
*   **Objective**: Outline abstract components, flow diagrams, relationship models, and templates without technical implementation details.

### Phase 4: Concordance & Validation (Jāgrat State)
*   **Location**: `intent_engine/waking/`
*   **Objective**: Run active intake validation, question-and-answer clarifying rounds, and final confirmation templates.

---

## 🧵 Dynamic & Multi-Threaded Saṅkalpas
To handle evolving vision parameters and concurrent goals, the framework routes intents as **Independent Saṅkalpas**:
1.  **Multiple Goals**: Each goal is stored as an isolated log under `intent_engine/deepsleep/logs/sankalpa_00X_[name].md` conforming to `intent_engine/deepsleep/logs/sankalpa_template.md`.
2.  **Saṅkalpa Lifecycle**: Each Saṅkalpa carries a status: `Active` (currently executing), `Paused` (context frozen for later), `Completed` (integrated history), or `Deprecated` (abandoned).
3.  **Active Focus Selection**: At the start of Waking (`Jāgrat`) dialog, the agent must check which log is in the `Active` state and verify if the user's current request continues that Saṅkalpa or requires a new Saṅkalpa activation.

### Saṅkalpa Selection Logic
```text
           [ New Raw Message Received ]
                        |
                        v
         Does active Saṅkalpa exist in logs?
          /                            \
        YES                             NO
        /                                 \
  Use existing                     Prompt user using
 `Active` Saṅkalpa                Intake Clarifier
         |                                 |
         v                                 v
    Are there other                  Create & activate
    paused Saṅkalpas?                new Saṅkalpa profile
    /            \                         |
  YES             NO                       v
  /                \                 Run Svapna State
 Prompt user      Run Svapna
 for selection     State
 ```
 
 ### Saṅkalpa Lifecycle State Transitions
 ```text
       +------------------+
       |  (User Input)    |
       +--------+---------+
                |
                v (Intake Capture)
       +--------+---------+
       |  Active State    |<================ Resumed
       +--------+---------+                     ||
                |                               ||
        +-------+-------+                       ||
        | (Goal Paused) | (Goal Met)            || (Goal Shifted)
        v               v                       ||
 +------+------+ +------+------+                ||
 | Paused State| |  Completed  |                ||
 +------+------+ +------+------+                ||
        |                                       ||
        +--- Resumed / Activated ➔ ➔ ➔ ➔ ➔ ➔ ➔ -+
 ```

 
 ---
 
## 📊 System Architecture Diagram
```text
            +---------------------------------------------+
            |           TURIYA (Transcendent)             |
            |              [ intent_engine/ ]             |
            |   Master Intent, Instructions & Core Rules  |
            +----------------------+----------------------+
                                   |
                                   | governs
                                   v
 +----------------------------------------------------------------------------+
 | AWAKENING (Paśyantī)   JĀGRAT (Waking)       SVAPNA (Dreaming)  SUṢUPTI       |
 | [ intent_awakening/ ]  [ intent_engine/waking/ ] [ intent_engine/dreaming/ ] [ deepsleep/ ]|
 |                        |                     |                  |          |
 | local raw thoughts,    | Active Intake, Q&A, | processes, flow  | logs,    |
 | brainstorms, diaries   | concordance signs   | mapping sandboxes| decisions|
 +-----------+----------------------+----------------------+-------+----------+
             |                      |                     ^
             | takes birth          | inputs requests     | proposes blueprint
             v                      v                     | state
       +-----+-----+          +-----+-----+          +-----+-----+
       |   Sparks  | ➔ ➔ ➔ ➔  |   Vision  | ➔ ➔ ➔ ➔  | Blueprint |
       |   & Diary |          |   Capture |          | Staging   |
       +-----------+          +-----------+          +-----------+
 ```
 
 ---
 
 ## 📂 Directory Layout
 *   **`intent_engine/intent_awakening/`** — Excluded local-only thought incubator (sparks, brainstorms).
 *   **`intent_engine/waking/`** — Intake and verification (e.g., `clarification_template.md`).
 *   **`intent_engine/dreaming/`** — Blueprinting blueprints, design guides, and sandboxes (e.g., `blueprint_template.md`, `sandbox/`).
 *   **`intent_engine/deepsleep/`** — Invariants, limits, and records (e.g., `boundaries.md`, `logs/`, `decisions/`).
 *   **`intent_engine/`** — Master instructions and rules of the engine (e.g., `AI_INSTRUCTIONS.md`, `INTENT.md`). Located alongside `intent_engine/architecture/` containing `architecture.md`.
 
 ---
 
 ## 🎨 Visual Communication Rules
 When communicating in the chat box, the AI agent must present responses using rich, beautifully formatted markdown:
 *   **Headings**: Use structured headings (`#`, `##`, `###`) to separate topics clearly.
 *   **Alerts**: Highlight critical details using GitHub-style alerts (`> [!NOTE]`, `> [!IMPORTANT]`, etc.).
 *   **Emphasis**: Use **bold** text for key concepts and rules.
 *   **Lists**: Use clean, bulleted or numbered lists for sequential steps.
 *   **Code Formatting**: Wrap filenames, paths, and variables in inline code blocks (e.g., `INTENT.md`).
 *   **Diagrams**: Always represent architecture, processes, and flows using clean, readable **ASCII Art** enclosed in plain code blocks to maintain visual formatting consistency across all platforms.
