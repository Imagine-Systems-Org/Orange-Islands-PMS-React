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
        'Amaranth': '#B3225D',
        'Iris': '#5951B6',
        'Selective': '#FFBD16',
        'Persian': '#40A295',
      },
      fontFamily: {
        "MajorMono": ['Major Mono Display', 'monospace'],
        "Nova": ['Nova Mono', 'monospace'],
        "Zilla": ['Zilla Slab', 'serif']
      }
    },
  },
  plugins: [],
}