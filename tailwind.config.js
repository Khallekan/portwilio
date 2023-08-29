const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
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
        orangeTheme: "#FF7A00",
        greenTheme: "#00BA7C",
        textDark: "#0F1419",
        darkModeBorder: "#2F3336",
        lightHover: `#D4ECFC`,
        linkedIn: `#0A66C2`,
        html5: `#E96228`,
        css3: `#2862E9`,
        sass: `#C76494`,
        javascript: `#EFD81D`,
        react: `#61DAFB`,
        tailwind: `#46ABB3`,
        bootstrap: `#553D7B`,
        lightGray: `#B9CAD3`,
        lightBorder: `#EFF3F4`,
        dimBorder: `#38444D`,
        "ts-color": `#3177C7`,
        "redux-color": `#764abc`,
        "node-color": `#76B060`,
        "express-js": `#EEEEEE`,
        "mongo-db": `#033431`,
        "nest-color": "#E0234E",
        "postgres-color": "#31648C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
