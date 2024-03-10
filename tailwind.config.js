/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "main-text": "var(--main-text)",
        "main-1": "var(--main-1)",
        "main-2": "var(--main-2)",
        "main-3": "var(--main-3)",
        "main-4": "var(--main-4)",
        "main-5": "var(--main-5)",
        "main-6": "var(--main-6)",

        blue: "#5383e8",
        "blue-1": "var(--blue-1)",
        "blue-2": "var(--blue-2)",

        red: "#e84057",
        "red-1": "var(--red-1)",
        "red-2": "var(--red-2)",

        mvp: "#EB9C00",
        ace: "#7D59EA",

        orange: "var(--orange)",
        teal: "var(--teal)",

        bronze: "var(--bronze)",
        silver: "var(--silver)",
        gold: "#EB9C00",
        platinum: "#00BBA3",
        emerald: "#00AE0A",
        diamond: "#0093FF",
        master: "#E537A2",
        grandmaster: "#c0241c",
        challenger: "#00B8ED",

        //

        "red-500": "#E84057",

        "blue-500": "#5383E8",

        "gray-0": "#FFF",
        "gray-50": "#F7F7F9",
        "gray-100": "#ebeef1",
        "gray-200": "#C3CBD1",
        "gray-300": "#9AA4AF",
        "gray-400": "#758592",

        "gray-600": "#9E9EB1",
        "gray-700": "#7B7A8E",
        "gray-800": "#515163",
        "gray-900": "#1C1C1F",
        "gray-950": "#282830",
        "gray-1000": "#31313C",

        // Gray
        "dg-0": "#31313C",
        "dg-100": "#282830",
        "dg-200": "#1C1C1F",
        "dg-300": "#515163",
        "dg-400": "#7B7A8E",
        "dg-500": "#9E9EB1",
        // "dg-600": "#9E9EB1",
        // "dg-700": "#B7B7C9",
        // "dg-800": "#B7B7C9",
        // "dg-900": "#FFF",

        // Blue
        "db-100": "#28344E",
        "db-200": "#2F436E",
        "db-300": "#2F436E",
        "db-400": "#4171D6",
        "db-500": "#5383E8",
        // "db-600": "#5383E8",
        // "db-700": "#5383E8",
        // "db-800": "#81ACFF",
        // "db-900": "#81ACFF",

        // Red
        "dr-100": "#59343B",
        "dr-200": "#703C47",
        "dr-300": "#703C47",
        "dr-400": "#D31A45",
        "dr-500": "#E84057",
        // "dr-600": "#E84057",
        // "dr-700": "#E84057",
        // "dr-800": "#FF6C81",
        // "dr-900": "#FF6C81",

        // Gray
        "lg-0": "#FFF",
        "lg-100": "#F7F7F9",
        "lg-200": "#ebeef1",
        "lg-300": "#C3CBD1",
        "lg-400": "#9AA4AF",
        "lg-500": "#758592",
        // "lg-600": "#57646F",
        // "lg-700": "#44515C",
        // "lg-800": "#34414D",
        // "lg-900": "#202D37",

        // Blue
        "lb-100": "#ECF2FF",
        "lb-200": "#D5E3FF",
        "lb-300": "#B3CDFF",
        "lb-400": "#81ACFF",
        "lb-500": "#5383E8",
        // "lb-600": "#4171D6",
        // "lb-700": "#2F5EC0",
        // "lb-800": "#2F436E",
        // "lb-900": "#28344E",

        // Red
        "lr-100": "#FFF1F3",
        "lr-200": "#FFD8D9",
        "lr-300": "#FFBAC3",
        "lr-400": "#FF6C81",
        "lr-500": "#E84057",
        // "lr-600": "#D31A45",
        // "lr-700": "#B61337",
        // "lr-800": "#703C47",
        // "lr-900": "#59343B",

        // Orange
        do: "#FF8200",
        lo: "#F06F00",

        // Teal
        dt: "#00BBA3",
        lt: "#00A399",
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
