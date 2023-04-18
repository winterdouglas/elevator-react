import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useColorScheme } from "./hooks/useColorScheme";
import { darkTheme, lightTheme } from "theme";

export const App = () => {
  const colorScheme = useColorScheme();

  console.log(colorScheme);

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <span>Hello!</span>
    </ThemeProvider>
  );
};
