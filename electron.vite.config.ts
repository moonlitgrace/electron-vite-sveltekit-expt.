import { defineConfig } from 'electron-vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    }
  },
  renderer: {
    plugins: [sveltekit()]
  }
});
