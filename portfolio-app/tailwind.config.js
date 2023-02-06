/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      sea: '#2b5876',
      burp: '#4e4376',
      silver: '#BDD1EB    ',
      darkg: '#4D7897',
      doubledark: '#697987'
    },
    extend: {
      fontFamily: {
        "Oswald": ['Merriweather', "serif"]
      }
    },
  },
  plugins: [],
}
