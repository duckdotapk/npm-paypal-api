//
// Imports
//

import { PayPalCardAttributes } from "./PayPalCardAttributes.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";

//
// Type
//


/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_response */
export interface PayPalCard
{
	name? : string;

	number? : string;

	security_code? : string;

	expiry? : string;

	billing_address? : PayPalPortablePostalAddressMediumGrained;

	attributes? : PayPalCardAttributes;
}