/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        combon: ["Combon", "sans-serif"],
        DINRound: ["DINRoundPro"],
        Tiempos: ["Tiempos Headline"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 12px 28px 0px #0000004F",
      },
      screens: {
        mobile: "400px",
      },
    },
  },
  plugins: [],
};
