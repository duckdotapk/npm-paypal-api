//
// Type
//

/** @note Not formally documented anywhere as far as I can tell. */
export interface PayPalOAuthToken
{
	scope : string;

	access_token : string;

	token_type : string;

	app_id : string;

	expires_in : number;

	nonce : string;
}