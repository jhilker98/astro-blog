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
          white: "#fafafa",
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
          blue: {
            50: "#f6f9fa",
            100: "#e3f1fb",
            200: "#c3ddf6",
            300: "#95bce9",
            400: "#6795d7",
            500: "#5871a7",
            600: "#4157b0",
            700: "#33418c",
            800: "#242c64",
            900: "#151b3e",
          },
          navy: {
            DEFAULT: "#445579",
            50: "#f6f9fa",
            100: "#e3f1fb",
            200: "#c3ddf6",
            300: "#95bce9",
            400: "#6795d7",
            500: "#445579",
            600: "#4157b0",
            700: "#33418c",
            800: "#242c64",
            900: "#151b3e",
          },
          royal: {
            DEFAULT: "#0d66bf",
            50: "#f5f9fa",
            100: "#def1fc",
            200: "#b8dff8",
            300: "#87beed",
            400: "#00A1FF",
            500: "#4276d0",
            600: "#0d66bf",
            700: "#2c4399",
            800: "#1f2d6e",
            900: "#121c46",
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
