/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "button-list-color": "#F2F2EF",
        "Video-card-color": "#F2F2F2",
      },
      screens: {
        sm: "376px",
        // => @media (min-width: 576px) { ... }

        md: "690px",
        // => @media (min-width: 960px) { ... }

        lg: "1050px",
        // => @media (min-width: 1440px) { ... }
        xl: "1595px",
      },
      height: {
        infinite: "auto",
      },
    },
  },
  plugins: [require("tailwindcss"), require("@tailwindcss/line-clamp")],
};
