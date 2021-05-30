import node from "@sveltejs/adapter-node";
import { readFileSync } from "fs";
import preprocess from "svelte-preprocess";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: node(),
    target: "#svelte",
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.devDependencies || {}),
      },
    },
  },
};

export default config;
