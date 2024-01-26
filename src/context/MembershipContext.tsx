// MembershipService.ts
import React, { createContext, useContext, useState, useCallback } from "react";
import { MembershipService } from "../services/MembershipService";

type MembershipContextValue = {
  userProfile: string | null;
  userProfileLoading: boolean;
  getProfile: () => Promise<any>;
};

// Create the membership context
const MembershipContext = createContext<MembershipContextValue | undefined>(
  undefined,
);
const membershipService = MembershipService.instance();

export const MembershipProvider: React.FC = ({ children }: any) => {
  //StoreDataCode
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [userProfileLoading, setUserProfileLoading] = useState<boolean>(true);

  const getProfile = useCallback(async () => {
    try {
      // Call your service function here based on the function details
      const result = await membershipService.getProfile();

      // Handle state update
      setUserProfile(result);

      return result;
    } catch (error) {
      console.error("getProfile failed", error);
      throw new Error("getProfile failed");
    }
  }, [membershipService]);

  return (
    <MembershipContext.Provider
      value={{
        userProfile,
        userProfileLoading,
        getProfile,
      }}
    >
      {children}
    </MembershipContext.Provider>
  );
};

export const useMembership = () => {
  const context = useContext(MembershipContext);
  if (context === undefined) {
    throw new Error("useMembership must be used within an MembershipProvider");
  }
  return context;
};
