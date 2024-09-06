/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primBlack: "#0e0e0e",
        lightBlack: "#1c1c1c",
        primPurple: "#5a2e96",
        lightRed: "#dd3544"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}