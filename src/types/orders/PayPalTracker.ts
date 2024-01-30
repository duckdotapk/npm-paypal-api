//
// Imports
//

import { PayPalCarrier } from "./PayPalCarrier.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipment_tracker */
export interface PayPalTracker
{
	tracking_number : string;

	carrier_name_other? : string;

	carrier : PayPalCarrier;
}