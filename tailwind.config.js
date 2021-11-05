module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        extraLightViolet: "#f4edf5",
        lightGreen: "#4a5e47",
        darkGreen: "#555e47",
        lightViolet: "#5c475e",
        darkViolet: "#50475e",
      },
      fontFamily: {
        JosefinSans: ['"Josefin Sans"', "ui-sans-serif"],
        Montserrat: ["Montserrat", "ui-sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
