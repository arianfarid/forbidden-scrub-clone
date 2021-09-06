module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active', 'focus'],
      ringColor: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
}