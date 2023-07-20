/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '50vh': '50vh',
        '30vh': '30vh',
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        'main-color' : '#E9E5E3'
      },
      backdropBlur: {
        '1.5': '1.5px',
      }
    },
  },
  plugins: [],
}