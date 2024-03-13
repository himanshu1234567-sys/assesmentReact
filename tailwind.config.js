module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 300: "#90a4ae", "900_85": "#26323885", "50_01": "#e7f1f2" },
        gray: { 700: "#5e5e5e", 900: "#222222", "700_01": "#606060" },
        cyan: { A400: "#00d5f8" },
        white: { A700_01: "#ffffff" },
        orange: { A700: "#ff6400" },
        indigo: { A400: "#3d5edd" },
        black: { 900: "#000000" },
        red_A700: "#d0011b",
      },
      boxShadow: {
        xs: "0px 3px  20px 0px #00000019",
        sm: "0px 4px  4px 0px #0000003f",
        md: "0px 0px  10px 0px #00000019",
        lg: "0px 7px  16px 0px #00000019",
      },
      fontFamily: { mulish: "Mulish", rubikroman: "RubikRoman", rubik: "Rubik" },
      opacity: { 0.48: 0.48 },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
