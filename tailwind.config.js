/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ['Open Sans', 'sans-serif'],
        spartan:["League Spartan", "serif"],
        montserrat:[ "Montserrat", "serif"],
        poppins:["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
