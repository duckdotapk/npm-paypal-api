//
// Imports
//

import { PayPalName } from "./PayPalName.js";
import { PayPalPhone } from "./PayPalPhone.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";
import { PayPalVenmoWalletAttributesResponse } from "./PayPalVenmoWalletAttributesResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_response */
export interface PayPalVenmoWalletResponse
{
	user_name? : string;

	attributes? : PayPalVenmoWalletAttributesResponse;

	email_address? : string;

	account_id? : string;

	name? : PayPalName;

	phone_number? : PayPalPhone;

	address? : PayPalPortablePostalAddressMediumGrained;
}