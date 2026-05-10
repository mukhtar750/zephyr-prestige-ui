import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
export default defineConfig({
  cloudflare: false,
  plugins: [nitro({ preset: "vercel" })],
  tanstackStart: {
    server: { entry: "server" },
  },
});
