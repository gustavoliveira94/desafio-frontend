/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/configs/tests/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 👈 define your alias here
    },
  },
});
