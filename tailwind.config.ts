import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#123A63",
        deepBlue: "#1F5A8C",
        lightBlue: "#6FA3C8",
        accent: "#F7931E",
        surface: "#EFF5FB",
        ink: "#0E243B",
        night: "#060F1C",
        midnight: "#0B1B30",
        steel: "#A9BED3"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(18, 58, 99, 0.16)",
        glow: "0 0 60px rgba(247, 147, 30, 0.28)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #123A63 0%, #1F5A8C 55%, #6FA3C8 100%)",
        "night-gradient": "linear-gradient(180deg, #060F1C 0%, #0B1B30 100%)",
        "scrim-left": "linear-gradient(90deg, rgba(6,15,28,0.94) 0%, rgba(6,15,28,0.72) 42%, rgba(6,15,28,0.12) 100%)",
        "scrim-bottom": "linear-gradient(0deg, rgba(6,15,28,0.96) 0%, rgba(6,15,28,0.55) 45%, rgba(6,15,28,0) 100%)"
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "sans-serif"],
        display: ["var(--font-barlow)", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "var(--font-barlow)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
