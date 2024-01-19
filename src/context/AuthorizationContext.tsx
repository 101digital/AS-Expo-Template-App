// AuthorizationService.ts
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { authorizationService } from "../services/AuthorizationService";
import {
  getSecureData,
  setSecureData,
  removeToken,
} from "@/utils/keychainStorage";

type AuthorizationContextValue = {
  token: string | null;
  tokenLoading: boolean;
  login: (username: any, password: any) => Promise<any>;
  userRegister: string | null;
  userRegisterLoading: boolean;
  userRegistration: (username: any, password: any) => Promise<any>;
};

// Create the authorization context
const AuthorizationContext = createContext<
  AuthorizationContextValue | undefined
>(undefined);

export const AuthorizationProvider: React.FC = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenLoading, setTokenLoading] = useState<boolean>(true);
  const [userRegister, setUserRegister] = useState<string | null>(null);
  const [userRegisterLoading, setUserRegisterLoading] = useState<boolean>(true);

  useEffect(() => {
    const tokenResponse = async () => {
      const token = await getSecureData("token");

      if (token) {
        setToken({ token });
      }

      setTokenLoading(false);
    };

    tokenResponse();
  }, []);

  const login = useCallback(
    async (username: any, password: any) => {
      try {
        // Call your service function here based on the function details
        const result = await authorizationService.login(username, password);

        await setSecureData("token", result);

        // Handle state update
        setToken(result);

        return result;
      } catch (error) {
        console.error("login failed", error);
        throw new Error("login failed");
      }
    },
    [authorizationService],
  );

  const userRegistration = useCallback(
    async (username: any, password: any) => {
      try {
        // Call your service function here based on the function details
        const result = await authorizationService.userRegistration(
          username,
          password,
        );

        // Handle state update
        setUserRegister(result);

        return result;
      } catch (error) {
        console.error("userRegistration failed", error);
        throw new Error("userRegistration failed");
      }
    },
    [authorizationService],
  );

  return (
    <AuthorizationContext.Provider
      value={{
        token,
        tokenLoading,
        login,
        userRegister,
        userRegisterLoading,
        userRegistration,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorization = () => {
  const context = useContext(AuthorizationContext);
  if (context === undefined) {
    throw new Error(
      "useAuthorization must be used within an AuthorizationProvider",
    );
  }
  return context;
};
