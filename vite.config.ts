import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@blog": "/src/components/Blog",
      "@posts": "/public/posts",
    },
  },
});
