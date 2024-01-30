//
// Imports
//

import { PayPalCardStoredCredential } from "./PayPalCardStoredCredential.js";
import { PayPalPaymentMethod } from "./PayPalPaymentMethod.js";

//
// Type
//


/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context */
export interface PayPalApplicationContext
{
	/** @deprecated */
	brand_name? : string;

	/** @deprecated */
	landing_page? : "LOGIN" | "BILLING" | "NO_PREFERENCE";

	/** @deprecated */
	shipping_preference? : "GET_FROM_FILE" | "NO_SHIPPING" | "SET_PROVIDED_ADDRESS";

	/** @deprecated */
	user_action? : "CONTINUE" | "PAY_NOW";

	/** @deprecated */
	return_url? : string;

	/** @deprecated */
	cancel_url? : string;

	/** @deprecated */
	locale? : string;

	/** @deprecated */
	payment_method? : PayPalPaymentMethod;

	/** @deprecated */
	stored_payment_source? : PayPalCardStoredCredential;
}