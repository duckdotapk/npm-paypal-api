//
// Imports
//

import { PayPalName } from "./PayPalName.js";
import { PayPalPhone } from "./PayPalPhone.js";
import { PayPalPhoneType } from "./PayPalPhoneType.js";
import { PayPalTaxInfo } from "./PayPalTaxInfo.js";
import { PayPalWalletAttributesResponse } from "./PayPalWalletAttributesResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_response */
export interface PayPalWalletResponse
{
	account_status? : "VERIFIED" | "UNVERIFIED";

	phone_type? : PayPalPhoneType;

	attributes? : PayPalWalletAttributesResponse;

	email_address? : string;

	account_id? : string;

	name? : PayPalName;

	phone_number? : PayPalPhone;

	birth_date? : string;

	tax_info? : PayPalTaxInfo;

	address? : unknown; // TODO
}