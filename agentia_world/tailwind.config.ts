import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient1": "linear-gradient(to right, #a855f7, #6366f1, #a855f7)",
        "gradient2": "linear-gradient(to right, #a855f7, #6366f1)",
      },
      colors: {
        "primary": "#a855f7",
      }
    },
  },
  plugins: [],
};
export default config;
