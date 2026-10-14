import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset URLs so the build works under any GitHub Pages sub-path
  // (https://<user>.github.io/<repo>/), even if the repo is renamed.
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
  },
});
