//
// Imports
//

import { PayPalWebhookLookup } from "./PayPalWebhookLookup.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-WebhookLookupList */
export interface PayPalWebhookLookupList
{
	webhook_lookups? : PayPalWebhookLookup[];
}