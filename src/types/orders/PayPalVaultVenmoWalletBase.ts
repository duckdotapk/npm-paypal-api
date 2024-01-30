//
// Imports
//

import { PayPalStoreInVaultInstruction } from "./PayPalStoreInVaultInstruction.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_paypal_wallet_base */
export interface PayPalVaultVenmoWalletBase
{
	store_in_vault : PayPalStoreInVaultInstruction;

	description? : string;

	usage_pattern? : string;

	usage_type : string;

	customer_type? : "CONSUMER";

	permit_multiple_payment_tokens? : boolean;
}