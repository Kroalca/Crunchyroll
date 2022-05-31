module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          550: '#f47521'
        },
        neutral: {
          850: '#23252B',
          950: '#141519',
          250: '#dadada',
          350: '#a0a0a0'
        }
      }
    },
  },
  plugins: [],
}