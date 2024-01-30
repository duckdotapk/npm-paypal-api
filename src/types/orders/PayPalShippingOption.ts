//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalShippingType } from "./PayPalShippingType.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipping_option */
export interface PayPalShippingOption
{
	id : string;

	label : string;

	selected : boolean;

	type? : PayPalShippingType;

	amount? : PayPalMoney;
}