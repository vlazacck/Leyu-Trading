/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#063B2E",
          light: "#0B5D43",
        },
        gold: {
          DEFAULT: "#C98A3A",
          light: "#E0A75E",
        },
        sand: "#D6B98C",
        cream: "#F7F3EA",
        ink: "#1A1A1A",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
    },
  },
  plugins: [],
};
