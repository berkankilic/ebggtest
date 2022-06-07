module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      current: "currentColor",
      primary: "#E8BD73",
      "main-bg": "#0e1015",
      dark: {
        0.5: "#13151B",
        1: "#181A20",
        2: "#1F2228",
        3: "#272A30",
        4: "#353940",
      },
      "dark-strong": {
        1: "#0C0E13",
        2: "#07090E",
      },
      tdark: {
        1: "#E2E4E9",
        2: "#999CA3",
        3: "#7E828B",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("react-router-dom")],

  "tailwindCSS.includeLanguages": {
    javascriptreact: "html",
    typescriptreact: "html",
    plaintext: "html",
  },
};
