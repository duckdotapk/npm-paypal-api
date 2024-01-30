//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPayee } from "./PayPalPayee.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-platform_fee */
export interface PayPalPlatformFee
{
	amount : PayPalMoney;

	payee? : PayPalPayee;
}