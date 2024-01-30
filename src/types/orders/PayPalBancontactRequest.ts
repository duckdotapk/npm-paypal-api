// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-bancontact_request */
export interface PayPalBancontactRequest
{
	name : string;

	country_code : string;

	experience_context? : PayPalExperienceContextBase;
}