import { SidebarList } from "@/components/sidebar/components/sidebar-list/SidebarList.tsx";
import { sidebarList } from "@/components/sidebar/sidebar.const.ts";

export function Sidebar() {
  return <SidebarList items={sidebarList} />;
}
