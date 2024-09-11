/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#E1E8EF",
        100: "#D4DEE7",
        200: "#B7C7D7",
        300: "#99B0C7",
        400: "#7C99B6",
        500: "#5E82A6",
        600: "#4C6B8A",
        700: "#3C546C",
        800: "#2C3D4F",
        900: "#1B2631",
        950: "#141C24",
      },
      accent: {
        50: "#faeded",
        100: "#f0c8c8",
        200: "#e7a3a4",
        300: "#dd7f7f",
        400: "#d35a5b",
        500: "#ca3537",
        600: "#a52c2d",
        700: "#802223",
        800: "#5c1819",
        900: "#370f0f",
        950: "#120505",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
