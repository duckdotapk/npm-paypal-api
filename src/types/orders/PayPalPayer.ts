//
// Imports
//

import { PayPalName } from "./PayPalName.js";
import { PayPalPayerBase } from "./PayPalPayerBase.js";
import { PayPalPhoneWithType } from "./PayPalPhoneWithType.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";
import { PayPalTaxInfo } from "./PayPalTaxInfo.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payer */
export interface PayPalPayer extends PayPalPayerBase
{
	name? : PayPalName;

	phone? : PayPalPhoneWithType;

	birth_date? : string;

	tax_info? : PayPalTaxInfo;

	address? : PayPalPortablePostalAddressMediumGrained;
}