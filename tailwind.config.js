/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5F7ADB",
        secondary: "#A2B2EE",
        dark: "#2E3239",
        darker: "#26292B",
      },
      fontFamily: {
        "montserrat-alternates": ["var(--font-montserrat-alternates)", "serif"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("daisyui")],
};
