import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "theme";
import { GlobalStyle } from "./GlobalStyle";
import { useColorScheme } from "./hooks/useColorScheme";
import { Building } from "./components/Building";

export const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Building floorCount={6} />
    </ThemeProvider>
  );
};
