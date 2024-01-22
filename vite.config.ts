import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import importmap from "./importmap.json";

export default () => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/Mikrofrontend.tsx"),
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "tms-mikrofrontend-template.[hash].js",
        format: "esm",
      },
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
