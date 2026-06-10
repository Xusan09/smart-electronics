/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: { DEFAULT: '#00d4ff', dark: '#0099cc', light: '#66e5ff' },
        dark: { DEFAULT: '#0a0e1a', card: '#0f1629', border: '#1a2540', hover: '#1e2d4a' },
        accent: '#ff6b00',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon': '0 0 10px #00d4ff, 0 0 20px #00d4ff40',
      },
    },
  },
  plugins: [],
};
