import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // minify: false,
    assetsInlineLimit: 0,
    target: ['es2022']
  }
});
