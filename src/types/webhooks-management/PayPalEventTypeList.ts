//
// Imports
//

import { PayPalEventType } from "./PayPalEventType.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-event_type_list */
export interface PayPalEventTypeList
{
	event_types? : PayPalEventType[];
}