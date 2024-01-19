// WalletService.ts
type WalletServiceClient = any;

import env from "@/env";

export class WalletService {
  private static _instance: WalletService = new WalletService();
  private _walletServiceClient?: WalletServiceClient;

  private constructor() {
    if (WalletService._instance) {
      throw new Error(
        "Error: Instantiation failed: Use WalletService.getInstance() instead of new.",
      );
    }
    WalletService._instance = this;
  }

  public static instance(): WalletService {
    return WalletService._instance;
  }

  public initClients = (clients: {
    walletServiceClient: WalletServiceClient;
  }) => {
    this._walletServiceClient = clients.walletServiceClient;
  };
}
