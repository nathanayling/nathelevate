/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#05070D",
        hero: "#071423",
        panel: "#0B1426",
        panel2: "#0A1220",
        line: "rgba(255,255,255,0.06)",
        accent: "#FCC822",
        text: "#EAF0FF",
        muted: "rgba(234,240,255,0.62)",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.55)",
        lift: "0 18px 60px rgba(0,0,0,0.70)",
      },
      borderRadius: {
        brand: "20px",
      },
    },
  },
  plugins: [],
};