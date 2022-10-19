/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: "#7046E8",
        whiteColor: "#ffffff",
        darkColor: "#202020",
        silverColor: "#989898",
        gray: "#D9D9D9",
        green: "#6FCF97",
        lightSilver: "#F7F7F7",
      },
      fontFamily: {
        mainFamily: "Gilroy",
        secondFamily: "Inter"
      },
      width: {
        card: "47.8%",
        ad: "100%"
      }
    },
  },
  plugins: [],
  content: [
    './src/**/*.html',
  ],
}
