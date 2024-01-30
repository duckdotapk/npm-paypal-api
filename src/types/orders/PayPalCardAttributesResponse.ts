//
// Import
//

import { PayPalVaultResponse } from "./PayPalVaultResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_attributes_response */
export interface PayPalCardAttributesResponse
{
	vault? : PayPalVaultResponse;
}