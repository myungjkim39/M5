/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#0D4F77",
      secondary: "#F08222",
      PBGrey: "#6C757D"

    }),
    fontFamily: {
      body: ["Inter"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
