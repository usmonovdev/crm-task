/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        extraBold: "poppins-extrabold, sans-serif",
        semibold: "poppins-semibold, sans-serif",
        regular: "poppins-regular, sans-serif",
        medium: "poppins-medium, sans-serif",
        thin: "poppins-thin, sans-serif",
      },
    },
  },
  plugins: [],
}

