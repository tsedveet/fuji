module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "'Oswald', sans-serif",
        fira: "'Fira Code', monospace",
        cairo: "'Cairo', sans-serif",
        abel: "'Abel', sans-serif",
      },
      height: {
        128: "32rem",
        132: "36rem",
      },
    },
  },
  plugins: [],
};
