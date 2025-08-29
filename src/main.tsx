import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "@/app/router";

import "@/styles/globals.scss";

import "@/app/il8n";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
);
