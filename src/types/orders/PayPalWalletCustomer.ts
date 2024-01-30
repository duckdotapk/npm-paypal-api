//
// Imports
//

import { PayPalPhoneWithType } from "./PayPalPhoneWithType.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_customer */
export interface PayPalWalletCustomer
{
	id? : string;

	email_address? : string;

	phone? : PayPalPhoneWithType;
}