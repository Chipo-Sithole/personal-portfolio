/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#faf9fb',
          100: '#f3f1f7',
          200: '#e9e5f0',
          300: '#d9d2e4',
          400: '#c4b5d3',
          500: '#a992bc',
          600: '#8b6fa3',
          700: '#735a87',
          800: '#5d4a6e',
          900: '#4a3c57',
        },
        accent: {
          50: '#fdf4f8',
          100: '#fbe8f1',
          200: '#f7d1e4',
          300: '#f1aacf',
          400: '#e875b1',
          500: '#dc4894',
          600: '#c63077',
          700: '#a52561',
          800: '#88214f',
          900: '#721e44',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #faf9fb 0%, #f3f1f7 50%, #faf9fb 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #fdf4f8 0%, #f3f1f7 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(169,146,188,0.1) 0%, rgba(250,249,251,0) 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      boxShadow: {
        'elegant': '0 10px 40px rgba(169, 146, 188, 0.15)',
        'subtle': '0 4px 20px rgba(169, 146, 188, 0.1)',
      },
    },
  },
  plugins: [],
}