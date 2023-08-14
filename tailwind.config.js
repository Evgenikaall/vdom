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
                'main-color': '#E9E5E3'
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
            fontSize: {
                '12xl': '10.68rem',
            },

            animation: {
                fade: 'fadeIn 1450ms ease-in-out',
            },

            // that is actual animation
            keyframes: theme => ({
                fadeIn: {
                    '0%': { opacity: '0' },
                    '5%': { opacity: '0.1' },
                    '10%': { opacity: '0.2' },
                    '15%': { opacity: '0.3' },
                    '20%': { opacity: '0.4' },
                    '25%': { opacity: '0.5' },
                    '30%': { opacity: '0.6' },
                    '35%': { opacity: '0.7' },
                    '40%': { opacity: '0.8' },
                    '45%': { opacity: '0.9' },
                    '50%': { opacity: '1' },
                    '55%': { opacity: '0.9' },
                    '60%': { opacity: '0.8' },
                    '65%': { opacity: '0.7' },
                    '70%': { opacity: '0.6' },
                    '75%': { opacity: '0.5' },
                    '80%': { opacity: '0.4' },
                    '85%': { opacity: '0.3' },
                    '90%': { opacity: '0.2' },
                    '95%': { opacity: '0.1' },
                    '100%': { opacity: '0' }
                }
            }),
        },
    },
    plugins: [],
}