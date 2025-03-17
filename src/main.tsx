import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider 
      clientId="d2436e1a79385da12d036db9f90c56e5"
      activeChain="ethereum"
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect()
      ]}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThirdwebProvider>
  </StrictMode>
);