//
// Imports
//

import { PayPalAmountBreakdown } from "./PayPalAmountBreakdown.js";
import { PayPalMoney } from "./PayPalMoney.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-amount_with_breakdown */
export interface PayPalAmountWithBreakdown extends PayPalMoney
{
	breakdown? : PayPalAmountBreakdown;
}