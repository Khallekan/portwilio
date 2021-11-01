module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dim: "#15202B",
        lightBlue: "#1D9BF0",
        darkBlue: "#0E4D78",
        yellowTheme: "#FFD400",
        pinkTheme: "#F91880",
        purpleTheme: "#7856FF",
        orangeTheme: "FF7A00",
        greenTheme: "00BA7C",
        textDark: "0F1419",
        darkModeBorder: "#2F3336",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
