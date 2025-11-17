/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        "small":{max:"1149px"},
        "vsmall":{max:"750px"},
        "vvsmall":{max:"900px"}
      }
    },
  },
  plugins: [],
}

