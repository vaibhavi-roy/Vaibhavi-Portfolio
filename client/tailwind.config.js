/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "border1": "#212a3c",
        "secondary": "#676fgd",
        "tertiary": "#ffb17a",
        "primary": "#2d3250",
      }
    },
    screens: {

      'lg': { 'max': '2023px' },

      'sm': { 'max': '900px' },
    }
  },
  plugins: [],
}