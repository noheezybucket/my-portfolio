/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        border: "var(--border)",
        inverse: "var(--inverse)",
      },
    },
  },
  plugins: [],
};
