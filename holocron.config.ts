import { defineConfig } from "@theholocron/cli";
import { nodeDocs } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain, docs } = nodeDocs();
export default defineConfig({
	description: "Shared agent skill registry.",
	homepage: "https://docs.theholocron.dev/skills/",
	org,
	domain,
	docs,
	repo: {
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["agent", "claude", "codex", "developer-tools", "skills"],
		...repo,
		requiredChecks: [...repo.requiredChecks],
		properties: {
			...repo.properties,
			runtime_environment: "none",
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "release", with: { "run-build": false } },
		"sync",
	],
	providers: { ...providers, secrets: "github" },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
