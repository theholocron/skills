import { defineConfig } from "@theholocron/astromech/config";

/**
 * The task-runner layer for this repo — repo-specific tasks, merged with
 * holocron.config.ts's intent-vocabulary tasks by astromech's
 * `loadTasksConfig` (ADR-0009, two-file config system).
 *
 * No delivery.build / sourceQuality.deadCodeAnalysis / delivery.bundleSize —
 * this repo ships src/ directly (see package.json's `files`), no build step,
 * no typecheck, no knip config (matches the old nodeDocsSite() preset, which
 * never included the typecheck()/audit-check capabilities either).
 */
export default defineConfig({
	tasks: [
		// Publish: no build step — this package ships src/ as-is.
		{ name: "delivery.publish", with: { "run-build": false } },
		// Sync: keep generated files (workflows, labels, …) current on push to main.
		"platform.repoSync",
	],
});
