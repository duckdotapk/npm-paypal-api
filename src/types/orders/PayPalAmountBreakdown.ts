//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-amount_breakdown */
export interface PayPalAmountBreakdown
{
	item_total? : PayPalMoney;

	shipping? : PayPalMoney;

	handling? : PayPalMoney;

	tax_total? : PayPalMoney;

	insurance? : PayPalMoney;

	shipping_discount? : PayPalMoney;

	discount? : PayPalMoney;
}