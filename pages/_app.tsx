import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/globals.css";

const activeChainId = ChainId.Goerli;

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <Web3sdksProvider
      desiredChainId={activeChainId}
      authConfig={{
        authUrl: "/api/web3sdksauth",
        domain: "example.com",
        loginRedirect: "/",
      }}
    >
      <SessionProvider session={session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </Web3sdksProvider>
  );
};

export default MyApp;
