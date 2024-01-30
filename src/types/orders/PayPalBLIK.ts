// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalBLIKOneClickResponse } from "./PayPalBLIKOneClickResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-blik */
export interface PayPalBLIK
{
	name? : string;

	country_code? : string;

	email? : string;

	one_click? : PayPalBLIKOneClickResponse;
}