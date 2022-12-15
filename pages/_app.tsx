import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "../components/theme/Fonts";

const theme = extendTheme({ fonts })

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;