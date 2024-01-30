//
// Type
//

/** @note Documented in various places throughout the API docs. */
export interface PayPalErrorDetails
{
	field? : string;

	value? : string;

	location? : "body" | "path" | "query";

	issue : string;

	description? : string;
}