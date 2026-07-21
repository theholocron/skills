# `@theholocron/skills`

<!-- holocron:description -->

Shared agent skill registry.

<!-- /holocron:description -->

Each skill is a directory under `skills/` containing a `SKILL.md` file that Claude Code (and compatible
agents) can load as a slash command.

## Available skills

### Workflow & safety (theholocron)

| Skill | Description |
|-------|-------------|
| [`git-safety`](./skills/git-safety/SKILL.md) | Never force-push or run destructive git ops without permission |
| [`pr-workflow`](./skills/pr-workflow/SKILL.md) | Always open a PR; one-change-per-PR; delete branch on close |
| [`commit-standards`](./skills/commit-standards/SKILL.md) | Conventional Commits format + DCO signing |
| [`security-review`](./skills/security-review/SKILL.md) | OWASP-oriented checklist for code review |

### Project-specific (theholocron)

| Skill | Description |
|-------|-------------|
| [`holocron-skill-config`](./skills/holocron-skill-config/SKILL.md) | Scaffold a new `@theholocron/*-config` package in `theholocron/configs` |
| [`holocron-skill-client`](./skills/holocron-skill-client/SKILL.md) | Scaffold a new `@theholocron/*-client` package in `theholocron/clients` |
| [`holocron-skill-plugin`](./skills/holocron-skill-plugin/SKILL.md) | Scaffold or migrate a new `holocron-plugin-*` package |

### External (Vercel)

| Skill | Source | Description |
|-------|--------|-------------|
| [`vercel-cli`](./skills/vercel-cli/SKILL.md) | [vercel/vercel-plugin](https://github.com/vercel/vercel-plugin) | Vercel CLI expert: deploy, env vars, logs, domains, project linking |
| [`turbopack`](./skills/turbopack/SKILL.md) | [vercel/vercel-plugin](https://github.com/vercel/vercel-plugin) | Turbopack bundler: HMR, CSS, tree shaking, webpack migration |

## Installation via `holocron setup`

Skills are installed by `holocron setup` based on the `skills` field in
`holocron.config.ts`. They are written to your agent's skills directory and
**gitignored** — treated as dependencies, not source.

```typescript
// holocron.config.ts
import { defineConfig } from "@theholocron/cli";

export default defineConfig({
  agent: "claude",
  skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
  // ...
});
```

Then run:

```sh
pnpm add -D @theholocron/skills
GITHUB_TOKEN=$(gh auth token) pnpm exec holocron setup
```

## Manual installation

Copy a skill directory into your project's `.claude/skills/`:

```sh
cp -r node_modules/@theholocron/skills/skills/git-safety .claude/skills/
```

Add it to `.gitignore` since `holocron setup` manages it:

```gitignore
# managed by holocron setup — skills
/.claude/skills/git-safety/
```

## Contributing

### Adding a new skill

1. Create `skills/<name>/SKILL.md` with the frontmatter format:
   ```markdown
   ---
   name: <name>
   description: One-line description. INVOKE WHEN: <trigger conditions>.
   ---
   # skill title
   …
   ```
2. Run `pnpm test` — the smoke test checks that every skill dir has a `SKILL.md`.
3. Update this README with a row in the relevant table.
4. Open a PR with a `feat:` commit — semantic-release handles versioning.

### Importing an external skill

Copy the `SKILL.md` (and any supporting files) into `skills/<name>/`, credit the
source in the README table, and note any upstream license requirements.
