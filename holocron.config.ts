import { defineConfig } from "@theholocron/cli";

export default defineConfig({
	description: "Shared agent skill registry.",
	homepage: "https://docs.theholocron.dev/skills/",
	repo: {
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		protection: "strict",
		topics: ["agent", "claude", "codex", "developer-tools", "skills"],
		properties: {
			lifecycle: "active",
			open_source: true,
			runtime_environment: "none",
			uses_external_packages: false,
		},
	},
	workflows: [
		"test",
		"release",
		"review",
		"stale",
		"greetings",
		"dependencies",
		"bookkeeping",
		"sync",
		{ name: "deploy", with: { docs: true } },
	],
	providers: {
		source: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
