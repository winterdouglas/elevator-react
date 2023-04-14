import App from "./App";
import { Providers } from "./contexts/Providers";

export const AppProviders = () => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};
