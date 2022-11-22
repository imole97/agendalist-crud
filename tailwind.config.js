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
      },
      screens: {
        "phone-mini": "200px",
        "phone-xs": "320px",
        "phone-sm": "375px",
        "phone-md": "400px",
        "phone-lg": "480px",
        "desktop-med": "1350px",
        "desktop-wide": "1440px",
        max: "1920px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
