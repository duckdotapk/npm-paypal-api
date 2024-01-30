//
// Imports
//

import { PayPalShippingDetail } from "./PayPalShippingDetail.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipping_with_tracking_details */
export interface PayPalShippingWithTrackingDetails extends PayPalShippingDetail
{
	trackers? : unknown[]; // TODO
}