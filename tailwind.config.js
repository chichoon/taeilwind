/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BABC",
        secondary: "#292D39",
        white: "#ffffff",
        black: "#000000",
        black_transparent: "#202026d9",
        text: {
          light: "#A9A9A9",
          normal: "#666666",
          dark: "#2c2c34",
        },
        tuteur: "#E9BF0F",
        lee: "#BB4240",
      },
    },
  },
  plugins: [],
};
