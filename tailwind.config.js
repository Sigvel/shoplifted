/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html, js}",
    "./src/js/**/*.{html, js}"
  ],
  theme: {
    extend: {},
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
  },
  plugins: [require("daisyui")],
}
