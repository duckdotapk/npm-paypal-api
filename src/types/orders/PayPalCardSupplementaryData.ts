//
// Imports
//

import { PayPalLevel2 } from "./PayPalLevel2.js";
import { PayPalLevel3 } from "./PayPalLevel3.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_supplementary_data */
export interface PayPalCardSupplementaryData
{
	level_2? : PayPalLevel2;

	level_3? : PayPalLevel3;
}