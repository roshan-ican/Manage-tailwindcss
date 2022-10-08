module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "#f6866a",
        brightRedSupLight: "	#fdece7",
        darkBlue: "	#242d52",
        darkGreyishBlue: "#9095a7",
        veryDarkBlue: "#1d1e25",
        veryPaleRed: "#ffefeb",
        veryLightGrey: "	#fafafa",
        brightYellow: "#FFBA0D"
      },
    },
  },
  plugins: [],
};
