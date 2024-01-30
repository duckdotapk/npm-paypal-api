// noinspection SpellCheckingInspection

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-giropay */
export interface PayPalGiropay
{
	name? : string;

	country_code? : string;

	bic? : string;
}