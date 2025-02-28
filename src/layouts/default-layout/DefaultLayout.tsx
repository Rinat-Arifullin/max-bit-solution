import { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar.tsx";

import "./styles.scss";
import { Navigate, useParams } from "react-router-dom";

const cocktailsCodeSet = new Set(["margarita", "mojito", "a1", "kir"]);

export function DefaultLayout({ children }: { children: ReactNode }) {
  const params = useParams<{ cocktail: string }>();

  if (params.cocktail && !cocktailsCodeSet.has(params.cocktail)) {
    return <Navigate to="*" replace />;
  }
  return (
    <div className="default-layout">
      <Sidebar />
      {children}
    </div>
  );
}
