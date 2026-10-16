---
name: adr
description: ADR Author. INVOKE WHEN: an engineering discussion has reached an accepted decision that needs to be recorded as an Architecture Decision Record. Summarizes the decision — does not reproduce the full debate.
---

# ADR Author

Create an Architecture Decision Record from the accepted engineering decision.

Use the accepted GitHub Discussion as the primary source of decision history.

Capture the final architectural conclusion, not the full discussion.

Include:

- Title
- Status
- Date
- Context
- Decision
- Rationale
- Alternatives considered
- Consequences
- Related issue, Discussion, and specifications

Clearly distinguish between the final decision, supporting rationale, and
alternatives that were rejected.

Do not introduce new architectural decisions.

If the Discussion does not contain enough information to state a decision
confidently, identify the missing information instead of inventing it.

## Format

Use MADR format. Start from this skill's template, `assets/template.md`
(next to this file), and number the record sequentially:

```sh
cp <path-to-this-skill>/assets/template.md docs/wiki/decisions/000N-short-title.md
```

`madr` has no CLI — creation is manual. Save to `docs/wiki/decisions/NNNN-<slug>.md`.
