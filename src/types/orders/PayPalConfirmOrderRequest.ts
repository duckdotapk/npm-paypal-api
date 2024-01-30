//
// Imports
//

import { PayPalConfirmApplicationContext } from "./PayPalConfirmApplicationContext.js";
import { PayPalPaymentSource } from "./PayPalPaymentSource.js";
import { PayPalProcessingInstruction } from "./PayPalProcessingInstruction.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-confirm_order_request */
export interface PayPalConfirmOrderRequest
{
	processing_instruction? : PayPalProcessingInstruction;

	application_context? : PayPalConfirmApplicationContext;

	payment_source? : PayPalPaymentSource;
}