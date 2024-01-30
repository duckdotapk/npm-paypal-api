//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-experience_context_base */
export interface PayPalExperienceContextBase
{
	brand_name? : string;

	shipping_preference? : "GET_FROM_FILE" | "NO_SHIPPING" | "SET_PROVIDED_ADDRESS";

	locale? : string;

	return_url? : string;

	cancel_url? : string;
}