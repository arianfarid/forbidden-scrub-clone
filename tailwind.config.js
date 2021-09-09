module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      backdropSepia: {
         25: '.25',
         75: '.75',
       },
      },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active', 'focus'],
      ringColor: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
}