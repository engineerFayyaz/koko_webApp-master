module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f1f5",
          500: "#a9a9aa",
          900: "#15161c",
          "900_02": "#1d1d1d",
          "900_01": "#121212",
        },
        black: { "900_a2": "#000000a2", "900_3f": "#0000003f" },
        blue_gray: { 100: "#d9d9d9" },
        white: { A700_90: "#ffffff90", A700_75: "#ffffff75", A700: "#ffffff" },
        amber: { A200: "#f1c644" },
        purple: { A100_7f: "#d883ff7f", A100: "#d883ff" },
        red: { A400: "#f41b3b" },
      },
      fontFamily: {
        opensans: "Open Sans",
        nunitosans: "Nunito Sans",
        poppins: "Poppins",
        inter: "Inter",
        roboto: "Roboto",
        catamaran: "Catamaran",
      },
      boxShadow: {
        bs1: "0px 12px  32px 0px #d883ff7f",
        bs: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
