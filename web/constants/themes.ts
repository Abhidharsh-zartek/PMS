export const THEMES = ["light-contrast", "dark-contrast"];

export interface I_THEME_OPTION {
  value: string;
  label: string;
  type: string;
  icon: {
    border: string;
    color1: string;
    color2: string;
  };
}

export const THEME_OPTIONS: I_THEME_OPTION[] = [
  {
    value: "light-contrast",
    label: "Light mode",
    type: "light",
    icon: {
      border: "#000000",
      color1: "#FFFFFF",
      color2: "#3F76FF",
    },
  },
  {
    value: "dark-contrast",
    label: "Dark mode",
    type: "dark",
    icon: {
      border: "#FFFFFF",
      color1: "#030303",
      color2: "#3A8BE9",
    },
  },
];