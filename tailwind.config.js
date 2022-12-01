/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/js/api/posts/components/post.mjs",
    "./pages/**/*.{html,js,mjs}",
    "./src/js/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      margin: {
      "38cp": "25%",
      }
    },
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
        "midnight-blue": "#3B4558",
        "midnight-gray": "#171717",
        "golden-brown": "#A68A4E",
        "paper-white": "#F0F0F0",
        "sky-blue": "#808DA6",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("daisyui")],
}
