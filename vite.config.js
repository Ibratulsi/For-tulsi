import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        favorites: resolve(root, "favorites.html"),
        letters: resolve(root, "letters.html"),
        memories: resolve(root, "memories.html"),
        story: resolve(root, "story.html"),
      },
    },
  },
});
