// tailwind.config.js
export const purge = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      "Blue-Sidebar": "#0b1320",
      "Blue-Canvas": "#0d1726",
      "Blue-File": "#172030",
      "Blue-Primary": "#0a677a",
      "Blue-Border": "#07749b",
      "Yellow-Primary": "#f6b600",
      "Purpple-Primary": "#73559e",
      "Red-Primary": "#e8423a",
      "Text-White": "#ffffff",
      "White-Bg": "#f7f7f7",
      "Input-Bg": "#DDE3EE",
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
