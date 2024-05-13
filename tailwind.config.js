/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {fontFamily: {
      'roboto': ['Roboto', 'sans-serif'] // Use the name of the font, followed by fallback fonts
    }},
  },
  variants: {},
  plugins: [],
}
