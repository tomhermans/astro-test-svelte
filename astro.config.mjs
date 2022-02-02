import path from "node:path";
import { imagetools } from "vite-imagetools";


export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    // site: 'http://example.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // tailwindConfig: "./tailwind.config.js",
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
  },
  vite: {
    resolve: {
      alias: {
        $src: path.resolve("./src"),
        $components: path.resolve("./src/components"),
        $layouts: path.resolve("./src/layouts"),
        $styles: path.resolve("./src/styles"),
      },
    },
    define: {
      "process.env.VITE_BUILD_TIME": JSON.stringify(new Date().toISOString()),
    },
    // for example only - adapt for your own project
    plugins: [imagetools({ force: true })],
  },
  renderers: [
    "@astrojs/renderer-preact",
    "@astrojs/renderer-react",
    "@astrojs/renderer-svelte",
  ],
};
