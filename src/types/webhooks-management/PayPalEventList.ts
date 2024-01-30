//
// Imports
//

import { PayPalEvent } from "./PayPalEvent.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-event_list */
export interface PayPalEventList
{
	events? : PayPalEvent[];

	count? : number;

	links? : PayPalLinkDescription[];
}