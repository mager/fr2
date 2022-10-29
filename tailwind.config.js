/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   tablet: "640px",
    //   laptop: "1024px",
    //   desktop: "1280px",
    // },
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
        serif: ["Coustard", "serif"],
      },
      colors: {
        debug: "#f00",
      },
    },
  },
  plugins: [require("daisyui")],
};
