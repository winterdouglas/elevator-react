import { useColorScheme } from "react-native";
import { light } from "../../theme/light";
import { dark } from "../../theme/dark";

export const useThemeData = () => {
  const colorScheme = useColorScheme();
  return colorScheme === "light" ? light : dark;
};
