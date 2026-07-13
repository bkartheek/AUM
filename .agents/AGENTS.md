# AUM Framework Integration Rules

Any agent operating in this workspace must read and strictly follow the state guidelines, cognitive beats, and invariants defined in:
1. [INSTRUCTIONS.md](file:///Users/universe/AUM/.aum/INSTRUCTIONS.md)
2. [config.json](file:///Users/universe/AUM/.aum/config.json)

## Setup Configuration
* Read [sphota.json](file:///Users/universe/AUM/.aum/sphota.json) and the active `.aum/sankalpas/` file at startup to load the persistent state.
* If a request is ambiguous, stop execution and present clarifying questions as defined in [clarification_template.md](file:///Users/universe/AUM/.aum/templates/clarification_template.md).
* Compile draft codes and blueprints under the active `.aum/sankalpas/` file or [blueprint_template.md](file:///Users/universe/AUM/.aum/templates/blueprint_template.md).
* Log decisions and files under `.aum/sankalpas/`.
