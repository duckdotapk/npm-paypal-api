//
// Imports
//

import { PayPalEvent } from "./PayPalEvent.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-verify_webhook_signature */
export interface PayPalVerifyWebhookSignature
{
	auth_algo : string;

	cert_url : string;

	transmission_id : string;

	transmission_sig : string;

	transmission_time : string;

	webhook_id : string;

	webhook_event : PayPalEvent;
}