//
// Imports
//

import { DateTime } from "luxon";

//
// Class
//

export type OAuthTokenResponse = OAuthTokenResponseFailure | OAuthTokenResponseSuccess;

export interface OAuthTokenResponseFailure
{
	error : string;

	error_description : string;
}

export interface OAuthTokenResponseSuccess
{
	scope : string;

	access_token : string;

	token_type : string;

	app_id : string;

	expires_in : number;

	nonce : string;
}

export interface PayPalClientOptions
{
	clientId : string;

	secret : string;

	useSandbox : boolean;
}

export class PayPalClient
{
	accessToken : string | null;

	accessTokenExpiresAt : number;

	baseUrl : string;

	clientId : string;

	secret : string;

	useSandbox : boolean;

	constructor(options : PayPalClientOptions)
	{
		//
		// Options
		//

		this.clientId = options.clientId;

		this.secret = options.secret;

		this.useSandbox = options.useSandbox;

		//
		// Internals
		//

		this.accessToken = null;

		this.accessTokenExpiresAt = 0;

		this.baseUrl = options.useSandbox ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com";
	}

	async getAccessToken()
	{
		if (this.accessToken != null && this.accessTokenExpiresAt > DateTime.now().toSeconds())
		{
			return this.accessToken;
		}

		const rawResponse = await fetch(this.baseUrl + "/v1/oauth2/token?grant_type=client_credentials",
			{
				method: "POST",
				headers:
					{
						"Authorization": "Basic " + Buffer.from(this.clientId + ":" + this.secret).toString("base64"),
						"Content-Type": "application/x-www-form-urlencoded",
					},
			});

		const response = (await rawResponse.json()) as OAuthTokenResponse;

		if ("error" in response)
		{
			throw new Error("Failed to get access token. Ensure your client ID and secret are correct.");
		}

		this.accessToken = response.access_token;
		this.accessTokenExpiresAt = DateTime.now().plus({ seconds: response.expires_in }).toSeconds();

		return response.access_token;
	}
}