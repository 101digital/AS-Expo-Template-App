// WalletService.ts
import React, { createContext, useContext, useState, useCallback } from "react";
import { WalletService } from "../services/WalletService";

type WalletContextValue = {};

// Create the wallet context
const WalletContext = createContext<WalletContextValue | undefined>(undefined);
const walletService = WalletService.instance();

export const WalletProvider: React.FC = ({ children }: any) => {
  //StoreDataCode

  return <WalletContext.Provider value={{}}>{children}</WalletContext.Provider>;
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within an WalletProvider");
  }
  return context;
};
