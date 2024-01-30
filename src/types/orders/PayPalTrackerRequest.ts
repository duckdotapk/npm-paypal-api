//
// Imports
//

import { PayPalTracker } from "./PayPalTracker.js";
import { PayPalTrackerItem } from "./PayPalTrackerItem.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_tracker_request */
export interface PayPalTrackerRequest extends PayPalTracker
{
	capture_id : string;

	notify_payer? : boolean;

	items? : PayPalTrackerItem[];
}