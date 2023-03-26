/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      brand: "#FF0044",
      secondary: "#330523",
      info: "#00FFFF#00FFFF",
      white: "#FFFFFF",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
