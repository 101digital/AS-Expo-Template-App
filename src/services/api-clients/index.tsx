import { DeviceEventEmitter } from "react-native";
import { authApiClient } from "./AuthApiClient";
import { authorizationService } from "../AuthorizationService";
export class AuthorizationClient {
  static configure(arg0: {
    appId: string | undefined;
    envId: string | undefined;
    bankId: string | undefined;
    codeVerifier: string | undefined;
    codeChallenge: string | undefined;
    redirectUrl: string | undefined;
    apiBaseUrl: string | undefined;
    authBaseUrl: string | undefined;
    enterpriseDataServicesBaseUrl: any;
  }) {
    throw new Error("Method not implemented.");
  }
  private static _instance: AuthorizationClient = new AuthorizationClient();

  private _configs?: any;

  constructor() {
    if (AuthorizationClient._instance) {
      throw new Error(
        "Error: Instantiation failed: Use AuthorizationClient.instance() instead of new.",
      );
    }
    AuthorizationClient._instance = this;
  }

  public static instance(): AuthorizationClient {
    return AuthorizationClient._instance;
  }

  public configure(configs: any) {
    return new Promise<void>((resolve) => {
      this._configs = configs;
      // Configure the authApiClient and authorizationService with the provided configs
      authApiClient.configure(configs);
      authorizationService.configure(configs);
      resolve();
    });
  }

  public getConfigs() {
    if (this._configs === undefined) {
      throw new Error(
        "Error: AuthorizationClient must be configured before using",
      );
    }
    return this._configs;
  }

  public addSessionListener(listener: (data: any) => void) {
    DeviceEventEmitter.addListener("authcomponent.session.expired", listener);
  }

  public removeSessionListener(listener: (...args: any[]) => any) {
    DeviceEventEmitter.removeListener(
      "authcomponent.session.expired",
      listener,
    );
  }
}
