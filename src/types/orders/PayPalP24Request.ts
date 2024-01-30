//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-p24_request */
export interface PayPalP24Request
{
	name : string;

	email : string;

	country_code : string;

	experience_context? : PayPalExperienceContextBase;
}