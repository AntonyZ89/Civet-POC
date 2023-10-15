import { defineConfig } from 'vite'
import civetPlugin from 'vite-plugin-civet'
import reactPlugin from '@vitejs/plugin-react-swc';

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    AutoImport({
      include: [/\.civet/],
      imports: ['react', 'react-router-dom'],
      dirs: [
        './src/components/**',
        './src/pages/**'
      ]
    }),
    civetPlugin({
      stripTypes: true,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'vite:react-swc',
    }),
  ],
})
