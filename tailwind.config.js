/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': '100px',
      'desk': '900px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'main-bg': 'hsl(233, 47%, 7%)',
      'card-bg': 'hsl(244, 38%, 16%)',
      'accent': 'hsl(277, 64%, 61%)',
      'paragraph': 'hsla(0, 0%, 100%, 0.75)',
      'stat-heading': 'hsla(0, 0%, 100%, 0.6)',
    },
    extend: {},
  },
  plugins: [],
}
