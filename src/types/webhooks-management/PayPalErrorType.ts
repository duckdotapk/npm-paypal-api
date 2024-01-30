//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-error_type */
export interface PayPalErrorType
{
	id? : string;

	name : string;

	description? : string;
}