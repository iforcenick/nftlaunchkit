import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
} from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'

// Configure chains and create wagmi client
const { provider } = configureChains(
  defaultChains,
  [publicProvider()],
)
const client = createClient({
  connectors: [
    new MetaMaskConnector()
  ],
  provider,
})


type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <WagmiConfig client={client}>
    <div className="w-full px-1 text-gray-700 antialiased bg-slate-100 relative flex flex-col min-h-screen">
      {props.meta}
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  </WagmiConfig>
);

export { Main };
