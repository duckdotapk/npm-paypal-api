//
// Imports
//

import { PayPalPhoneWithType } from "./PayPalPhoneWithType.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-customer_v1 */
export interface PayPalCustomer
{
	id? : string;

	email_address? : string;

	phone? : PayPalPhoneWithType;
}