//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-eps_request */
export interface PayPalEPSRequest
{
	name : string;

	country_code : string;

	experience_context? : PayPalExperienceContextBase;
}