/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing dark backgrounds
        "dark-bg1": "#292f3b",
        "dark-bg2": "#1f232b",
        "dark-bg3": "#1a1f26",
        "dark-bg5": "#0a1124",
        "dark-bg4": "#060c18",

        "blue-light": "#151e36",

        // New purple accents
        "purple-light": "#9d4edd",
        "purple-medium": "#7b2cbf",
        "purple-dark": "#5a189a",

        // Tab-specific colors
        "tab-bg": "#0D1321",
        "tab-inactive": "#4A5568",
        "tab-active": "#9d4edd",

        // Content colors
        "content-text": "#E2E8F0",
        "content-subtext": "#A0AEC0",
        "content-accent": "#7b2cbf",
      },
    },
  },
  plugins: [],
};
