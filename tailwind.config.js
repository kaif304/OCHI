/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              sans: ['Roboto', 'Arial', 'sans-serif'], // navbar font
              condensed: ['"Roboto Condensed"', 'sans-serif'], // landing page title font
          },
      },
  },
  plugins: [],
}