import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { StoreProvider } from "@/context/StoreProvider";
import { App } from "./App";

import "./index.scss";

const rootElement = document.getElementById("root");
if (!rootElement) throw Error("Root element with ID 'root' not found");

createRoot(rootElement).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
