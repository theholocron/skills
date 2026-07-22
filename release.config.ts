import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	branches: ["main", { name: "alpha", prerelease: true }],
	exec: {
		publishCmd:
			"pnpm publish --access public --no-git-checks --tag ${nextRelease.channel || 'latest'}",
	},
});
