//
// Imports
//

import { PayPalActivityTimestamps } from "./PayPalActivityTimestamps.js";
import { PayPalTrackerItem } from "./PayPalTrackerItem.js";
import { PayPalTrackerStatus } from "./PayPalTrackerStatus.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/**
 * @see https://developer.paypal.com/docs/api/orders/v2/#definition-tracker
 *
 * This type has been renamed from the docs because PayPal documents two different "tracker" schemas.
 */
export interface PayPalTrackerResponse extends PayPalActivityTimestamps
{
	id? : string;

	status? : PayPalTrackerStatus;

	items? : PayPalTrackerItem[];

	links? : PayPalLinkDescription[];
}