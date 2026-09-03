import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://platform.linkedin.com https://gpteng.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; worker-src 'self' blob:; frame-src 'self' https://ai-ide.mikepfunk.com https://mikepfunk-mobile.pages.dev; connect-src 'self' https://api.github.com https://fonts.googleapis.com https://mikepfunk.com https://ai-ide.mikepfunk.com https://mikepfunk-mobile.pages.dev https://*.convex.site wss://*.convex.cloud https://www.google-analytics.com ws://localhost:* wss://localhost:* ws://127.0.0.1:* wss://[::1]:*;"
    }
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
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-tabs', '@radix-ui/react-toast'],
          'router-vendor': ['react-router-dom'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  },
}));
