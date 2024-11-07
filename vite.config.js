import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/bin2dec/",
    optimizeDeps: {
        include: ["react", "react-dom"],
    },
    build: {
        sourcemap: false,
    },
});
