//
// Imports
//

import { PayPalPayeePaymentMethodPreference } from "./PayPalPayeePaymentMethodPreference.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payment_method */
export interface PayPalPaymentMethod
{
	standard_entry_class_code : "TEL" | "WEB" | "CCD" | "PPD";

	payee_preferred : PayPalPayeePaymentMethodPreference;
}