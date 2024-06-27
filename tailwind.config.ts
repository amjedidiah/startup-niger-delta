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
        gray: {
          66: "A8A8A8",
          85: "#d9d9d9",
          100: "#9595A0",
          200: "rgba(195, 195, 215, 0.50)",
        },
        "gable-green": { DEFAULT: "#153230", 400: "rgba(21, 50, 48, 0.4)" },
        tiber: {
          DEFAULT: "#184341",
          100: "#183433",
          200: "#0D726F",
          300: "#3C5A56",
        },
        "dark-red": "#252525",
        "white-smoke": {
          DEFAULT: "#f3f3f3",
          100: "#f9f9f9",
        },
        "shade-of-amber": "#FF7D05",
        "laurel-green": {
          DEFAULT: "#BACFA5",
          100: "#B8CEA2",
          200: "#476864",
          300: "#C6D9B5",
          400: "#E3ECDA",
          500: "rgba(198, 217, 181, 0.50)",
        },
        unknown: {
          100: "#DE5F12",
          200: "#044F5B",
          300: "#78D8D1",
          400: "#172526",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
      center: true,
    },
  },
  plugins: [],
};
export default config;
