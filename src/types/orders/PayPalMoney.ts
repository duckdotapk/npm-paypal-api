//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-money */
export interface PayPalMoney
{
	currency_code : string;

	value : string;
}