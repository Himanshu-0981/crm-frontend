/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_blue: "#024291",
      },
      screens: {
        xxs: "300px",
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "w-1200": "1200px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        "open-sans": ["Open Sans", "sans"],
      },
      base: {
        // setting up the base font for the entire web page
        font: ["Montserrat", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
