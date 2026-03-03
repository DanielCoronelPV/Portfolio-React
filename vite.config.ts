import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

function componentTagger() {
  return {
    name: "component-tagger",
    transform(code: string, id: string) {
      if (/\.[jt]sx?$/.test(id) && /export\s+(default\s+)?function|export\s+const/.test(code)) {
        const componentName = id.split("/").pop()?.split(".")[0];
        return {
          code: code.replace(
            /^(import\s+React|^(?!import))/m,
            `/* Component: ${componentName} */\n$1`
          ),
        };
      }
    },
  };
}
