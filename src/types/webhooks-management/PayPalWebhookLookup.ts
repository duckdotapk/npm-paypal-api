//
// Imports
//

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-webhooks_lookup */
export interface PayPalWebhookLookup
{
	id? : string;

	client_id? : string;

	links? : PayPalLinkDescription[];
}