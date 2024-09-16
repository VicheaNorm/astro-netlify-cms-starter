/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
    variants: {
      aspectRatio: ["responsive", "hover"],
    },
    colors: {
      primary: "#16aba0",
      wrc: "#002C4D",
    },
  },
  plugins: [require("flowbite/plugin")],
};
