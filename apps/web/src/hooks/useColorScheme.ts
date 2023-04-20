import { useMediaQuery } from "./useMediaQuery";

type ColorScheme = "light" | "dark";

export const useColorScheme = (): ColorScheme => {
  const matchesLight = useMediaQuery("(prefers-color-scheme: light)");

  return matchesLight ? "light" : "dark";
};
