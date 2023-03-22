/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      vilskud_red: '#ff0000',
      baggrund: '#FFe9e9',
      text_black: '#231e1e',
      blue: '#1400ff',
      kurves: '#ff00ff',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  plugins: [require('daisyui')],
};
