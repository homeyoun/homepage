import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13,minmax(0,1fr))",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        fadeOut: "fadeOut 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { visibility: "hidden", opacity: "0" },
          "80%": { visibility: "visible", opacity: "0.8" },
          "100%": { visibility: "visible", opacity: "1" },
        },
        fadeOut: {
          "0%": { visibility: "visible", opacity: "1" },
          "80%": { visibility: "visible", opacity: "0.5" },
          "100%": { visibility: "hidden", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
