import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  server: { port: 8080 },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
