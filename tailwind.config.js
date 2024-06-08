/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: 'rgb(27, 31, 35)',
      },
      colors: {
        'custom-dark': 'rgb(27, 31, 35)', // Add your custom color here
      },

    },
  },
   plugins: [
    require('daisyui'),
  ],
}

