//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-patch */
export interface PayPalPatch
{
	op : "add" | "remove" | "replace" | "move" | "copy" | "test";

	path? : string;

	value? : unknown;

	from? : string;
}