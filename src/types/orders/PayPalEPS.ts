//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-eps */
export interface PayPalEPS
{
	name? : string;

	country_code? : string;

	bic? : string;
}