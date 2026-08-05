//#region src/index.d.ts
interface SidebarLink {
  label: string;
  slug: string;
}
interface SidebarGroup {
  label: string;
  items: Array<SidebarLink | SidebarGroup>;
}
interface DocsConfig {
  slug: string;
  parent: string | null;
  name: string;
  sidebar: Array<SidebarLink | SidebarGroup>;
}
declare const config: DocsConfig;
//#endregion
export { DocsConfig, SidebarGroup, SidebarLink, config as default };