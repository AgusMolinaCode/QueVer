/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
