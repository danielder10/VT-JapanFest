/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      animation: {
        swing: "swing 2s ease-in-out infinite",
        bloom: "bloom 3s infinite",
        fly: "fly 5s linear infinite",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        bloom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        fly: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "100%": { transform: "translateY(30px) translateX(20px)" },
        },
      },
    },
  },
  plugins: [],
};
