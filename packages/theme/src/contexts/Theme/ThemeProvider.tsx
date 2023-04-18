import { PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext";
import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";

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
