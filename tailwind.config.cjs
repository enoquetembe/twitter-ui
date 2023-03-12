/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',

        'twitter-black-primary': '#0f1419',
        'twitter-black-secondary': '#202020',
        'twitter-black-900': '#121214',

        'twitter-gray-primary': '#ebeef0',
        'twitter-gray-500': '#828282',
      
      },
      
      fontFamily: {
        'roboto': 'Roboto'
      },

      gridTemplateColumns: {
        'twitter-grid': '300px 1fr',
        'tweet-grid': '48px 1fr'
      }
    },
  },
  plugins: [],
}
