const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layout/**/*.{js,jsx}",
    "./globalComponents/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "420px" },
      // => @media (max-width: 420px) { ... }
      um: { max: "320px" },
    },
    colors: {
      lightPrimary: "#027FFA",
      lightSecondary: "#F2F2F7",
      lightTertiary: "#1C1C1E",
      white: "#FFFFFF",
      blackPrimary: "#0E88FA",
      blackSecondary: "#EBEBF0",
      blackTertiary: "#242426",
      grey: "#EFE4E4",
      logo: "#A66E6E",
    },
    extend: {
      backgroundImage: (theme) => ({
        curve: "url('/img/curve.svg')",
        curve2: "url('/img/curve2.svg')",
      }),

      width: {
        heroText: "30rem",
      },
      maxWidth: {
        xsm: "18rem",
        xxsm: "14rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    // ...
    pointerEvents: false,
  },
};
