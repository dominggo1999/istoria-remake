import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const r = (path) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  root: 'example',
  build: {
    outDir: 'istoria-dist',
    rollupOptions: {
      input: {
        istoria: r('example/index.html'),
        _renderer: r('example/_renderer/index.html'),
      },
    },
  },
  plugins: [
    react(),
  ],
});
