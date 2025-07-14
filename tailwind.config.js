/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      fontFamily: {
        truck: ['"Russo One"', "sans-serif"],
      },
    },
  },
};
