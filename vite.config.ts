import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

const r = (path) => resolve(__dirname, path);

export default defineConfig({
  resolve: {
    alias: {
      renderer: r('renderer'),
      controls: r('controls'),
    },
  },
  plugins: [
    react(),
    dts(
      {
        insertTypesEntry: true,
        include: ['lib'],
      },
    ),
  ],
  build: {
    lib: {
      entry: path.resolve('./lib/index.tsx'),
      name: 'Istoria',
      formats: ['es', 'umd'],
      fileName: (format) => `istoria.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
