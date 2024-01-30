//
// Imports
//

import { PayPalVenmoWalletAttributes } from "./PayPalVenmoWalletAttributes.js";
import { PayPalVenmoWalletExperienceContext } from "./PayPalVenmoWalletExperienceContext.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_request */
export interface PayPalVenmoWalletRequest
{
	experience_context? : PayPalVenmoWalletExperienceContext;

	vault_id? : string;

	email_address? : string;

	attributes? : PayPalVenmoWalletAttributes;
}