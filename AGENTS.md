<!-- editorconfig-checker-disable-file -->

# theholocron/skills — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

`@theholocron/skills` is the shared agent skill registry for theholocron projects.
Each skill is a directory under `skills/` containing a `SKILL.md` in Claude Code
format. Skills are installed into consuming repos by `holocron setup` based on the
`skills` field in `holocron.config.ts`.

## Adding a new skill

1. Create `skills/<name>/SKILL.md` with the frontmatter format:
   ```markdown
   ---
   name: <name>
   description: One-line description. INVOKE WHEN: <trigger conditions>.
   ---
   # skill title
   …
   ```
2. Verify `pnpm test` passes — the smoke test checks that every skill dir has a `SKILL.md`.
3. Update `README.md` with a row in the available skills table.
4. Open a PR with a `feat:` commit — semantic-release handles versioning.

## Available skills

| Skill | Trigger |
|-------|---------|
| `git-safety` | git push, force push, destructive git ops |
| `pr-workflow` | opening a PR, merging, branch management |
| `commit-standards` | writing a commit message |
| `security-review` | reviewing code for security issues |
| `turborepo` | editing turbo.json, optimizing caching, debugging cache misses |

## Quality

- `pnpm test` — `node --test` smoke-checks that every `skills/*/SKILL.md` exists.
- No build step — the package ships markdown files directly.
- `pnpm install --frozen-lockfile` must succeed after any `package.json` change.

## Releases (automated)

- **semantic-release** on push to `main` (stable) or `alpha` (prerelease).
- `release.config.ts` uses `@theholocron/semantic-release-config`.
- **npm Trusted Publishing** via OIDC — no `NPM_TOKEN` needed.
- First publish: use `holocron npm publish-initial` (chicken-and-egg; see holocron CLAUDE.md).
