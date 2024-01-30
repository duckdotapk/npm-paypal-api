// noinspection SpellCheckingInspection

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-trustly */
export interface PayPalTrustly
{
	name? : string;

	country_code? : string;

	bic? : string;

	iban_last_chars? : string;
}