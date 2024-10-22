/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blue: {
        500: "#0D6EFD",
      },
      red: {
        500: "#DF5951",
      },
      gray: {
        100: "#323434",
        200: "#717f7f",
        300: "#a0a0a0",
        400: "#E4E4E4",
        500: "#f1f5f4",
      },
    },
  },
  plugins: [],
};
