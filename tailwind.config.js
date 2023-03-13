/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // // // Light Mode // // / 
        // Backround
        "lbp": "#ffffff",
        "lbs": "#f0f0ff",
        // Action
        "lap": "#d5e2f1",
        "las": "#e7f0f8",
        // Foreground
        "lfp": "#232b39",
        "lfs": "#697586",
        "lft": "#a2b0c3",

        // accent
        "accent": "#4364f9",
        "daccent": "#1f3597",

        // // // Dark Mode // // / 
        // Backround
        "dbp": "#2d3748",
        "dbs": "#1a212d",
        // Action
        "dap": "#d5e2f1",
        "das": "#2d3748",
        // Foreground
        "dfp": "#edf2f7",
        "dfs": "#ccd6e0",
        "dft": "#a0aec0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }

      }
    },
  },
  plugins: [],
}