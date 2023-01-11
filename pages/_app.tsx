import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "../components/theme/Fonts";
import { RecoilRoot } from "recoil";
import { useAuth } from "../lib/auth";

const theme = extendTheme({ fonts });
type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? <p>Loading...</p> : children;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default MyApp;
