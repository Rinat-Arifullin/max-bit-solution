import { SidebarItem } from "@/components/sidebar/components/sidebar-item/SidebarItem.tsx";

import { SidebarItemType } from "@/components/sidebar/sidebar.types.ts";

import "./styles.scss";

type SidebarListProps = {
  items: SidebarItemType[];
};

export function SidebarList({ items }: SidebarListProps) {
  return (
    <div className="sidebar-list">
      {items.map((item) => (
        <SidebarItem key={item.title} title={item.title} to={item.to} />
      ))}
    </div>
  );
}
