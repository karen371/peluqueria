/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        textPrimary: 'var(--text-color-primary)',
        textSecondary: 'var(--text-color-secondary)',
        textDark: 'var(--text-color-tertiary)',
        bgPrimary: 'var(--bg-color-primary)',
        bgSecondary: 'var(--bg-color-secondary)',
        bgLight: 'var(--bg-color-tertiary)',
        complementary: 'var(--complementary-color)',
        complementaryHover: 'var(--complementary-color-hover)',      // Add more custom colors as needed
      }
    },
  },
  plugins: [],
}