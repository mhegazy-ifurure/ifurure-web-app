/* eslint-disable @typescript-eslint/ban-ts-comment */
import MillionLint from '@million/lint';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const _plugins = [react()];
// @ts-ignore
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  envPrefix: "REACT_APP_",
  server: {
    port: 8080,
    host: true
  },
  plugins: _plugins,
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
});