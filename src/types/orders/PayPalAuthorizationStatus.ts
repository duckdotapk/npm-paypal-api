//
// Imports
//

import { PayPalAuthorizationStatusDetails } from "./PayPalAuthorizationStatusDetails.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-authorization_status */
export interface PayPalAuthorizationStatus
{
	status? : "CREATED" | "CAPTURED" | "DENIED" | "PARTIALLY_CAPTURED" | "VOIDED" | "PENDING";

	status_details? : PayPalAuthorizationStatusDetails;
}