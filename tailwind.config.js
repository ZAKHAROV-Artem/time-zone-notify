/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "crystal-sky": "#f2f5ff",
        "deep-iris": "#653cf6",
        "lavender-whisper": "#edecfe",
        "midnight-blue": "#2e3a59",
        "pale-sky": "#e5eafc",
        "powder-blue": "#bfc8e8",
        "royal-violet": "#5e3ef7",
        "slate-grey": "#434552",
        "soft-periwinkle": "#d8def3",
        "twilight-shadow": "#242736",
        "urban-mist": "#a1a1a6",
        white: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins-Regular"],
      },
    },
  },
};
