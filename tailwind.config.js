/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/js/api/posts/components/*.mjs",
    "./src/js/**/*.mjs",
    "./pages/**/*.{html,js,mjs}",
    "./src/js/components/errorMsg.mjs",
  ],
  theme: {
    extend: {
      margin: {
      "38cp": "25%",
      },
      spacing: {
        "20r": "5rem",
        "200": "6rem",
        'minus-50': "-50%",
        "sml-btn-r": "-50px",
        "sml-btn-l": "-50px",
        "50p": "50%",
        "49": "12.3rem",
        "76": "79%",
        "81": "21.5rem",
        "1/1": "4%",
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
        "winning": "#2FD45B",
        "losing": "#DB3333",
        "error-txt": "#b91c1c",
        "error": "#f87171",
        "success-txt": "#15803d",
        "success": "#4ade80",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      "sm-tablet": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1050px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [require("daisyui")],
}
