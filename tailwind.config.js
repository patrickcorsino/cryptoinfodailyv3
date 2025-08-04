module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        degen: "#00ff99",
        darkBg: "#0d1521",
        card: "#232531",
        cardHover: "#282a36",
        softBorder: "#2c2c2c",
        marketData: "#7788bb",
        up: "#24f57a",
        down: "#ff3366",
      },
      boxShadow: {
        soft: "0 4px 32px 0 rgba(0,0,0,0.30)",
        card: "0 2px 18px 0 #191c2180",
        degen: "0 0 25px 5px #00ff9960",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      transitionProperty: {
        glow: "box-shadow, background-color, color",
      },
      borderRadius: {
        '2xl': '1.25rem',
        xl: "1rem",
      }
    },
  },
  plugins: [],
};

