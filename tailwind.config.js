/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        primaryColor: '#22c55e',
        secondaryColor:'#facc15'
      }
    },
  },
  plugins: [],
}