import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // From the Topology Render (Research Page)
        scan: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(400px)" },
        },
        "pulse-fast": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        // From the Orbital Command Hero
        "scan-vertical": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
      animation: {
        // Topology Animations
        scan: "scan 4s ease-in-out infinite",
        "pulse-fast": "pulse-fast 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",

        // Hero Animations
        "scan-vertical": "scan-vertical 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse-slower": "spin 30s linear reverse infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
