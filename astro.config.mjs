import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import image from "@astrojs/image";

export default defineConfig({
  integrations: [tailwind(), sitemap(), prefetch(), image()],
});
