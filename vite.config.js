import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-loader'),
        require('pug-loader'),
      ],
    },
  },
});