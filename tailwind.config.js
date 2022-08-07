const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1900px",
    },
    container: {
      center: true,
      padding: {
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      lineHeight: {
        12: "4rem",
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
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
