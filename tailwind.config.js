/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shiftColors: {
          '0%, 100%': { background: 'rgba(0,0,0,0.9)' },
          '50%': { background: 'rgba(0,0,0,0.4)' }
        },
        slideRight: {
          '0%': { "background-postion": '-100%' },
          '100%': { "background-postion": '100%' }
        }
      }
    },
  },
  plugins: [],
}