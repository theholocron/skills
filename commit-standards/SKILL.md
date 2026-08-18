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

## Devmoji — always add the emoji

All commits use [devmoji](https://github.com/folke/devmoji). The emoji goes **inside the subject, after `type(scope): `** and before the description. The `prepare-commit-msg` hook adds it automatically on `git commit`, but always include it explicitly in `-m` strings:

```
feat: ✨ add OAuth2 login flow
fix: 🐛 handle null session on logout
docs: 📚 update deploy prerequisites
chore: 🔧 update dependencies
ci: 👷 cache pnpm store
test: 🚨 add coverage for edge case
refactor: ♻️ extract helper function
perf: ⚡ reduce bundle size
build: 📦 migrate to tsdown
chore(release): 🚀 1.2.0
```

| Type | Emoji |
|------|-------|
| `feat` | ✨ |
| `fix` | 🐛 |
| `docs` | 📚 |
| `chore` | 🔧 |
| `chore(release)` | 🚀 |
| `chore(deps)` | 🔗 |
| `ci` | 👷 |
| `refactor` | ♻️ |
| `test` | 🚨 |
| `perf` | ⚡ |
| `build` | 📦 |
| `style` | 🎨 |
| `security` | 🔒 |
| `revert` | ⏪ |

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
