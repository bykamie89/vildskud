/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      vilskud_red: "#ff0000",
      baggrund: "#FFe9e9",
      text_black: "#231e1e",
      blue: "#1400ff",
      kurves: "#ff00ff",
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    extend: {
      screens: {
        xxs: "374px",
        xs: "540px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1423px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
};
