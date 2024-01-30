//
// Imports
//

import { PayPalErrorDetails } from "./PayPalErrorDetails.js";
import { PayPalLinkDescription } from "./PayPalLinkDescription.js";

//
// Type
//

/** @note Documented in various places throughout the API docs. */
export interface PayPalError
{
	name : string;

	message : string;

	debug_id : string;

	information_link? : string;

	details? : PayPalErrorDetails[];

	links? : PayPalLinkDescription[];
}