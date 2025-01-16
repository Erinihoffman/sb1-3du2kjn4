import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  publicDir: './public', // Ensure the public directory is correctly set
  site: 'https://erinihoffmann.com', // Replace with your site domain
});
