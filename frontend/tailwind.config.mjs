/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1152d4',
        'primary-dark': '#0d42aa',
        'primary-content': '#ffffff',
        'accent-gold': '#D4AF37',
        'background-light': '#ffffff',
        'background-beige': '#F9F7F2',
        'background-warm': '#f4f4f0',
        'warm-neutral': '#f4f3ef',
        'neutral-light': '#f6f6f8',
        'neutral-dark': '#1a2230',
        'background-dark': '#101622',
        'text-main': '#0d121b',
        'text-secondary': '#4c669a',
        'text-muted': '#4c669a',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1rem',
        'full': '9999px'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 82, 212, 0.08)',
      }
    },
  },
  plugins: [],
}
