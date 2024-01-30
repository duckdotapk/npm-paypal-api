//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-tracker_item */
export interface PayPalTrackerItem
{
	name? : string;

	quantity? : string; // Note: Again with the string quantities...

	sku? : string;

	image_url? : string;
}