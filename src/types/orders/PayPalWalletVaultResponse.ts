//
// Imports
//

import { PayPalWalletCustomer } from "./PayPalWalletCustomer.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_vault_response */
export interface PayPalWalletVaultResponse
{
	id? : string;

	status? : "VAULTED" | "CREATED" | "APPROVED";

	links? : PayPalLinkDescription[];

	customer? : PayPalWalletCustomer;

	owner_id? : string;
}