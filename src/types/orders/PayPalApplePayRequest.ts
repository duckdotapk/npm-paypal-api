//
// Imports
//

import { PayPalApplePayDecryptedTokenData } from "./PayPalApplePayDecryptedTokenData.js";
import { PayPalCardStoredCredential } from "./PayPalCardStoredCredential.js";
import { PayPalPhone } from "./PayPalPhone.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-apple_pay_request */
export interface PayPalApplePayRequest
{
	id? : string;

	stored_credential? : PayPalCardStoredCredential;

	name? : string;

	email_address? : string;

	phone_number? : PayPalPhone;

	decrypted_token? : PayPalApplePayDecryptedTokenData;

	vault_id? : string;
}