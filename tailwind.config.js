const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1536px',
      '3xl': '1900px'
    },
    extend: {
      colors: {
      },
      backgroundImage: {
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
}
