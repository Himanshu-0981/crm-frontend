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
    },
  },
  plugins: [],
};
