//
// Imports
//

import { PayPalNetworkTransactionReference } from "./PayPalNetworkTransactionReference.js";
import { PayPalPaymentInitiator } from "./PayPalPaymentInitiator.js";
import { PayPalStoredPaymentSourcePaymentType } from "./PayPalStoredPaymentSourcePaymentType.js";
import { PayPalStoredPaymentSourceUsageType } from "./PayPalStoredPaymentSourceUsageType.js";

//
// Type
//

export interface PayPalStoredPaymentSource
{
	payment_initiator : PayPalPaymentInitiator;

	payment_type : PayPalStoredPaymentSourcePaymentType;

	usage? : PayPalStoredPaymentSourceUsageType;

	previous_network_transaction_reference? : PayPalNetworkTransactionReference;
}