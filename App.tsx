import React, { useEffect } from "react";
import AppNavigator from "@/navigation/AppNavigator";
import { LogBox } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@/navigation/NavigationService";

import themeData from "@/assets/theme-data";
import { ThemeProvider } from "react-native-theme-component";
import { BranchProvider } from "react-native-branch-component";

import SplashScreen from "react-native-splash-screen";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import env from "@/env";

import { createAuthorizedApiClient } from "@/services/api-clients/AuthorizedApiClient";
import { AuthorizationClient } from "@/services/api-clients";
import {
  AuthorizationProvider,
  MembershipProvider,
  WalletProvider,
  LoyaltyProvider,
} from "@/context";
import {
  AuthorizationService,
  MembershipService,
  WalletService,
  LoyaltyService,
} from "@/services";

AuthorizationClient.instance()
  .configure({
    envId: env.api.envId,
    appId: env.api.appId,
    codeChallenge: env.api.codeChallenge,
    codeVerifier: env.api.codeVerifier,
    bankId: env.api.bankId,
    authBaseUrl: env.api.authBaseUrl,
    redirectUrl: env.api.redirectUrl,
    apiBaseUrl: env.api.apiBaseUrl,
  })
  .then(() => {
    MembershipService.instance().initClients({
      membershipServiceClient: createAuthorizedApiClient(
        env.api.apiBaseUrl + env.api.membershipBaseUrl,
      ),
    });
    WalletService.instance().initClients({
      walletServiceClient: createAuthorizedApiClient(
        env.api.apiBaseUrl + env.api.walletBaseUrl,
      ),
    });
    LoyaltyService.instance().initClients({
      loyaltyServiceClient: createAuthorizedApiClient(
        env.api.apiBaseUrl + env.api.loyaltyBaseUrl,
      ),
    });
  });
const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  });

  return (
    <ThemeProvider theme={themeData}>
      <AuthorizationProvider>
        <MembershipProvider>
          <WalletProvider>
            <LoyaltyProvider>
              <BranchProvider>
                <SafeAreaProvider>
                  <NavigationContainer ref={navigationRef}>
                    <AppNavigator />
                  </NavigationContainer>
                </SafeAreaProvider>
              </BranchProvider>
            </LoyaltyProvider>
          </WalletProvider>
        </MembershipProvider>
      </AuthorizationProvider>
    </ThemeProvider>
  );
};

export default App;
