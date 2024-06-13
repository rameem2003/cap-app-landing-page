/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerBG: "url(/bannerbg.png)",
        PresentationBG: "url(/presentation.png)",
        TrailBG: "url(/trial.png)",
        CTABG: "url(/CTA.png)",
        footerBG: "url(/footer.png)",
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
