import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5174,
  },
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "Counter",
      fileName: "counter",
    },
  },
});
