//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-exchange_rate */
export interface PayPalExchangeRate
{
	value? : string;

	source_currency? : string;

	target_currency? : string;
}