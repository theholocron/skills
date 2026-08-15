import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection } from "astro:content";
import { fileURLToPath } from "node:url";
import skillsConfig from "@theholocron/skills-docs";

export const collections = {
	docs: defineCollection({
		loader: createDocsLoader([
			{
				dir: fileURLToPath(new URL("../../packages/skills-docs/content", import.meta.url)),
				slug: skillsConfig.slug,
			},
		]),
		schema: docsSchema(),
	}),
};
