//
// Imports
//

import { PayPalPaymentSource } from "./PayPalPaymentSource.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_capture_request */
export interface PayPalOrderCaptureRequest
{
	payment_source? : PayPalPaymentSource;
}