/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32F2F", // Medical Red
          dark: "#B71C1C",
          light: "#EF5350",
        },
        secondary: {
          DEFAULT: "#1e3a8a", // Navy Blue
          dark: "#172554",    // Deep Navy
          light: "#3b82f6",   // Brighter Navy/Blue
        },
        accent: {
          DEFAULT: "#F5F5F5", // Soft background grey
          dark: "#E0E0E0",
          light: "#FAFAFA",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'system-ui'],
        heading: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
