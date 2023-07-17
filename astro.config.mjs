import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind(), sitemap()],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "material-theme-darker"
    }
  },
  experimental: {
    assets: true
  }
});