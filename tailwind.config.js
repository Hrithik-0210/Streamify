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
        "Video-card-color": "#EEEFED",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
