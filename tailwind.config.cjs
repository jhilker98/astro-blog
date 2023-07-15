/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    gridTemplateAreas: {
      mobile: [
        "header header header",
        "main main main",
        "footer footer footer",
      ],
      desktop: [
        "sidebar header header",
        "sidebar main main",
        "sidebar footer footer",
      ],
    },
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
      },
      gridTemplateColumns: {
        layout: "0.7fr 2.3fr 1fr",
      },
      gridTemplateRows: {
        layout: "0.2fr 2.6fr 0.2fr",
      },
      colors: {
        branding: {
          black: "#1e1e1e",
          gray: {
            50: "#f8f9f8",
            100: "#e4e5e7",
            200: "#dddae1",
            300: "#bab7c0",
            400: "#93909c",
            500: "#776f7a",
            600: "#61545e",
            700: "#4b3f48",
            800: "#342c33",
            900: "#211c21",
            alt: {
              DEFAULT: "#d1d3d7",
              50: "#f8f9f8",
              100: "#eeeff1",
              200: "#d1d3d7",
              300: "#b8b8c3",
              400: "#8f909f",
              500: "#736f7e",
              600: "#5e5462",
              700: "#48404b",
              800: "#322c34",
              900: "#1f1c22",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/typography"),
  ],
};
