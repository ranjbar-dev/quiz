const colors = require("./theme/colors.js");
const size = require("./theme/size.js");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['"IranSans"'],
    },
    extend: {
      colors: {
        ...colors,
      },
      spacing: {
        ...size.spacing,
      },
      borderRadius: {
        ...size.borderRadius,
      },
      margin: {
        ...size.margin,
      },
      fontWeight: {
        ...size.fontWeight,
      },
      fontSize: {
        ...size.fontSize,
      },
      gap: {
        ...size.gap,
      },
    },
  },
  plugins: [],
};
