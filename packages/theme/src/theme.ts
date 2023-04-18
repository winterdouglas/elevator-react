export interface Theme {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  highlight: string;
  separator: string;
}

export const darkTheme: Theme = {
  text: "#edebf0",
  background: "#263236",
  primary: "#ff9921",
  secondary: "#3F4D58",
  tertiary: "#5AAF7C",
  highlight: "#60687B",
  separator: "#fff",
} as const;

export const lightTheme: Theme = {
  text: "#364955",
  background: "#fff",
  primary: "#007BAF",
  secondary: "#E6F4F1",
  tertiary: "#27B881",
  highlight: "#F1FBFF",
  separator: "#000",
} as const;
