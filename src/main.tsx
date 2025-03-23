import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(
  document.getElementById(import.meta.env.VITE_MINIAPP_NAME || "root")!
).render(
  <StrictMode>
    <App />
  </StrictMode>
);
