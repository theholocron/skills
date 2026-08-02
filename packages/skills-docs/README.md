# `@theholocron/skills-docs`

Documentation content package for the [`@theholocron/skills`](https://github.com/theholocron/skills/tree/main/packages/skills#readme) agent skill registry.

Consumed by the [`theholocron.github.io`](https://docs.theholocron.dev/skills/) Starlight docs site via `createDocsLoader` from `@theholocron/docs-theme`.

## Installation

```sh
pnpm add @theholocron/skills-docs
```

## Usage

Pass the package to `createDocsLoader` in your Astro docs site's `content.config.ts`:

```ts
import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { defineCollection } from "astro:content";

export const collections = {
  docs: defineCollection({
    loader: createDocsLoader({ packages: [import("@theholocron/skills-docs")] }),
  }),
};
```

## License

[MIT](../../LICENSE)
