# AUM Framework Integration Rules

Any agent operating in this workspace must read and strictly follow the state guidelines, cognitive beats, and invariants defined in:
1. [INSTRUCTIONS.md](../.aum/INSTRUCTIONS.md)
2. [config.json](../.aum/config.json)

## Setup Configuration
* Read [sphota.json](../.aum/sphota.json) and the active `.aum/sankalpas/` file at startup to load the persistent state.
* If a request is ambiguous, stop execution and present clarifying questions as defined in [clarification_template.md](../.aum/templates/clarification_template.md).
* Compile draft codes and blueprints under the active `.aum/sankalpas/` file or [blueprint_template.md](../.aum/templates/blueprint_template.md).
* Log decisions and files under `.aum/sankalpas/`.

## Git & Release Conventions
* Always merge feature branches to `master` (or the default primary branch if `master` is unavailable).

## Framework Guardian (Yogi)
*   The resident framework guardian is **Yogi** (instructions in [skills/yogi/SKILL.md](skills/yogi/SKILL.md)).
*   All active workspace modifications and task executions must be validated by running the AUM CLI linter (`node scripts/aum.js audit`) and comply with Yogi's safety sheaths.


