const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      xs: '20rem',
    },
    screens: {
      xxs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "2000px",
      "3xl": "2500px",
    },
    container: {
      center: true,
      padding: {
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        "3xl": "15rem"
      },
    },
    extend: {
      lineHeight: {
        12: "4.3rem",
      },
      colors: {
        purple: "#304E86",
        secondary: "#121212",
        cream: "#FFFCF5",
      },
      backgroundImage: {
        circular: "url('/svg/contact-bg.svg')",
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        display: ["PT Serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
