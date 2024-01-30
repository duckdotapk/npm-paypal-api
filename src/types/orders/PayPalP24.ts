//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-p24 */
export interface PayPalP24
{
	payment_descriptor? : string;

	method_id? : string;

	method_description? : string;

	name? : string;

	email? : string;

	country_code? : string;
}