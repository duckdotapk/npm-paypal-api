//
// Imports
//

import { DateTime } from "luxon";

import { PayPalOAuthToken } from "../types/oauth/PayPalOAuthToken.js";
import { PayPalOAuthTokenError } from "../types/oauth/PayPalOAuthTokenError.js";

import { PayPalError } from "../types/PayPalError.js";

//
// Class
//

export interface PayPalClientOptions
{
	clientId : string;

	secret : string;

	useSandbox : boolean;
}

export interface PayPalClientRequestOptions
{
	method : string;

	path : string;

	queryParameters? : ConstructorParameters<typeof URLSearchParams>[0];

	headers? : ConstructorParameters<typeof Headers>[0];

	body? : unknown;
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

		const response = (await rawResponse.json()) as PayPalOAuthToken | PayPalOAuthTokenError;

		if ("error" in response)
		{
			throw new Error("Failed to get access token. Ensure your client ID and secret are correct.");
		}

		this.accessToken = response.access_token;
		this.accessTokenExpiresAt = DateTime.now().plus({ seconds: response.expires_in }).toSeconds();

		return response.access_token;
	}

	async request<PayPalResponse>(options : PayPalClientRequestOptions) : Promise<PayPalError | PayPalResponse>
	{
		let url = this.baseUrl + options.path;

		if (options.queryParameters != null)
		{
			const searchParams = new URLSearchParams(options.queryParameters);

			url += "?" + searchParams.toString();
		}

		const accessToken = await this.getAccessToken();
		
		const headers = new Headers(options.headers);

		headers.set("Authorization", "Bearer " + accessToken);
		headers.set("Content-Type", "application/json");

		let body = options.body != null
			? JSON.stringify(options.body)
			: null;

		const response = await fetch(url,
			{
				method: options.method,
				headers,
				body,
			});

		return await response.json();
	}
}