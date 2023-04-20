import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: ".vite",
  build: {
    // https://styled-components.com/docs/faqs#removing-styledcomponents-from-your-library-bundle
    rollupOptions: {
      external: ["styled-components"],
    },
  },
});
