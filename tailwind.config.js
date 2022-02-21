const colors = require('tailwindcss/colors')


module.exports = {

  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        teal: colors.teal["700"],
        servicesBlue: colors.blue["300"],
        teamTeal: colors.teal["400"],
        primary: '#3BA2DB',
        secondary: '#31B9D5',
        third: '#E8DED2',
        fourth : '#086878',
        sliderColor: "#F0F8FB"

      },


      fontFamily: {
        AmsiPro: ['AmsiPro', 'normal'],
        Helvetica: ['Helvetica', 'inherit'],
        Manrope: ['Manrope', 'normal'],
        Lato: ['Lato', 'normal'],

      },


      height:   {
        "screen/2": "50vh",
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
