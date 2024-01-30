//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-item */
export interface PayPalItem
{
	name : string;

	quantity : string; // WTF PayPal, why is this a string??

	description? : string;

	sku? : string;

	category? : "DIGITAL_GOODS" | "PHYSICAL_GOODS" | "DONATION";

	unit_amount : PayPalMoney;

	tax? : PayPalMoney;
}