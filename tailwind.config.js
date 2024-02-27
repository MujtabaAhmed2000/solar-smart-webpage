/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        background: {
          DEFAULT: "#eeefeb",
          hero: "#eeefeb",
        },
        primary: {
          DEFAULT: "#cb484a",
          600: "#dda600",
          100: "#fdf1cc",
        },
        secondary: {
          DEFAULT: "#22262c",
          100: "#EEEFEB",
          200: "#A2A4A4",
          900: "#02182b",
        },
      },
      animation: {
        fadeIn: "fadeIn ease 0.75s",
        delayFadeIn: "delayFadeIn ease 1s",
        moreDelayFadeIn: "moreDelayFadeIn ease 1.25s",
        floatUp: "floatUp ease 1s",
        moreDelayFloatUp: "moreDelayFloatUp ease 1.25s",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        delayFadeIn: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        moreDelayFadeIn: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "75%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        floatUp: {
          "0%": {
            transform: "translate(0px, 50px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        moreDelayFloatUp: {
          "0%": {
            transform: "translate(0px, 25px)",
            opacity: "0",
          },
          "50%": {
            transform: "translate(0px, 25px)",
            opacity: "0",
          },
          "75%": {
            transform: "translate(0px, 25px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
