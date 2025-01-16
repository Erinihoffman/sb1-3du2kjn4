/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A4858',
        secondary: '#E8C4C4',
        accent: '#F5E6E8',
        neutral: '#F8F9FA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
}