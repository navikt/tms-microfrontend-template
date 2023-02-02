import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import terser from "@rollup/plugin-terser";
import { resolve } from "path";
import importmap from "./importmap.json";

export default ({ command }) => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/Mikrofrontend.tsx"),
      name: "tms-mikrofrontend-template",
      formats: ["es"],
      fileName: () => `tms-mikrofrontend-template.js`,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
