// LoyaltyService.ts
type LoyaltyServiceClient = any;

import env from "@/env";

export class LoyaltyService {
  private static _instance: LoyaltyService = new LoyaltyService();
  private _loyaltyServiceClient?: LoyaltyServiceClient;

  private constructor() {
    if (LoyaltyService._instance) {
      throw new Error(
        "Error: Instantiation failed: Use LoyaltyService.getInstance() instead of new.",
      );
    }
    LoyaltyService._instance = this;
  }

  public static instance(): LoyaltyService {
    return LoyaltyService._instance;
  }

  public initClients = (clients: {
    loyaltyServiceClient: LoyaltyServiceClient;
  }) => {
    this._loyaltyServiceClient = clients.loyaltyServiceClient;
  };
}
