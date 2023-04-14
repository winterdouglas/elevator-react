import { PropsWithChildren } from "react";
import { ThemeProvider } from "./Theme/ThemeProvider";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
