---
name: turborepo
description: Turborepo task pipeline guidance. INVOKE WHEN: editing turbo.json, optimizing build caching, debugging cache misses, switching root scripts from pnpm -r to turbo run, or adding a new workspace task.
---

# turborepo

## task anatomy

Every task in `turbo.json` should declare `inputs` (what affects the cache
key), `outputs` (what to restore on a hit), and `dependsOn` (ordering).

```json
{
  "tasks": {
    "build": {
      "inputs": ["src/**", "tsdown.config.ts", "tsconfig.json", "package.json"],
      "outputs": ["dist/**"],
      "dependsOn": ["^build"]
    }
  }
}
```

## cross-package ordering

`dependsOn: ["^build"]` — run `build` in all upstream workspace deps first.
Use this for any task that consumes compiled output from another package.

- `build` → `["^build"]` (link-time deps must be compiled first)
- `test` → `["^build"]` (vitest resolves workspace imports through `dist/`)
- `typecheck` → `["^build"]` (tsc needs upstream `.d.mts` declarations)
- `test:coverage` → `["build"]` (current package built; `^build` is covered
  transitively via `build → ^build`)
- `lint` → none (ESLint works on source, no compiled deps needed)

## org conventions

Standard artifact paths for all `@theholocron/*` packages:

| Task | outputs |
|------|---------|
| `build` | `dist/**` (tsdown ESM + `.d.mts`) |
| `test:coverage` | `coverage/**` (vitest `@vitest/coverage-v8`) |
| `lint`, `test`, `typecheck` | `[]` (exit-code cached only — no files) |

Standard source inputs (add per-package extras as needed):

```json
"inputs": ["src/**", "tsdown.config.ts", "tsconfig.json", "package.json"]
```

Declare files that invalidate **all** package caches when changed:

```json
{
  "globalDependencies": ["pnpm-workspace.yaml", "tsconfig.json"]
}
```

## running tasks

Prefer `turbo run <task>` at the workspace root — respects caching and runs
packages in dependency order. Use `pnpm --filter` for one-off single-package
runs only.

```sh
turbo run build                                    # build all (uses cache)
turbo run test                                     # test all in parallel
turbo run build --filter=@theholocron/http-client  # single package
turbo run build --force                            # ignore cache, rebuild all
```

Avoid `pnpm -r --filter './packages/*' build` at the root — it bypasses
turbo's cache entirely.

## debugging cache misses

```sh
turbo run build --dry=json     # which packages would run and why
turbo run build --verbosity=2  # full cache-hit/miss reasoning per package
```

A miss usually means an input file changed that isn't listed in `inputs`, or
`inputs` is omitted entirely (turbo then hashes the full package directory,
causing unnecessary misses on unrelated changes).

## non-cacheable tasks

Mark tasks that must always run fresh:

```json
"release": { "cache": false }
```

Use `cache: false` for publishing, deployment, or any side-effectful task.
