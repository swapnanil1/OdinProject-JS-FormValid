// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,html}',
        './main.js', // Or wherever your JS/HTML files are that use Tailwind classes
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
