/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: 'Comfortaa',
        Poppins: 'Poppins',
      },
      colors: {
        'Red': '#FF0051',
        'Teal': '#A7F1E1',
        'Dark': '#090B10',
      },
      zIndex: {
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
