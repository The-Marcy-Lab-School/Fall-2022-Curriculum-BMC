import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

const publicDir = path.join(__dirname, '..', 'server', 'public');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: publicDir,
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
