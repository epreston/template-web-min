import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // minify: false,
    assetsInlineLimit: 0,
    target: ['es2022']
  },
  worker: {
    format: 'es'
  },
  server: {
    headers: {
      // allow SharedArrayBuffer objects and Performance.now() with unthrottled timers
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
});
