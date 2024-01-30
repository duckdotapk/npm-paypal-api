//
// Imports
//

import { PayPalWalletCustomer } from "./PayPalWalletCustomer.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_attributes */
export interface PayPalWalletAttributes
{
	customer? : PayPalWalletCustomer;

	vault? : unknown; // TODO
}