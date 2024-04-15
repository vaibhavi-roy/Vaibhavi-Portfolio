/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#81c3d7",
        "secondary": "#16425b",
        "tertiary": "#2f6690"
      }
    },
    screens: {

      'lg': { 'max': '2023px' },

      'sm': { 'max': '900px' },
    }
  },
  plugins: [],
}