// AuthorizationService.ts
import { authApiClient } from "./api-clients/AuthApiClient";

import env from "@/env";

class AuthorizationService {
  private static _instance: AuthorizationService;
  private _configs?: any;

  private constructor() {}

  public configure(configs: any) {
    this._configs = configs;
  }

  public getLocale() {
    if (this._configs) {
      return this._configs.locale;
    }
  }

  public static get instance(): AuthorizationService {
    if (!this._instance) {
      this._instance = new AuthorizationService();
    }
    return this._instance;
  }

  public async login(username: any, password: any) {
    try {
      const { appId, codeChallenge, codeVerifier } = env.api;
      const authApiClientInstance = authApiClient.getApiClient();

      // Authorize
      const authResponse = await authApiClientInstance.get(
        `/as/authorize?response_type=code&client_id=${appId}&scope=openid profilepsf&code_challenge=${codeChallenge}&code_challenge_method=S256&acr_values=Single_Factor&response_mode=pi.flow`,
      );

      // Login
      const loginResponse = await authApiClientInstance.post(
        `/flows/${authResponse.data.id}`,
        {
          username: `${username}`,
          password: `${password}`,
        },
        {
          headers: {
            "Content-Type":
              "application/vnd.pingidentity.usernamePassword.check+json",
          },
        },
      );

      // Resume
      const resumeResponse = await authApiClientInstance.get(
        `${loginResponse.data.resumeUrl}`,
      );

      // Token
      const tokenResponse = await authApiClientInstance.post(
        `/as/token`,
        {
          grant_type: "authorization_code",
          code: `${resumeResponse.data.authorizeResponse.code}`,
          client_id: `${appId}`,
          scope: "openid profilepsf",
          code_verifier: `${codeVerifier}`,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      return tokenResponse.data.access_token;
    } catch (error) {
      throw new Error("login failed", error);
    }
  }

  public async userRegistration(username: any, password: any) {
    try {
      const {} = env.api;
      const authApiClientInstance = authApiClient.getApiClient();

      // user Register
      const registerResponse = await authApiClientInstance.post(
        `/as/registration`,
        {
          grant_type: "authorization_code",
          code: `${username}`,
          client_id: `${password}`,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      return registerResponse;
    } catch (error) {
      throw new Error("userRegistration failed", error);
    }
  }
}

export const authorizationService = AuthorizationService.instance;
