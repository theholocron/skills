import { defineConfig } from "@theholocron/cli";

export default defineConfig({
	description: "Shared agent skill registry.",
	repo: {
		protection: "balanced",
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
		{ name: "release", with: { "run-build": false } },
		"codeql",
		"review",
		"stale",
		"greetings",
		"dependencies",
		"bookkeeping-pr",
	],
	providers: {
		source: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
