//
// Imports
//

import { PayPalCustomer } from "./PayPalCustomer.js";

import { PayPalLinkDescription } from "../PayPal.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_response */
export interface PayPalVaultResponse
{
	id? : string;

	status? : "VAULTED" | "CREATED" | "APPROVED";

	links? : PayPalLinkDescription[];

	customer? : PayPalCustomer; // TODO: The docs say this object only has the "id" field. This should maybe pick that specifically
}