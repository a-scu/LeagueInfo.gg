/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      scale: {
        115: "1.15",
      },

      screens: {
        300: "300px",
        330: "330px",
        340: "340px",
        350: "350px",
        360: "360px",
        370: "370px",
        380: "380px",
        390: "390px",
        400: "400px",
        410: "410px",
        450: "450px",
        440: "440px",
        500: "500px",
        550: "550px",
        800: "800px",
        1126: "1126px",
      },

      colors: {
        "gray-1": "#31313c",
        "gray-2": "#282830",
        "gray-3": "#1c1c1f",
        "gray-4": "#515163",
        "gray-5": "#7b7a8e",
        "gray-6": "#9e9eb1",

        blue: "#5383e8",
        "blue-1": "#28344e",
        "blue-2": "#2f436e",
        "blue-3": "#ECF2FF",
        "blue-4": "#D5E3FF",

        red: "#e84057",
        "red-1": "#59343b",
        "red-2": "#703c47",

        mvp: "#EB9C00",
        ace: "#7D59EA",

        orange: "#f06f00",
        teal: "#00bba3",

        bronze: "#7c6750",
        silver: "#515163",
        gold: "#EB9C00",
        platinum: "#00BBA3",
        emerald: "#00AE0A",
        diamond: "#0093FF",
        master: "#E537A2",
        grandmaster: "#c0241c",
        challenger: "#00B8ED",

        "db-100": "#28344E",
        "db-200": "#2F436E",
        "db-300": "#2F436E",
        "db-400": "#4171D6",
        "db-500": "#5383E8",
        "dr-100": "#59343B",
        "dr-200": "#703C47",
        "dr-300": "#703C47",
        "dr-400": "#D31A45",
        "dr-500": "#E84057",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-2xs": {
          fontSize: "11px",
          lineHeight: "14px",
        },
        ".text-3xs": {
          fontSize: "10px",
          lineHeight: "10px",
        },
        ".text-4xs": {
          fontSize: "9px",
          lineHeight: "9px",
        },
        ".min-size-1": {
          minWidth: "0.25rem",
          minHeight: "0.25rem",
        },
        ".min-size-2": {
          minWidth: "0.5rem",
          minHeight: "0.5rem",
        },
        ".min-size-3": {
          minWidth: "0.75rem",
          minHeight: "0.75rem",
        },
        ".min-size-3-5": {
          minWidth: "0.875rem",
          minHeight: "0.875rem",
        },
        ".min-size-4": {
          minWidth: "1rem",
          minHeight: "1rem",
        },
        ".min-size-4-5": {
          minWidth: "1.125rem",
          minHeight: "1.125rem",
        },
        ".min-size-5": {
          minWidth: "1.25rem",
          minHeight: "1.25rem",
        },
        ".min-size-5-5": {
          minWidth: "1.375rem",
          minHeight: "1.375rem",
        },
        ".min-size-6": {
          minWidth: "1.5rem",
          minHeight: "1.5rem",
        },
        ".size-6-5": {
          maxWidth: "1.625rem",
          maxHeight: "1.625rem",
        },
        ".min-size-7": {
          minWidth: "1.75rem",
          minHeight: "1.75rem",
        },
        ".min-size-7-5": {
          minWidth: "1.875rem",
          minHeight: "1.875rem",
        },
        ".min-size-8": {
          minWidth: "2rem",
          minHeight: "2rem",
        },
        ".size-8-5": {
          minWidth: "2.125rem",
          minHeight: "2.125rem",
        },
        ".min-size-9": {
          minWidth: "2.25rem",
          minHeight: "2.25rem",
        },
        ".min-size-9-5": {
          minWidth: "2.375rem",
          minHeight: "2.375rem",
        },
        ".min-size-10": {
          minWidth: "2.5rem",
          minHeight: "2.5rem",
        },
        ".min-size-10-5": {
          minWidth: "2.625rem",
          minHeight: "2.625rem",
        },
        ".min-size-11-5": {
          minWidth: "2.875rem",
          minHeight: "2.875rem",
        },
        ".min-size-12-5": {
          minWidth: "3.125rem",
          minHeight: "3.125rem",
        },
        ".size-3-5": {
          width: "0.875rem",
          height: "0.875rem",
        },
        ".size-4-5": {
          width: "1.125rem",
          height: "1.125rem",
        },
        ".size-5-5": {
          width: "1.375rem",
          height: "1.375rem",
        },
        ".size-6-5": {
          width: "1.625rem",
          height: "1.625rem",
        },
        ".size-7-5": {
          width: "1.875rem",
          height: "1.875rem",
        },
        ".size-8-5": {
          width: "2.125rem",
          height: "2.125rem",
        },
        ".size-9-5": {
          width: "2.375rem",
          height: "2.375rem",
        },
        ".size-10-5": {
          width: "2.625rem",
          height: "2.625rem",
        },
        ".size-11-5": {
          width: "2.875rem",
          height: "2.875rem",
        },
        ".size-12-5": {
          width: "3.125rem",
          height: "3.125rem",
        },
        ".size-13-5": {
          width: "3.375rem",
          height: "3.375rem",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
