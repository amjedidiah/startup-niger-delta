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
      },
      colors: {
        gray: { 85: "#d9d9d9" },
        "gable-green": "#153230",
        tiber: "#184341",
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
