import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

function MyApp({ Component, pageProps }: AppProps) {

  // Rainbow setup
  const { chains, provider } = configureChains(defaultChains, [
    publicProvider(),
  ])

  const { connectors } = getDefaultWallets({
    appName: 'Floor Report',
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        appInfo={{
          appName: 'Floor Report',
          learnMoreUrl: 'https://floor.report/about',
        }}
      >
        <div>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
