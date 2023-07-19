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
          text: "#091725",
          background: "#f3f7fc",
          primary: "#1e4c7b",
          secondary: "#d1d3d7",
          accent: "#86694b",
        },
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("daisyui"),
  ],
  daisyui: {
    base: false,
    //    styled: false,
    themes: [
      {
        mytheme: {
          primary: "#1e4c7b",
          secondary: "#d1d3d7",
          accent: "#86694b",
          neutral: "#020203",
          "base-100": "#f1f2f3",
          info: "#216dca",
          success: "#287128",
          warning: "#fbbd23",
          error: "#aa2727",
        },
      },
    ],
  },
};
