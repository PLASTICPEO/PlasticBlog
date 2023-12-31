/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        Roboto: ["Roboto", "sans-serif"],
        fontSans: ["Open Sans, sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
