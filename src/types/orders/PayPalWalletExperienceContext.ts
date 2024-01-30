//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";
import { PayPalPayeePaymentMethodPreference } from "./PayPalPayeePaymentMethodPreference.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_experience_context */
export interface PayPalWalletExperienceContext extends PayPalExperienceContextBase
{
	brand_name? : string;

	landing_page? : "LOGIN" | "GUEST_CHECKOUT" | "NO_PREFERENCE";

	user_action? : "CONTINUE" | "PAY_NOW";

	payment_method_preference? : PayPalPayeePaymentMethodPreference;
}