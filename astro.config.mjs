import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(), // TailwindCSS integration
    react(),    // React integration
  ],
  publicDir: './public', // Ensure the public directory is correctly set
  site: 'https://erinihoffmann.com', // Replace with your site domain
});
