/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "#FFFFFF",
          primary: "#B41A22",
          secondary: "#F7E7CE",
        },
      },
    },
    plugins: [],
  };