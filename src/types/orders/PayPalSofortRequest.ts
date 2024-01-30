//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Type
//

export interface PayPalSofortRequest
{
	name : string;

	country_code : string;

	experience_context? : PayPalExperienceContextBase;
}