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
    },
  },
  plugins: [],
};
