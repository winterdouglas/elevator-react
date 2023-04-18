import { createContext } from "react";
import { lightTheme } from "../../theme/lightTheme";
import { darkTheme } from "../../theme/darkTheme";

export type ThemeContextType = typeof lightTheme | typeof darkTheme;

export const ThemeContext = createContext<ThemeContextType | null>(null);
