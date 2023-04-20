import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "theme";
import { GlobalStyle } from "./GlobalStyle";
import { useColorScheme } from "./hooks/useColorScheme";
import { Building } from "./components/Building";
import { useAnimationAccessibility } from "./hooks/useAnimationAccessibility";

export const App = () => {
  useAnimationAccessibility();
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Building floorCount={6} />
    </ThemeProvider>
  );
};
