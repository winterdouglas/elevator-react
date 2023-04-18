import { useColorScheme } from "react-native";
import { ThemeProvider } from "theme";
import App from "./App";

export const AppProviders = () => {
  const theme = useColorScheme();

  return (
    <ThemeProvider theme={theme || "light"}>
      <App />
    </ThemeProvider>
  );
};
