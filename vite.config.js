// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        lokationer: resolve(__dirname, "src/lokationer.html"),
        om: resolve(__dirname, "src/om.html"),
        billetter: resolve(__dirname, "src/billetter.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        privatlivspolitik: resolve(__dirname, "src/privatlivspolitik.html"),
        cookiepolitik: resolve(__dirname, "src/cookiepolitik.html"),
        samarbejdspartnere: resolve(__dirname, "src/samarbejdspartnere.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
