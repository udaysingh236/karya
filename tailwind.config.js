/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      portage: {
        50: "hsl(216, 88%, 97%)",
        100: "hsl(218, 81%, 94%)",
        200: "hsl(219, 79%, 89%)",
        300: "hsl(219, 78%, 82%)",
        400: "hsl(225, 74%, 71%)",
        500: "hsl(229, 69%, 67%)",
        600: "hsl(234, 63%, 59%)",
        700: "hsl(235, 48%, 51%)",
        800: "hsl(234, 45%, 41%)",
        900: "hsl(233, 39%, 34%)",
        950: "hsl(236, 39%, 20%)",
      },
      "waikawa-gray": {
        50: "#f2f7fb",
        100: "#e7f0f8",
        200: "#d3e2f2",
        300: "#b9cfe8",
        400: "#9cb6dd",
        500: "#839dd1",
        600: "#6a7fc1",
        700: "#6374ae",
        800: "#4a5989",
        900: "#414e6e",
        950: "#262c40",
      },
      "guardsman-red": {
        50: "#fff0f0",
        100: "#ffdddd",
        200: "#ffc1c1",
        300: "#ff9797",
        400: "#ff5b5b",
        500: "#ff2828",
        600: "#fa0808",
        700: "#c50202",
        800: "#ae0606",
        900: "#8f0d0d",
        950: "#4f0000",
      },
    },
  },
  plugins: [],
};
