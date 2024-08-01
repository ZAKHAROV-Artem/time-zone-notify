/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "lavender-whisper": "#edecfe",
        "soft-periwinkle": "#d8def3",
        "midnight-blue": "#2e3a59",
        "royal-violet": "#5e3ef7",
        "crystal-sky": "#f2f5ff",
        "powder-blue": "#bfc8e8",
        "slate-grey": "#434552",
        "urban-mist": "#a1a1a6",
        "pure-snow": "#ffffff",
        "deep-iris": "#653cf6",
        "pale-sky": "#e5eafc",
      },
    },
  },
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  plugins: [],
};
