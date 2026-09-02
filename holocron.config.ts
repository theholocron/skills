import { defineConfig } from "@theholocron/cli";
import { compose, nodeDocsSite, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(nodeDocsSite(), wiki());
export default defineConfig({
	...preset,
	description: "Shared agent skill registry.",
	homepage: "https://docs.theholocron.dev/skills/",
	repo: {
		...preset.repo,
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["agent", "claude", "codex", "developer-tools", "skills"],
		properties: {
			...preset.repo.properties,
			runtime_environment: "none",
			uses_external_packages: false,
		},
	},
	workflows: [...preset.workflows, { name: "release", with: { "run-build": false } }, "sync"],
	providers: { ...preset.providers, secrets: "github" },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
