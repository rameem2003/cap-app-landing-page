/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerBG: "url(/bannerbg.png)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        darker: ["Darker Grotesque", "sans-serif"],
        code: ["Codystar", "sans-serif"],
      },

      maxWidth: {
        container: "1143px",
      },
      colors: {
        main: "#FF6231",
        textoff: "#888888",
        fadeText: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
