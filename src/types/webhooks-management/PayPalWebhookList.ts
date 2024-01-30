//
// Imports
//

import { PayPalWebhook } from "./PayPalWebhook.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-webhook_list */
export interface PayPalWebhookList
{
	webhooks? : PayPalWebhook[];
}