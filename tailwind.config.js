/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/backgoundHome.png')",
        segubeca: "url('/segubeca.png')",
      },
    },
  },
  plugins: [],
};
