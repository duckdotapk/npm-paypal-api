//
// Imports
//

import { PayPalPaymentSource } from "./PayPalPaymentSource.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_authorize_request */
export interface PayPalAuthorizeRequest
{
	payment_source? : PayPalPaymentSource;
}