import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const base = process.env.VITE_BASE || './';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'vendor', dest: '.' },
        { src: 'src/theme/main.js', dest: 'theme', rename: { stripBase: true, name: 'main.js' } },
        { src: 'assets/image/*', dest: 'assets/image', rename: { stripBase: true } },
        { src: 'fonts', dest: '.' },
        { src: 'images', dest: '.' },
        { src: 'robots.txt', dest: '.' },
        { src: 'favicon.ico', dest: '.' },
        { src: 'favicon.svg', dest: '.' },
        { src: 'apple-touch-icon.png', dest: '.' },
      ],
    }),
  ],
  server: { port: 5173, open: false },
});
