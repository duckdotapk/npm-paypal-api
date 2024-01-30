//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-destination */
export interface PayPalDestination
{
	anchor_type? : "ACCOUNT" | "APPLICATION";

	type? : "PROVIDED" | "ORIGINAL" | "ANCHOR_TYPE";

	webhook_ids? : string[];
}