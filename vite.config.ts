import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Relative base so the built site works from any static host path.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["uptown-garlic-voter.ngrok-free.dev"]
  }
});
