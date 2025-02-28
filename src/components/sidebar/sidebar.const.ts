import { SidebarItemType } from "@/components/sidebar/sidebar.types.ts";
import { RouterPaths } from "@/router/router-path.const.ts";

export const sidebarList: SidebarItemType[] = [
  {
    to: RouterPaths.MARGARITA.PATH,
    title: "MARGARITA",
  },
  {
    to: RouterPaths.MOJITO.PATH,
    title: "MOJITO",
  },
  {
    to: RouterPaths.A1.PATH,
    title: "A1",
  },
  {
    to: RouterPaths.KIR.PATH,
    title: "Kir",
  },
];
