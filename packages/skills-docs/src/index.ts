export interface SidebarLink {
	label: string;
	slug: string;
}

export interface SidebarGroup {
	label: string;
	items: Array<SidebarLink | SidebarGroup>;
}

export interface DocsConfig {
	slug: string;
	parent: string | null;
	name: string;
	sidebar: Array<SidebarLink | SidebarGroup>;
}

const config: DocsConfig = {
	slug: "skills",
	parent: null,
	name: "Skills",
	sidebar: [
		{ label: "Overview", slug: "skills" },
		{
			label: "Skills",
			items: [
				{ label: "commit-standards", slug: "skills/skills/commit-standards" },
				{ label: "git-safety", slug: "skills/skills/git-safety" },
				{
					label: "holocron-skill-client",
					slug: "skills/skills/holocron-skill-client",
				},
				{
					label: "holocron-skill-config",
					slug: "skills/skills/holocron-skill-config",
				},
				{
					label: "holocron-skill-plugin",
					slug: "skills/skills/holocron-skill-plugin",
				},
				{
					label: "holocron-skill-skill",
					slug: "skills/skills/holocron-skill-skill",
				},
				{
					label: "holocron-skill-util",
					slug: "skills/skills/holocron-skill-util",
				},
				{ label: "pr-workflow", slug: "skills/skills/pr-workflow" },
				{ label: "security-review", slug: "skills/skills/security-review" },
			],
		},
	],
};

export default config;
