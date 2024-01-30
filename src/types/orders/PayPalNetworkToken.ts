//
// Imports
//

import { PayPalECIFlag } from "./PayPalECIFlag.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-network_token_request */
export interface PayPalNetworkToken
{
	number : string;

	cryptogram? : string;

	// noinspection SpellCheckingInspection
	token_requestor_id? : string;

	expiry : string;

	eci_flag? : PayPalECIFlag;
}