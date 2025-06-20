module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#d4af37",
          foreground: "#1c1c1c",
          light: "#e6c55a",
          dark: "#b68341",
        },
        secondary: {
          background: "#523c1e",
          foreground: "#faf7f0",
          light: "#6b4f28",
          dark: "#3d2d17",
        },
        accent: {
          DEFAULT: "#0b3c49",
          foreground: "#ffffff",
          light: "#2d5a6b",
          dark: "#082a33",
        },
        neutral: {
          background: "#faf9f6",
          foreground: "#2b2024",
          light: "#faf7f0",
          dark: "#2b2024",
        },
        border: {
          primary: "#b68341",
          secondary: "#0b3c49",
          light: "#e0e0e0",
          dark: "#666666",
        },
      },
      fontFamily: {
        'old-standard': ['Old Standard TT', 'serif'],
        'heebo': ['Heebo', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};