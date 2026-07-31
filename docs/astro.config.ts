import { relative } from "node:path";
import { fileURLToPath } from "node:url";

import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import skillsConfig from "@theholocron/skills-docs";
import { defineConfig } from "astro/config";

// Starlight autogenerate matches filePaths relative to the Astro project root.
// Our content lives outside docs/ so we compute the relative path so the
// directory: value matches how the loader stores filePaths.
const docsDir = fileURLToPath(new URL(".", import.meta.url));
const contentDir = fileURLToPath(
	new URL("../packages/skills-docs/content", import.meta.url),
);
const contentRelDir = relative(docsDir, contentDir);

export default defineConfig({
	site: "https://theholocron.github.io",
	base: "/skills",
	integrations: [
		starlight({
			title: skillsConfig.name,
			plugins: [docsTheme()],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/theholocron/skills",
				},
			],
			sidebar: [
				{ label: "Overview", slug: "" },
				{
					label: "Skills",
					items: [{ autogenerate: { directory: contentRelDir } }],
				},
			],
		}),
	],
});
