import type { ReactNode } from "react";

import { Provider as ReduxStoreProvider } from "react-redux";

import { appStore } from "@/store";

export function StoreProvider({ children }: { children: ReactNode }) {
  return <ReduxStoreProvider store={appStore}>{children}</ReduxStoreProvider>;
}
