//
// Imports
//

import { PayPalActivityTimestamps } from "./PayPalActivityTimestamps.js";
import { PayPalAuthorizationStatus } from "./PayPalAuthorizationStatus.js";
import { PayPalAuthorizationStatusDetails } from "./PayPalAuthorizationStatusDetails.js";
import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalNetworkTransactionReference } from "./PayPalNetworkTransactionReference.js";
import { PayPalSellerProtection } from "./PayPalSellerProtection.js";

import { PayPalLinkDescription } from "../PayPal.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-authorization */
export interface PayPalAuthorization extends PayPalActivityTimestamps
{
	status? : PayPalAuthorizationStatus["status"]; // TODO: I'm not sure if it is a mistake in the docs that this doesn't use the *object* itself

	status_details? : PayPalAuthorizationStatusDetails;

	id? : string;

	invoice_id? : string;

	custom_id? : string;

	links? : PayPalLinkDescription[];

	amount? : PayPalMoney;

	network_transaction_reference? : PayPalNetworkTransactionReference;

	seller_protection? : PayPalSellerProtection;

	expiration_time? : string;
}