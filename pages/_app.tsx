import {AppProps} from "next/app";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {fonts} from "../components/theme/Fonts";
import {RecoilRoot} from "recoil";

const theme = extendTheme({fonts})

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
