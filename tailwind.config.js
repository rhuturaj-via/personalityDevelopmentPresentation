/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff4ef',
          100: '#ffe2d5',
          200: '#ffc2ab',
          300: '#ff9a78',
          400: '#ff724e',
          500: '#f2552c',
          600: '#d93e17',
          700: '#ae2f11',
        },
        accent: {
          50: '#effcf9',
          100: '#d2f7ef',
          200: '#a8ecdf',
          300: '#74ddca',
          400: '#40c8b2',
          500: '#1ea58f',
          600: '#167f70',
          700: '#146559',
        },
        ink: {
          50: '#f5f7fb',
          100: '#e8edf5',
          200: '#cfd9e8',
          300: '#a9b9d3',
          400: '#7388ac',
          500: '#526884',
          600: '#3d516a',
          700: '#29384d',
          800: '#1b2536',
          900: '#121a28',
        },
        paper: '#fffaf5',
        sun: '#ffd66b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 50px rgba(18, 26, 40, 0.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(18, 26, 40, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 26, 40, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
