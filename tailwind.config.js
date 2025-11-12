/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxort: {
          cream: '#F3EFE6',
          pale: '#F6F4EE',
          darkgreen: '#25322E',
          deepgreen: '#15302B',
          accent: '#2F4B46'
        }
      },
      fontFamily: {
        serif: ['PlayfairDisplay', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
