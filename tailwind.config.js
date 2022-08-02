/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: 'Comfortaa',
        Poppins: 'Poppins',
      },
      colors: {
        'Red': 'rgb(var(--Red) / 1)',
        'Teal': 'rgb(var(--Teal) / 1)',
        'Dark': 'rgb(var(--Dark) / 1)',
        'TealGlass': 'rgb(var(--Teal) / .20)',
        'DarkGlass': 'rgb(var(--Dark) / .68)',
        'WhiteGlass': 'rgb(var(--White) / .68)',
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
