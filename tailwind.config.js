/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "button-list-color": "#F2F2EF",
        "Video-card-color": "#E7E6E4",
      },
    },
  },
  plugins: [require("tailwindcss"), require("@tailwindcss/line-clamp")],
};
