import { createDocsCollections } from "@theholocron/docs-theme/content";
import skillsConfig from "@theholocron/skills-docs";

export const collections = createDocsCollections(skillsConfig, import.meta.url);
