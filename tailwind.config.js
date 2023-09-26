/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shiftColors: {
          '0%, 100%': { background: 'rgba(4,4,15,0.9)' },
          '50%': { background: 'rgba(4,4,15,0.4)' }
        }
      }
    },
  },
  plugins: [],
}