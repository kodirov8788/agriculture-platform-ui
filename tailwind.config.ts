import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Brand" Colors
        agri: {
          green: "#2F855A",    // Primary
          dark: "#22543D",     // Hover states
          light: "#F0FFF4",    // Backgrounds
          earth: "#C05621",    // Accents/Soil
        },
      },
      fontFamily: {
        // Add fonts in layout.tsx first!
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
      },
      borderRadius: {
        // Enforcing soft, organic shapes
        'card': '1rem', // 16px
        'btn': '9999px', // Full pill shape
      }
    },
  },
  plugins: [],
};
export default config;
