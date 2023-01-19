import { defineConfig } from "vite";
import { resolve } from "path";
const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
/*saco la base: */
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        pages: resolve(root, "pages","act1", "act1.html"),
      },
    },
  },
});
