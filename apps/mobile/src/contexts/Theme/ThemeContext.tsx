import { createContext } from "react";
import { useThemeData } from "./useThemeData";

export type ThemeContextType = ReturnType<typeof useThemeData>;

export const ThemeContext = createContext<ThemeContextType | null>(null);
