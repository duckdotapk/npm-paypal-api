//
// Imports
//

import { PayPalEnrolled } from "./PayPalEnrolled.js";
import { PayPalParesStatus } from "./PayPalParesStatus.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-three_d_secure_authentication_response */
export interface PayPalThreeDSecureAuthenticationResponse
{
	authentication_response? : PayPalParesStatus;

	enrollment_status? : PayPalEnrolled;
}