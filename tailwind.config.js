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
          cream: '#F6F4E9',
          pale: '#F6F4EE',
          btnGreen: '#143F35',
          activeContainer: '#C4C4C4',
          darkgreen: '#0A1F1A',
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
