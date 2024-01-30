// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalBLIKExperienceContext } from "./PayPalBLIKExperienceContext.js";
import { PayPalBLIKLevel0 } from "./PayPalBLIKLevel0.js";
import { PayPalBLIKOneClick } from "./PayPalBLIKOneClick.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-blik_request */
export interface PayPalBLIKRequest
{
	name : string;

	country_code : string;

	email? : string;

	experience_context? : PayPalBLIKExperienceContext;

	level_0? : PayPalBLIKLevel0;

	one_click? : PayPalBLIKOneClick;
}