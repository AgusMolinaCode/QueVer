/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'xs': {'max': '450px'},
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'lg': {'max': '780px'},
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
