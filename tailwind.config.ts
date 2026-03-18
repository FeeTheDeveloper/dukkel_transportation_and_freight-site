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
        ink: "#0E243B"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(18, 58, 99, 0.16)",
        glow: "0 0 60px rgba(247, 147, 30, 0.28)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #123A63 0%, #1F5A8C 55%, #6FA3C8 100%)",
        "panel-gradient": "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(239,245,251,0.96) 100%)"
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "sans-serif"],
        display: ["var(--font-barlow)", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.2", transform: "scaleX(0.9)" },
          "50%": { opacity: "0.9", transform: "scaleX(1.05)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseLine: "pulseLine 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

