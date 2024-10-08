import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4747F3',
        secondary: '#00004D'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      keyframes: {
        rotateGreenBorder: {
          '0%': { borderColor: 'transparent' },
          '25%': { borderColor: 'green' },
          '50%': { borderColor: 'transparent' },
          '75%': { borderColor: 'green' },
          '100%': { borderColor: 'transparent' },
        },
      },
      animation: {
        'rotate-green-border': 'rotateGreenBorder 8s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
