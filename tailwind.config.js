/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "def": "#165DC5",
      },
    },
  },
  plugins: [require("daisyui")],
}
