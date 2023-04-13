/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        bccTheme: {
          primary: "#194091",
          secondary: "#1e2a4d",
          accent: "#75b847",
          white: "fff",
          neutral: "#fff",
          "base-100": "#fff",
          info: "#385cbc",
          success: "#3ABA90",
          warning: "#F3C178",
          error: "#FE5E41",
        },
      },
    ],
  },
};
