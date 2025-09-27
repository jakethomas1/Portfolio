/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'u-3': '1564px',
                'xs3': '367px'
            },
            fontFamily: {
                sourcecode: ['"Source Code Pro"', 'monospace'],
            },
        },
    },
    plugins: [],
};
