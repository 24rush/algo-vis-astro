import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://primiipasi.info",
  integrations: [
  mdx(), vue(), tailwind()]
});