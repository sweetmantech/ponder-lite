import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    setupFiles: [
      "src/common/setupFetchPolyfill.ts",
      "test/utils/setupPackageAlias.ts",
    ],
  },
});
