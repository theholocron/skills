import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

export default defineConfig({
	docs: {
		name: "Skills",
		github: "skills",
		sidebar: [
			{ label: "Overview", slug: "" },
			{
				label: "Skills",
				items: [
					{ label: "commit-standards", slug: "skills/commit-standards" },
					{ label: "destructive-command-guard", slug: "skills/destructive-command-guard" },
					{ label: "git-safety", slug: "skills/git-safety" },
					{ label: "holocron-skill-client", slug: "skills/holocron-skill-client" },
					{ label: "holocron-skill-config", slug: "skills/holocron-skill-config" },
					{ label: "holocron-skill-plugin", slug: "skills/holocron-skill-plugin" },
					{ label: "holocron-skill-skill", slug: "skills/holocron-skill-skill" },
					{ label: "holocron-skill-util", slug: "skills/holocron-skill-util" },
					{ label: "pr-workflow", slug: "skills/pr-workflow" },
					{ label: "security-review", slug: "skills/security-review" },
				],
			},
		],
	},
	starlight,
	docsTheme,
	srcDir: "./docs/src",
	outDir: "./docs/dist",
	publicDir: "./docs/public",
});
