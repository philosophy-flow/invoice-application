module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
      },
    },
    fontFamily: {
      sans: "Spartan, sans-serif",
    },
    fontSize: {
      xs: [".6875rem", { lineHeight: "1.636", letterSpacing: "-.0144rem" }],
      sm: [".75rem", { lineHeight: "1.25", letterSpacing: "-.0156rem" }],
      md: ["1rem", { lineHeight: "1.5", letterSpacing: "-.05rem" }],
      lg: ["1.25rem", { lineHeight: "1.1", letterSpacing: "-.0394rem" }],
      xl: ["2rem", { lineHeight: "1.125", letterSpacing: "-.0625rem" }],
    },
    colors: {
      purple: "#7C5DFA",
      lightPurple: "#9277FF",
      red: "#EC5757",
      lightRed: "#FF9797",
      darkOne: "#252945",
      darkTwo: "#1E2139",
      darkThree: "#141625",
      darkFour: "#0C0E16",
      lightOne: "#F8F8FB",
      lightTwo: "#DFE3FA",
      lightThree: "#7E88C3",
      lightFour: "#888EB0",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
