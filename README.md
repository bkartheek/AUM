# AUM: Intent-Driven Cognitive Workspace

This workspace houses the **Intent Engine**—a technology-agnostic cognitive framework designed to align developers (human or AI) with repository-wide constraints, user resolves, and conceptual blueprints before raw development begins. It also hosts the local **GitHub Reporter** utility.

---

## 🎨 System Architecture Graph (Aki/ASCII Art)

```text
       =====================================================================
                             TURIYA (Amātra - Silence)
                                  [ intent_engine/ ]
                        Master Directives & AI constraints
                                | |           | |
          +---------------------+ |           | +---------------------+
          |                       |           |                       |
          | Governs               | Governs   | Governs               | Governs
          v                       v           v                       v
 +------------------+    +------------------+    +------------------+    +------------------+
 |  PAŚYANTĪ        |    |  JĀGRAT          |    |  SVAPNA          |    |  SUṢUPTI         |
 |  (Awakening)     |    |  (Waking State)  |    |  (Dream State)   |    |  (Deep Sleep)    |
 |  [intent_        |    |  [waking/]       |    |  [dreaming/]     |    |  [deepsleep/]    |
 |   awakening/]    |    |                  |    |                  |    |                  |
 |  Local Incubator |    |  Intake Worksheet|    |  Flow Blueprints |    |  Saṅkalpa logs,  |
 |  & sparks        |    |  (Clarification) |    |  & sandbox area  |    |  ADRs, boundaries|
 +------------------+    +------------------+    +------------------+    +------------------+
          |                       |                       |                       ^
          |                       |                       |                       | Updates
          | Takes Birth           | Formulates            | Stages                | State
          v                       v                       v                       |
   [ sparks/diary ] ------------> [ intake queries ] ----> [ outline blueprint ] --+
       
       =====================================================================
```

---

## 📂 Directory Layout

*   **`intent_engine/`** — Root container containing instructions (`AI_INSTRUCTIONS.md`), manifests (`INTENT.md`), and decisions (`architecture/`).
    *   **`intent_awakening/`** — (Phase 0: Paśyantī) Local-only private incubator for raw thoughts and sparks. Excluded from git.
    *   **`waking/`** — (Phase 4: Jāgrat) Concordance worksheet template (`clarification_template.md`).
    *   **`dreaming/`** — (Phase 3: Svapna) Staging templates and sandbox area (`blueprint_template.md`, `sandbox/`).
    *   **`deepsleep/`** — (Phase 2: Suṣupti) Workspace invariants (`boundaries.md`) and persistent resolve targets (`logs/`).
*   **`github_reporter.py`** — Root command utility to fetch public profile and repo details from GitHub.

---

## 🛠️ Running the GitHub Reporter

The repository contains `github_reporter.py` which uses Python's standard library to query users' public repository statistics from the GitHub REST API.

### Execution
Run the script using any Python 3 environment:
```bash
python3 github_reporter.py
```

You will be prompted to enter:
1.  **GitHub Username** (e.g. `octocat`)
2.  **GitHub Personal Access Token** (Optional - bypasses the 60 requests/hour unauthenticated rate limit)

### Output
The reporter outputs:
*   Profile details (name, bio, location, followers)
*   Table of repositories detailing star counts, fork counts, and primary language
*   Languages breakdown highlighting repository counts per technology
