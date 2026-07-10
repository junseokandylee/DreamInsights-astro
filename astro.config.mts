import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    imageService: false,
  }),
  integrations: [
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: '0.0.0.0',
    port: 4322,
  },
});
