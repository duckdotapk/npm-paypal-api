//
// Imports
//

import { PayPalExchangeRate } from "./PayPalExchangeRate.js";
import { PayPalMoney } from "./PayPalMoney.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-net_amount_breakdown_item */
export interface PayPalNetAmountBreakdown
{
	payable_amount? : PayPalMoney;

	converted_amount? : PayPalMoney;

	exchange_rate? : PayPalExchangeRate;
}