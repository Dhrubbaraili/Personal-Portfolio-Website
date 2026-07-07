import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(76,175,80,.16), 0 30px 80px rgba(76,175,80,.18)",
      },
      backgroundImage: {
        "mesh-green":
          "radial-gradient(circle at top left, rgba(102,187,106,.25), transparent 30%), radial-gradient(circle at top right, rgba(76,175,80,.16), transparent 26%), linear-gradient(135deg, rgba(232,245,233,.9), rgba(248,255,248,.96))",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
        glow: "glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
