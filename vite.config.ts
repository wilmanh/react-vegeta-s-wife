import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      outDir: 'dist',
      tsconfigPath: './tsconfig.lib.json',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactVegetasWife',
      cssFileName: 'react-vegetas-wife',
      fileName: (format) =>
        format === 'es' ? 'react-vegetas-wife.js' : 'react-vegetas-wife.cjs',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
      },
    },
  },
});
