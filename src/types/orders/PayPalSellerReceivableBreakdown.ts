//
// Imports
//

import { PayPalExchangeRate } from "./PayPalExchangeRate.js";
import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPlatformFee } from "./PayPalPlatformFee.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-seller_receivable_breakdown */
export interface PayPalSellerReceivableBreakdown
{
	platform_fees? : PayPalPlatformFee[];

	gross_amount : PayPalMoney;

	paypal_fee? : PayPalMoney;

	paypal_fee_in_receivable_currency? : PayPalMoney;

	net_amount? : PayPalMoney;

	receivable_amount? : PayPalMoney;

	exchange_rate? : PayPalExchangeRate;
}