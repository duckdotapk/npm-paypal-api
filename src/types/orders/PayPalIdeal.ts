//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-ideal */
export interface PayPalIdeal
{
	name? : string;

	country_code? : string;

	bic? : string;

	iban_last_chars? : string;
}