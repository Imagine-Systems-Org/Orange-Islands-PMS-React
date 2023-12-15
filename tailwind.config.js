/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Barn': '#6E2113',
        'Jasper': '#D44B39',
        'Amaranth': 'B3225D',
        'Iris': '#5951B6',
        'Selective': '#FFBD16',
        'Perisan': '#40A295',
      },
    },
  },
  plugins: [],
}