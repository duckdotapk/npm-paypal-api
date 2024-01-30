//
// Imports
//

import { PayPalVaultResponse } from "./PayPalVaultResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_attributes_response */
export interface PayPalVenmoWalletAttributesResponse
{
	vault? : PayPalVaultResponse;
}