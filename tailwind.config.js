/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        MAIN: "#1f1f1f",
        PRIMARY: "#296dff",
        NEUTRAL: "#80a8ff",
        GRAY: "#4d4d4d",
      },
      outlineColor: {
        MAIN: "#4d4d4d",
      },
      textColor: {
        NEUTRAL: "#ebebeb",
        MAIN: "#80a8ff",
        PRIMARY: "#4d4d4d",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
