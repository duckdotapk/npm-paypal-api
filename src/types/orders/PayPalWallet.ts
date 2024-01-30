//
// Imports
//

import { PayPalName } from "./PayPalName.js";
import { PayPalPhoneWithType } from "./PayPalPhoneWithType.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";
import { PayPalTaxInfo } from "./PayPalTaxInfo.js";
import { PayPalWalletAttributes } from "./PayPalWalletAttributes.js";
import { PayPalWalletExperienceContext } from "./PayPalWalletExperienceContext.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet */
export interface PayPalWallet
{
	experience_context? : PayPalWalletExperienceContext;

	billing_agreement_id? : string;

	vault_id? : string;

	email_address? : string;

	name? : PayPalName;

	phone? : PayPalPhoneWithType;

	birth_date? : string;

	tax_info? : PayPalTaxInfo;

	address? : PayPalPortablePostalAddressMediumGrained;

	attributes? : PayPalWalletAttributes;
}