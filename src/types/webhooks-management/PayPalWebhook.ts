//
// Imports
//

import { PayPalEventType } from "./PayPalEventType.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-webhook */
export interface PayPalWebhook
{
	id? : string;

	url : string;

	event_types : PayPalEventType[];

	links? : PayPalLinkDescription[];
}