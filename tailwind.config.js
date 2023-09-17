/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#354f52",
        secondary: "#52796f",
        accent: "#4b9a8f",
        background_alpha: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        gentium: ["Gentium Plus ", "sans"],
      },
      boxShadow: {
        "3xl": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      },
    },
  },
  plugins: [],
};
