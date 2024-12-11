import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy API requests to Express
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        entryFileNames: "admin.js",
        assetFileNames: "assets/admin-[hash].[ext]",
        chunkFileNames: "chunks/admin-[hash].js",
      },
    },
  },
});
