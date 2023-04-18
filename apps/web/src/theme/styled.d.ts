import "styled-components";
import { Theme } from "theme";

declare module "styled-components" {
  // This is necessary to let styled-components know the theme properties
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
