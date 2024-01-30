//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_response */
export interface PayPalVenmoWalletResponse
{
	user_name? : string;

	attributes? : unknown; // TODO
}