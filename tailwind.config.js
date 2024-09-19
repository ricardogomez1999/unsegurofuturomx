/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/bgHome.webp')",
        gastosM: "url('/GastosMedicosBg.svg')",
      },
      backgroundPosition: {
        "right-4": "center right -10rem",
        "right-5": "bottom -10rem right -4rem",
      },
    },
  },
  plugins: [],
};
