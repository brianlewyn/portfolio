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
        'White': 'rgb(var(--White) / 1)',
        'Teal': 'rgb(var(--Teal) / 1)',
        'Gray': 'rgb(var(--Gray) / 1)',
        'Dark': 'rgb(var(--Dark) / 1)',
        'TealGlass': 'rgb(var(--Teal) / .20)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backgroundImage: {
        'ImgTemplate': "url('img/ImgTemplate.jpg')",
      }
    },
  },
  plugins: [],
}
