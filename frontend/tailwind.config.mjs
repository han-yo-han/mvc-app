/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#059669',
        'primary-dark': '#047857',
        'primary-light': '#ECFDF5',
        'primary-content': '#ffffff',
        'accent': '#F59E0B',
        'text-main': '#111827',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
        'surface': '#F9FAFB',
        'border': '#E5E7EB',
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
        'display': ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'page': '1152px',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'elevated': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
