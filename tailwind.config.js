/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34251F',
        logo: '#242424',
        footer: '#413531',
        reviews: '#EEDDCC',
      },
      fontFamily: {
      body: ['Frank Ruhl Libre', 'Lato']
      }
    },
  },
  plugins: [],
}
