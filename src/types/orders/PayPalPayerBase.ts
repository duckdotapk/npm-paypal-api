//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payer_base */
export interface PayPalPayerBase
{
	email_address? : string;

	payer_id? : string;
}