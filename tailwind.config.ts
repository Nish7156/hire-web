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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        pink:{
          DEFAULT:'#FDF7FF'
        },
       border:{
        DEFAULT:'#D9D9D9'
       },
       light:{
        DEFAULT:'#37393F',
        100:'#87888B'
       },
       lightGreen:{
        DEFAULT:'#F3F9FC'
       }
      }
    },
  },
  plugins: [],
};
export default config;
