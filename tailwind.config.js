/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",

      md: "768px",

      lg: "1100px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      transform: {
        0: "translate(0)",
        "-20": "translateY(-20px)",
      },
      backgroundImage: { "hero-background": "url('/src/assets/homePage.jpg')" },
      colors: {
        primary: "#000937",
        secondray: "#50BCFC",
        teritary: "#3555FC",
        "white-100": "#FAFAFA",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};
