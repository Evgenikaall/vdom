/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '94vh': '94vh',
        '90vh': '90vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '15vh': '15vh',
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        'main-color' : '#E9E5E3'
      },
      backdropBlur: {
        '1.5': '1.5px',
      },
      borderRadius: {
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '4.5rem': '4.5rem'
      },
      fontSize:{
        '12xl':'10.68rem',
      },
    },
  },
  plugins: [],
}