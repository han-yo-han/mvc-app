/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* 산뜻한 노란·주황 연한 파스텔톤 */
        cream: '#fefdf9',
        'cream-dark': '#faf6ef',
        'pastel-yellow': '#faf0d4',
        'pastel-yellow-strong': '#f5e6b8',
        'pastel-orange': '#fce8d4',
        'pastel-orange-strong': '#fadcc4',
        'pastel-peach': '#fef3e8',
        sand: '#f8f2e8',
        /* 텍스트 */
        charcoal: '#2c2824',
        ink: '#3d3935',
        muted: '#6b6358',
        'muted-light': '#9a9288',
        /* 포인트 - 부드러운 노란/주황 */
        accent: '#e8c88a',
        'accent-light': '#f5e6c8',
        'accent-soft': '#faf0dc',
        primary: '#e8c88a',
        'primary-light': '#faf0dc',
        /* UI */
        surface: '#faf6ef',
        border: '#ebe5dc',
        'text-main': '#2c2824',
        'text-secondary': '#3d3935',
        'text-muted': '#6b6358',
      },
      fontFamily: {
        display: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
        prose: '65ch',
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgb(44 40 36 / 0.04), 0 1px 2px -1px rgb(44 40 36 / 0.04)',
        card: '0 4px 12px -2px rgb(44 40 36 / 0.06), 0 2px 6px -4px rgb(44 40 36 / 0.04)',
        elevated: '0 12px 24px -8px rgb(44 40 36 / 0.08), 0 4px 12px -4px rgb(44 40 36 / 0.04)',
        glow: '0 0 40px -8px rgb(232 200 138 / 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
