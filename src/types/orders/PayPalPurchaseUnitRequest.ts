//
// Imports
//

import { PayPalAmountWithBreakdown } from "./PayPalAmountWithBreakdown.js";
import { PayPalItem } from "./PayPalItem.js";
import { PayPalPayee } from "./PayPalPayee.js";
import { PayPalPaymentInstruction } from "./PayPalPaymentInstruction.js";
import { PayPalSupplementaryData } from "./PayPalSupplementaryData.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-purchase_unit_request */
export interface PayPalPurchaseUnitRequest
{
	reference_id? : string;

	description? : string;

	custom_id? : string;

	invoice_id? : string;

	soft_descriptor? : string;

	items? : PayPalItem[];

	amount : PayPalAmountWithBreakdown;

	payee? : PayPalPayee;

	payment_instruction? : PayPalPaymentInstruction;

	shipping? : unknown; // TODO

	supplementary_data? : PayPalSupplementaryData;
}