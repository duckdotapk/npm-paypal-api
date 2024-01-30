//
// Imports
//

import { PayPalLineItem } from "./PayPalLineItem.js";
import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-level_3_card_processing_data */
export interface PayPalLevel3
{
	ships_from_postal_code? : string;

	line_items? : PayPalLineItem[];

	shipping_amount? : PayPalMoney;

	duty_amount? : PayPalMoney;

	discount_amount? : PayPalMoney;

	shipping_address? : PayPalPortablePostalAddressMediumGrained;
}