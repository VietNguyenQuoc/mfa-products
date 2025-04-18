import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://mfa-products-production.up.railway.app/",
  build: {
    rollupOptions: {
      external: ["react", /react-dom/],
    },
    manifest: true,
  },
});
