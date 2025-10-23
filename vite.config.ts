import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Configuración para desarrollo - redirigir todas las rutas a index.html
    historyApiFallback: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuración para build - asegurar que todas las rutas redirijan a index.html
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
