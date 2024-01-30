//
// Imports
//

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_paypal_wallet_base */
export interface PayPalVaultPayPalWalletBase
{
	store_in_vault? : "ON_SUCCESS";

	description? : string;

	usage_pattern? : string;

	usage_type : string;

	owner_id? : string;

	customer_type? : "CONSUMER";

	permit_multiple_payment_tokens? : boolean;
}