//
// Imports
//

import { PayPalActivityTimestamps } from "./PayPalActivityTimestamps.js";
import { PayPalCheckoutPaymentIntent } from "./PayPalCheckoutPaymentIntent.js";
import { PayPalOrderStatus } from "./PayPalOrderStatus.js";
import { PayPalPayer } from "./PayPalPayer.js";
import { PayPalPaymentSourceResponse } from "./PayPalPaymentSourceResponse.js";
import { PayPalProcessingInstruction } from "./PayPalProcessingInstruction.js";
import { PayPalPurchaseUnit } from "./PayPalPurchaseUnit.js";

import { PayPalLinkDescription } from "../PayPal.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order */
export interface PayPalOrder extends PayPalActivityTimestamps
{
	id? : string;

	processing_instruction? : PayPalProcessingInstruction;

	purchase_units? : PayPalPurchaseUnit[];

	links? : PayPalLinkDescription[];

	payment_source? : PayPalPaymentSourceResponse;

	intent? : PayPalCheckoutPaymentIntent;

	payer? : PayPalPayer;

	status? : PayPalOrderStatus;
}