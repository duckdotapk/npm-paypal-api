//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalNetAmountBreakdown } from "./PayPalNetAmountBreakdown.js";
import { PayPalPlatformFee } from "./PayPalPlatformFee.js";

//
// Type
//

/** @note This type is missing from the docs so this information is derived from the PayPalRefund schema. */
export interface PayPalSellerPayableBreakdown
{
	platform_fees? : PayPalPlatformFee[];

	net_amount_breakdown? : PayPalNetAmountBreakdown[];

	gross_amount? : PayPalMoney;

	paypal_fee? : PayPalMoney;

	paypal_fee_in_receivable_currency? : PayPalMoney;

	net_amount? : PayPalMoney;

	net_amount_in_receivable_currency? : PayPalMoney;

	total_refunded_amount? : PayPalMoney;
}