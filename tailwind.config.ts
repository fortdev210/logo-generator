import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#FFFFFF",
      secondary: "#03030314",
      tertiary: "#F7F7F7",
      quaternary: "#FBFBFB",
      overlay: "#2B2B2B1F",
      accent: "#116DCA",
      "accent-tertiary": "#116DCA0A",
      accent2: "#FFE9FF",
      accent3: "#BA67BA",
      "accent-secondary": "#116DCA1F",
      "accent1-light": "#FEF1FE",
      white: "#FFF",
      black: "#000",
      positive: "#0A7A0A",
      "positive-dark": "#086108",
      "positive-light": "#E6F1E6",
      negative: "#D60000",
      "negative-dark": "#B20000",
      "negative-light": "#FBEAEA",
      warning: "#FFB800",
      "warning-tertiary": "#FFB80014",
      "warning-secondary": "##FFB80066",
      "focus-ring": "#116DCAA3",
      extended: {
        800: "#E30094",
        700: "#C200DD",
        600: "#5D05D7",
        500: "#0B13D0",
        400: "#3EB7D9",
        300: "#6DE5DE",
        200: "#9EF0D4",
      },
    },
    borderColor: {
      DEFAULT: "#2B2B2B14",
      primary: "#2B2B2B14",
      secondary: "#2B2B2B0A",
      "on-elevated": "#2B2B2B1F",
      tertiary: "#999999",
      accent: "#116DCA",
      accent1: "#FCB3FC",
      white: "#FFF",
      black: "#000",
      negative: "#D60000",
      transparent: "transparent",
      inherit: "inherit",
      current: "current",
      "focus-ring": "#116DCAA3",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropFilter: {
        custom: "saturate(180%) blur(20px)",
      },
    },
  },
  plugins: [],
};
export default config;
