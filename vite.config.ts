import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use base path for GitHub Pages, but not for Vercel or local development
  base: process.env.VERCEL || mode === 'development' ? '/' : '/BM/',
  define: {
    // Set environment variables for routing
    'import.meta.env.VITE_VERCEL': JSON.stringify(process.env.VERCEL || false),
  },
}));
