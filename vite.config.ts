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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js into its own chunk
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Split UI components
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-tabs', '@radix-ui/react-toast'],
          // Split router
          'router-vendor': ['react-router-dom'],
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
}));
