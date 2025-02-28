import { NavLink } from "react-router-dom";
import { SidebarItemType } from "@/components/sidebar/sidebar.types.ts";

import "./styles.scss";

export function SidebarItem({ title, to }: SidebarItemType) {
  return (
    <NavLink
      to={`/${to}`}
      title={title}
      className={({ isActive }) =>
        isActive ? `sidebar-item active` : `sidebar-item`
      }
    >
      {title}
    </NavLink>
  );
}
