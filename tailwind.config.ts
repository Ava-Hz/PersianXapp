import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textGray: "#71767b",
        lighterGray: "#e7e9ea",
        borderGray: "#2f3336",
        inputGray: "#202327",
        iconBlue: "#1d9bf0",
        iconGreen: "#00ba7c",
        iconPinck: "#f91880"
      },
      screens: {
        xsm: "520px",
        sm: "640px",
        md: "725px",
        lg: "1024px",
        xl: "1120px",
        xxl: "1300px"
      }
    },
  },
  plugins: [],
} satisfies Config;
