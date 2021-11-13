module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
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
