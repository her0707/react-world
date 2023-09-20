import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import nodejs from "@astrojs/node";

export default defineConfig({
  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  adapter: nodejs({
    mode: "middleware", // or 'standalone'
  }),
  output: "server",
});
