// vite.config.js
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import postcss from 'rollup-plugin-postcss';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig(({}) => {
  return {
    define: {
      'process.env': {},
    },
    plugins: [
      react(),
      postcss({}),
      NodeGlobalsPolyfillPlugin({ process: true, buffer: true }),
      NodeModulesPolyfillPlugin(),
      rollupNodePolyFill()
    ],
    resolve: {
      alias: {
        lib: resolve(__dirname, "src/lib"),
        routes: resolve(__dirname, "src/routes"),
      },
    },
    optimizeDeps: {
      include: ['@emotion/use-insertion-effect-with-fallbacks'],
      esbuildOptions: {
        define: {
          global: 'globalThis'
        },
      }
    },
    build: {
      minify: false,
      rollupOptions: {
        external: [
          /^node:.*/,
          ""
        ],
      }
    },
  }
});
