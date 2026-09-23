import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F0",
        ink: "#1B2A4A",
        "ink-soft": "#3A4A6B",
        marigold: "#F2B134",
        "marigold-deep": "#D89A1F",
        leaf: "#4C7C59",
        "leaf-soft": "#E7EFE9",
        muted: "#5C6470",
        line: "#E3DDCE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
