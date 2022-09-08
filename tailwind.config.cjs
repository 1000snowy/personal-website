const lineclamp = require("@tailwindcss/line-clamp");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          /* 100: "#F3F4F6", */
        }
      }
    },
  },
  plugins: [lineclamp],
};