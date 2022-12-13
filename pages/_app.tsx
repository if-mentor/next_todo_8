import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import { RecoilRoot } from 'recoil'

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
