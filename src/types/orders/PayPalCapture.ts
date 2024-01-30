//
// Imports
//

import { PayPalActivityTimestamps } from "./PayPalActivityTimestamps.js";
import { PayPalCaptureStatus } from "./PayPalCaptureStatus.js";
import { PayPalCaptureStatusDetails } from "./PayPalCaptureStatusDetails.js";
import { PayPalDisbursementMode } from "./PayPalDisbursementMode.js";
import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalNetworkTransactionReference } from "./PayPalNetworkTransactionReference.js";
import { PayPalProcessorResponse } from "./PayPalProcessorResponse.js";
import { PayPalSellerProtection } from "./PayPalSellerProtection.js";
import { PayPalSellerReceivableBreakdown } from "./PayPalSellerReceivableBreakdown.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-capture */
export interface PayPalCapture extends PayPalActivityTimestamps
{
	status? : PayPalCaptureStatus["status"]; // TODO: The docs doesn't use the object itself here but I feel like the docs are wrong...

	status_details? : PayPalCaptureStatusDetails;

	id? : string;

	invoice_id? : string;

	custom_id? : string;

	final_capture? : boolean;

	disbursement_mode? : PayPalDisbursementMode;

	links? : PayPalLinkDescription[];

	amount? : PayPalMoney;

	network_transaction_reference? : PayPalNetworkTransactionReference;

	seller_protection? : PayPalSellerProtection;

	seller_receivable_breakdown? : PayPalSellerReceivableBreakdown;

	processor_response? : PayPalProcessorResponse;
}