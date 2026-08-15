import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	branches: ["main", { name: "alpha", prerelease: true }],
	assets: ["CHANGELOG.md", "package.json", "packages/skills/package.json", "packages/skills-docs/package.json"],
	exec: {
		prepareCmd: "pnpm exec holocron npm bump-versions ${nextRelease.version}",
		publishCmd:
			"pnpm -r --filter='./packages/*' publish --access public --no-git-checks --provenance --tag ${nextRelease.channel || 'latest'}",
	},
});
