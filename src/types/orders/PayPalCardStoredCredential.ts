//
// Imports
//

import { PayPalPaymentInitiator } from "./PayPalPaymentInitiator.js";
import { PayPalNetworkTransactionReference } from "./PayPalNetworkTransactionReference.js";
import { PayPalStoredPaymentSourcePaymentType } from "./PayPalStoredPaymentSourcePaymentType.js";
import { PayPalStoredPaymentSourceUsageType } from "./PayPalStoredPaymentSourceUsageType.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_stored_credential */
export interface PayPalCardStoredCredential
{
	payment_initiator : PayPalPaymentInitiator;

	payment_type : PayPalStoredPaymentSourcePaymentType;

	usage? : PayPalStoredPaymentSourceUsageType;

	previous_network_transaction_reference? : PayPalNetworkTransactionReference;
}