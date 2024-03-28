import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        gray: { 66: "A8A8A8", 85: "#d9d9d9" },
        "gable-green": "#153230",
        tiber: "#184341",
        "dark-red": "#252525",
        "white-smoke": "#f3f3f3",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      center: true,
    },
  },
  plugins: [],
};
export default config;
