// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-giropay_request */
export interface PayPalGiropayRequest
{
	name : string;

	country_code : string;

	experience_context? : PayPalExperienceContextBase;
}