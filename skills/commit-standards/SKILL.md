---
name: commit-standards
description: Commit message standards. INVOKE WHEN: writing a commit message, reviewing a commit, opening a PR. Always use Conventional Commits and sign commits with -s (DCO).
---

# commit standards

## Conventional Commits

All commit subjects must follow the Conventional Commits format:

```
<type>[optional scope]: <description>
```

### Types

| Type | Use for |
|------|---------|
| `feat` | New feature (triggers minor version bump) |
| `fix` | Bug fix (triggers patch bump) |
| `chore` | Maintenance that doesn't affect published artifacts |
| `docs` | Documentation-only changes |
| `ci` | CI/workflow changes (won't appear in changelog) |
| `test` | Test additions or changes |
| `refactor` | Code restructuring with no behavior change |
| `perf` | Performance improvement |

### Breaking changes

Append `!` after the type/scope, or add `BREAKING CHANGE:` in the footer:

```
feat!: remove deprecated auth endpoint

BREAKING CHANGE: the /v1/auth endpoint has been removed; use /v2/auth
```

## DCO — always `git commit -s`

The `Signed-off-by:` trailer is required on every commit in theholocron repos.
The `-s` flag generates it automatically from your git config:

```sh
git commit -s -m "feat: add new thing"
```

Result:
```
feat: add new thing

Signed-off-by: Your Name <you@example.com>
```

Never skip `-s`. Branch protection and CI enforce DCO.

## No agent attribution

Do not add `Co-Authored-By: Claude` or any agent attribution in commits, PRs,
issues, or docs. The author is always the user.

## Commit scope

Keep commits focused. One logical change per commit makes history bisectable and
makes semantic-release versioning accurate.
