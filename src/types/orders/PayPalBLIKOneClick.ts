// noinspection SpellCheckingInspection

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-blik_one_click */
export interface PayPalBLIKOneClick
{
	auth_code? : string;

	consumer_reference : string;

	alias_label? : string;

	alias_key? : string;
}