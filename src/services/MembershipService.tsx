// MembershipService.ts
type MembershipServiceClient = any;

import env from "@/env";
import { getSecureData } from "@/utils/keychainStorage";

export class MembershipService {
  private static _instance: MembershipService = new MembershipService();
  private _membershipServiceClient?: MembershipServiceClient;

  private constructor() {
    if (MembershipService._instance) {
      throw new Error(
        "Error: Instantiation failed: Use MembershipService.getInstance() instead of new.",
      );
    }
    MembershipService._instance = this;
  }

  public static instance(): MembershipService {
    return MembershipService._instance;
  }

  public initClients = (clients: {
    membershipServiceClient: MembershipServiceClient;
  }) => {
    this._membershipServiceClient = clients.membershipServiceClient;
  };

  getProfile = async () => {
    try {
      console.log('wwwwwwwwwwwwww');
      let accessToken = await getSecureData("token");
      console.log('accessToken ',accessToken);
      
      if (!this._membershipServiceClient) {
        throw new Error("MembershipService Client is not registered");
      }
      console.log('getProfile ',this._membershipServiceClient);
      
      // userProfile
      const userProfileResponse =
        await this._membershipServiceClient.get(`/users/me?`);
      return userProfileResponse.data.data;
    } catch (error) {
      throw new Error("getProfile failed", error);
    }
  };
}
