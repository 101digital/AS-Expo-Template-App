// LoyaltyService.ts
import React, { createContext, useContext, useState, useCallback } from "react";
import { LoyaltyService } from "../services/LoyaltyService";

type LoyaltyContextValue = {};

// Create the loyalty context
const LoyaltyContext = createContext<LoyaltyContextValue | undefined>(
  undefined,
);
const loyaltyService = LoyaltyService.instance();

export const LoyaltyProvider: React.FC = ({ children }: any) => {
  //StoreDataCode

  return (
    <LoyaltyContext.Provider value={{}}>{children}</LoyaltyContext.Provider>
  );
};

export const useLoyalty = () => {
  const context = useContext(LoyaltyContext);
  if (context === undefined) {
    throw new Error("useLoyalty must be used within an LoyaltyProvider");
  }
  return context;
};
