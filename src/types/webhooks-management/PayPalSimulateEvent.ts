//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-simulate_event */
export interface PayPalSimulateEvent
{
	webhook_id? : string;

	url? : string;

	event_type : string;

	resource_version? : string;
}