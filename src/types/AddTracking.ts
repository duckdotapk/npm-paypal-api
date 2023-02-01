//
// Imports
//

import 
{ 
	PayPalError,
	PayPalHATEOASLink, 
} from "./Shared.js";

//
// Types
//

/** The add tracking information for multiple PayPal transactions response details. */
export interface PayPalBatchTrackerCollection
{
	/**
	 * The batch header.
	 * 
	 * 1 to 100 items.
	 */
	tracker_identifiers? : PayPalTrackingIdentifier[];

	/**
	 * An array of error responses.
	 * 
	 * 1 to 100 items.
	 */
	errors? : PayPalError[];

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}

/** The tracking identifiers for a shipment. */
export interface PayPalTrackingIdentifier
{
	/**
	 * The PayPal transaction ID.
	 * 
	 * 1 to 50 characters.
	 */
	transaction_id : string;

	/**
	 * The tracking number for the shipment.
	 * 
	 * 1 to 64 characters.
	 */
	tracking_number? : string;

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}