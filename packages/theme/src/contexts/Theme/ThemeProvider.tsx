import { PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../../theme";

type ThemeProviderProps = PropsWithChildren & {
  theme: "light" | "dark";
};

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
