/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#354f52",
        secondary: "#52796f",
        accent: "#84a94c",
      },
      fontFamily: {
        gentium: ["Gentium Plus ", "sans"],
      },
    },
  },
  plugins: [],
};
