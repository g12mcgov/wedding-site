module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "square-peg": ["Square Peg", "cursive"],
        "architects-daughter": ["Architects Daughter", "cursive"],
        caveat: ["Caveat", "cursive"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        "amatic-sc": ["Amatic SC", "cursive"],
      },
      animation: {
        pulse: "pulse 1000ms ease-in-out",
      },
    },
  },
  plugins: [],
};
