import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2a5165",
          secondary: "#83A79B",
          accent: "#6bca8c",
          neutral: "#d1fae5",
          "base-100": "#d1fae5",
          info: "#06b6d4",
          success: "#a3e635",
          warning: "#fde047",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [daisyui],
};
