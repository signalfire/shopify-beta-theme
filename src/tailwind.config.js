module.exports = {
  purge: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['Open Sans', 'sans-serif'],
      display: ['Oswald']
    },
    extend: {
      colors: {
        beta:{
          gray:{
            darkest:'#1D1D1D',
            dark:'#2c2c2c',
            mid: '#6b7074',
            light:'#90969a'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
