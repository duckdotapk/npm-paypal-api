//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-line_item */
export interface PayPalLineItem
{
	name : string;

	quantity : string; // WTF PayPal, why is this also a string???

	description? : string;

	sku? : string;

	category? : "DIGITAL_GOODS" | "PHYSICAL_GOODS" | "DONATION";

	unit_amount : PayPalMoney;

	tax? : PayPalMoney;

	commodity_code? : string;

	unit_of_measure? : string;

	discount_amount? : PayPalMoney;

	total_amount? : PayPalMoney;
}