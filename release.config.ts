import { defineConfig } from "@theholocron/semantic-release-config";

const config = defineConfig({
	branches: ["main", { name: "alpha", prerelease: true }],
});

// Insert @semantic-release/npm between changelog and git so it bumps
// package.json and publishes to npm before @semantic-release/git commits the bump.
config.plugins.splice(3, 0, ["@semantic-release/npm", { access: "public" }]);

export default config;
