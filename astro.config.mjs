import { defineConfig } from "astro/config";
import compress from "astro-compress";

export default defineConfig({
  site: "https://flisolgye-2025.github.io",
  base: "/web/",
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: false, // We'll handle image optimization manually
      svg: true,
    }),
  ],
  build: {
    assets: "_assets",
  },
  compressHTML: true,
});
