/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#2190FF",
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        purple: "#8C7CFF",
        pink: "#ED5FBD",
        violet: "#F16565",
        orange: "#FF964B",
        deepBlue:"#020219",
        green:"#00A859",
        blue:"#003399",
        graph:"#00143B",
      },
    }
  },
  plugins: [],
}
