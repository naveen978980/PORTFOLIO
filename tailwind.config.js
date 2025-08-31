/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','Segoe UI','Roboto','Inter','sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e6ecff',
          200: '#c9d6ff',
          300: '#a6b9ff',
          400: '#7a90ff',
          500: '#556bff',
          600: '#3948f7',
          700: '#2c39c4',
          800: '#242f9b',
          900: '#1c266f',
          950: '#0b1220'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
};
