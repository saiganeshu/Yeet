/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        'black-transparent': {
          '20': 'rgba(0, 0, 0, 0.2)',
          '40': 'rgba(0, 0, 0, 0.4)',
          '60': 'rgba(0, 0, 0, 0.6)',
          '80': 'rgba(0, 0, 0, 0.8)',
        },
      },
    },
  },
  plugins: [],
}

