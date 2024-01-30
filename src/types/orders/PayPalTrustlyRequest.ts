// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

export interface PayPalTrustlyRequest
{
	name : string;

	country_code : string;

	experience_context? : PayPalExperienceContextBase;
}