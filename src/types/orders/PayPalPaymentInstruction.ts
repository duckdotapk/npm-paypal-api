//
// Imports
//

import { PayPalDisbursementMode } from "./PayPalDisbursementMode.js";
import { PayPalPlatformFee } from "./PayPalPlatformFee.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payment_instruction */
export interface PayPalPaymentInstruction
{
	platform_fees? : PayPalPlatformFee[];

	payee_pricing_tier_id? : string;

	payee_receivable_fx_rate_id? : string;

	disbursement_mode? : PayPalDisbursementMode;
}