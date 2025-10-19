import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./presentation/views";
import { Layout } from "./presentation/layout/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>,
);
