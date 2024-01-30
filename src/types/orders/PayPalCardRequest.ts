//
// Imports
//

import { PayPalCardAttributes } from "./PayPalCardAttributes.js";
import { PayPalCardExperienceContext } from "./PayPalCardExperienceContext.js";
import { PayPalCardStoredCredential } from "./PayPalCardStoredCredential.js";
import { PayPalNetworkToken } from "./PayPalNetworkToken.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";

//
// Type

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_request */
export interface PayPalCardRequest
{
	name? : string;

	number? : string;

	security_code? : string;

	expiry? : string;

	billing_address? : PayPalPortablePostalAddressMediumGrained;

	attributes? : PayPalCardAttributes;

	stored_credential? : PayPalCardStoredCredential;

	vault_id? : string;

	network_token? : PayPalNetworkToken;

	experience_context? : PayPalCardExperienceContext;
}