import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: "#070a0a",
      white: "#FFFFFF",
      primary: {
        green: "#4a6367",
      },
      secondary: {
        green: "#1e2829",
      },
      light: {
        green: "#DDDEE2",
        grey: "#c7c8cb",
      },
      dark: {
        grey: "#2A2A2C",
      },
      green: {
        100: "#dee4da",
        200: "#c7d1c7",
        300: "#b1beb5",
        400: "#9baba4",
      },
    }),

    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", ...defaultTheme.fontFamily.sans],
        title: ["var(--font-pacifico)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "linear-gradient(180deg, #dee4da 20%, #c7d1c7, #b1beb5, #9baba4, #859994, #708784, #5d7575, #4a6367)",
        light:
          "linear-gradient(180deg, #dee4da, #dbe1d7, #d7dfd4, #d4dcd2, #d1d9cf, #ced6cc, #cad4ca, #c7d1c7)",
        dark: "linear-gradient(180deg, #2C2C2E 60%,#1F1F1F)",
        shadow: "linear-gradient(180deg, #2a2a2c 20%, #070a0a)",
        harsh: "linear-gradient(180deg, #1e2829 60%, #DDDEE2 0)",
        hero: "url('/images/bouquet.jpg')",
        test: "url('/images/gradient.svg')",
        intro: "url('/images/whitepeonies.jpg')",
        flowersRight: "url('/images/peonies.jpg')",
        flowersLeft: "url('/images/peonies.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
