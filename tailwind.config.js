/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            screens: {
                "media368": "368px",
                "media432": "432px",
                "media516": "516px",
                "media568": "568px",
                "media668": '668px',
                'media1200': '1200px',
            },
            backgroundImage: {
                'testimonial-background': "url('./images/testimonial-background.png')",
            }
        },
        fontFamily: {
            'Nunito': ['Nunito', 'ui-sans-serif'],
        }
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant("open-menu", ".open-menu &");
        }),
        plugin(function({ addVariant }) {
            addVariant("active", ".active&");
        })
    ],
}