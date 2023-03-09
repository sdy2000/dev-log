/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        // // // Light Mode // // / 
        // Backround
        "lbp":"#ffffff",
        "lbs":"#f5faff",
        // Action
        "lap":"#d5e2f1",
        "las":"#e7f0f8",
        // Foreground
        "lfp":"#232b39",
        "lfs":"#697586",
        "lft":"#a2b0c3",

        // accent
        "accent":"#4364f9",

        // // // Dark Mode // // / 
        // Backround
        "dbp":"#2d3748",
        "dbs":"#1a212d",
        // Action
        "dap":"#d5e2f1",
        "das":"#2d3748",
        // Foreground
        "dfp":"#edf2f7",
        "dfs":"#ccd6e0",
        "dft":"#a0aec0",
      }
    },
  },
  plugins: [],
}