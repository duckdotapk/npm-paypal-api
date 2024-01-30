//
// Imports
//

import { PayPalLiabilityShift } from "./PayPalLiabilityShift.js";
import { PayPalThreeDSecureAuthenticationResponse } from "./PayPalThreeDSecureAuthenticationResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-authentication_response */
export interface PayPalAuthenticationResponse
{
	liability_shift : PayPalLiabilityShift;

	three_d_secure : PayPalThreeDSecureAuthenticationResponse;
}