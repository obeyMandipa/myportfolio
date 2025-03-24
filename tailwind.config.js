// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
content: [],
  purge: ['./index.html','@', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    animations
  ],
}
