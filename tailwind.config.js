/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "def": "#165DC5",
        "dimfont":"#959298",
        "btn_def":"#696CFF",
        "hover_t":"#F6F1FF", 
        "acc_head":"#484848",
        "nav_font":"#534F5A",


            },
    },
  },
  plugins: [require("daisyui",'tailwind-scrollbar-hide')],
}
