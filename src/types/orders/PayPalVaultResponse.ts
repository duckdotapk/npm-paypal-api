//
// Imports
//

import { PayPalCustomer } from "./PayPalCustomer.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_response */
export interface PayPalVaultResponse
{
	id? : string;

	status? : "VAULTED" | "CREATED" | "APPROVED";

	links? : PayPalLinkDescription[];

	customer? : Pick<PayPalCustomer, "id">; // Note: The docs say only the ID field is available here
}