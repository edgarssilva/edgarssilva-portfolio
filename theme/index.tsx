import {
  ChakraProvider,
  extendTheme,
  ThemeOverride,
  type ThemeConfig,
} from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";

import Fonts, { fonts } from "./fonts";

export const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const overrides: ThemeOverride = {
  fonts,
  config,
};

const theme = extendTheme(overrides);

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ThemeProvider theme={theme}>
        <Fonts />
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
export default Theme;
