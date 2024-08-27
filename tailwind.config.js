/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#3B82F6",
        background: "#F3F4F6",
        cardBg: "#ffffff",
        textPrimary: "#1F2937",
        textSecondary: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
        customLg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "banner-pattern": "url('/src/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
};
