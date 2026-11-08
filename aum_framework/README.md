# ॐ aum-framework

Intent orchestration CLI for AI agents: **Clarify → Plan → Act**.

See the repo root [README](../README.md) and canonical [`INTENT.md`](./INTENT.md).

```bash
node scripts/aum.js help
node scripts/aum.js install
node scripts/aum.js resolve "My goal"
node scripts/aum.js beat next
```

**Honesty:** the CLI persists state and injects hooks; agents must honor beat gating. This package does not sandbox editor tools.

Experimental commands (`heal`, `compile`, `assert`, `recognize`, …) are demos — not the orchestration spine.
