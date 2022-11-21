const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pry: {
          DEFAULT: "#F7F7FA",
          alt: {
            100: "#F8F8FA",
            DEFAULT: "#F0F0F3",
          },
        },
        sec: {
          DEFAULT: "#275BAE",
          alt: {
            DEFAULT: "#56C9FE",
            400: "#DBF4FF",
            200: "#EBF1FC",
            450: "#BDD8E6",
            300: "#F1F4FC",
            500: "#6492BD",
            600: "#4E6995",
            100: "#E6E6EF",
            700: "#ECEFF7",
            550: "#1792D3",
          },
        },
        tert: {
          orange: "#FFEBE5",
          blue: "#E5EFFF",
        },
      }
    },
  },
  plugins: [],
}
