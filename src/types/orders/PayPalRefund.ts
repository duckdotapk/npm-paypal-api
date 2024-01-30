//
// Imports
//

import { PayPalActivityTimestamps } from "./PayPalActivityTimestamps.js";
import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPayee } from "./PayPalPayee.js";
import { PayPalRefundStatus } from "./PayPalRefundStatus.js";
import { PayPalRefundStatusDetails } from "./PayPalRefundStatusDetails.js";

import { PayPalLinkDescription } from "../PayPal.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-refund */
export interface PayPalRefund extends PayPalActivityTimestamps
{
	status? : PayPalRefundStatus["status"]; // TODO: This weirdly does not seem to use the object? WTF PayPal, wildly inconsistent bullshit or the docs are wrong.

	status_details? : PayPalRefundStatusDetails;

	id? : string;

	invoice_id? : string;

	custom_id? : string;

	acquirer_reference_number? : string;

	note_to_payer? : string;

	seller_payable_breakdown? : unknown; // TODO: Type missing from docs??

	links? : PayPalLinkDescription[];

	amount? : PayPalMoney;

	payer? : PayPalPayee; // Note: This is intentionally "PayPalPayee" and not "PayPalPayer"
}