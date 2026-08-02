import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import { defineConfig } from "@theholocron/astro-config";
import skillsConfig from "@theholocron/skills-docs";

export default defineConfig({
	docs: skillsConfig,
	importMetaUrl: import.meta.url,
	starlight,
	docsTheme,
});
