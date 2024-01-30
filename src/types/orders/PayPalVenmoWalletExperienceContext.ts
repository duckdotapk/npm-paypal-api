//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_experience_context */
export interface PayPalVenmoWalletExperienceContext
{
	brand_name? : string;

	shipping_preference? : "GET_FROM_FILE" | "NO_SHIPPING" | "SET_PROVIDED_ADDRESS";
}