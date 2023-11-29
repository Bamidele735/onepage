import React from "react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/nav.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styles.css";

import Layout from "../Layout/Layout";
import { Provider } from "react-redux";
import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";
import store from "../redux/store";
import { Toaster } from "react-hot-toast";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "theon",
  projectId: `${process.env.NEXT_PUPLIC_WALLETCONNECT_ID}`,
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
});

function MyApp({
  Component,
  pageProps,
}: //  logo

AppProps) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <Provider store={store}>
      <WagmiConfig config={config}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#7b3fe4",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <SessionProvider session={pageProps.session} refetchInterval={0}>
            <Layout>
              <Component {...pageProps} />
              <Toaster />
            </Layout>
          </SessionProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}

export default MyApp;
