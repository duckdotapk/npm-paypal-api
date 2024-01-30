//
// Imports
//

import { PayPalApplicationContext } from "./PayPalApplicationContext.js";
import { PayPalCheckoutPaymentIntent } from "./PayPalCheckoutPaymentIntent.js";
import { PayPalPayer } from "./PayPalPayer.js";
import { PayPalPaymentSource } from "./PayPalPaymentSource.js";
import { PayPalPurchaseUnitRequest } from "./PayPalPurchaseUnitRequest.js";

//
// Type
//


/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_request */
export interface PayPalOrderRequest
{
	purchase_units : PayPalPurchaseUnitRequest[];

	intent : PayPalCheckoutPaymentIntent;

	/** @deprecated */
	payer? : PayPalPayer;

	payment_source? : PayPalPaymentSource;

	application_context? : PayPalApplicationContext;
}