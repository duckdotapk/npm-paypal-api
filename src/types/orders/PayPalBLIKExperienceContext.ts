// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-blik_experience_context */
export interface PayPalBLIKExperienceContext extends PayPalExperienceContextBase
{
	consumer_user_agent? : string;

	consumer_ip? : string;
}