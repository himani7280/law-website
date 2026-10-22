import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        ink: "#12060c",
        forest: { 900: "#1e0a14", 800: "#2a0f1c", 700: "#3b1527", 600: "#521d36" },
        gold: { 300: "#f1dcae", 400: "#d9b36c", 500: "#b98a3e", 600: "#8f6a2a" },
        cream: "#f8f1e7",
        pine: { 950: "#12060c", 900: "#1e0a14", 800: "#2a0f1c" },
        navy: { 950: "#12060c", 900: "#1e0a14", 800: "#2a0f1c", 700: "#3b1527" },
      },
      fontFamily: {
        title: ["'Fraunces Variable'", "serif"],
        body: ["'Manrope Variable'", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        shine: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        spinSlow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shine: "shine 4s linear infinite",
        spinSlow: "spinSlow 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
