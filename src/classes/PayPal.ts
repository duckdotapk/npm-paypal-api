//
// Imports
//

import { DateTime } from "luxon";

import { PayPalCaptureOrderRequest, PayPalCreateOrderRequest, PayPalOrder } from "../types/Orders.js";
import { PayPalVerifyWebhookSignatureRequest, PayPalVerifyWebhookSignatureResponse } from "../types/WebhooksManagement.js";

//
// Class
//

/** Options for constructing a PayPal instance. */
export interface PayPalOptions
{
	/** Whether these credentials are for the PayPal sandbox. */
	sandbox : boolean;

	/** Your PayPal application's client ID. */
	clientId : string;

	/** Your PayPal application's secret. */
	secret : string;
}

/** A class for interacting with the PayPal API. */
export class PayPal
{
	/** Whether to use the sandbox API. */
	public readonly sandbox : boolean;

	/** The application's client ID. */
	public readonly clientId : string;

	/** The application's secret key. */
	public readonly secret : string;

	/** The base URL for API requests. */
	public readonly baseUrl : string;

	/** The current access token. */
	private currentAccessToken : string;

	/** The time at which the current access token expires. */
	private currentAccessTokenExpiresAt : number;

	/** @author Loren Goodwin */
	constructor(options : PayPalOptions)
	{
		this.sandbox = options.sandbox;

		this.clientId = options.clientId;

		this.secret = options.secret;

		this.baseUrl = this.sandbox ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com";
	}

	/**
	 * Fetches an access token from the PayPal API.
	 *
	 * @author Loren Goodwin
	 */
	async getAccessToken()
	{
		if (this.currentAccessToken != null && this.currentAccessTokenExpiresAt > DateTime.now().toSeconds())
		{
			return this.currentAccessToken;
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

		const response = await rawResponse.json();

		this.currentAccessToken = response.access_token;
		this.currentAccessTokenExpiresAt = DateTime.now().plus({ seconds: response.expires_in }).toSeconds();

		return response.access_token;
	}

	/**
	 * Captures the payment for the given order.
	 *
	 * @author Loren Goodwin
	 */
	async captureOrderPayment(id : string, options : PayPalCaptureOrderRequest = {}) : Promise<PayPalOrder>
	{
		const rawResponse = await fetch(this.baseUrl + "/v2/checkout/orders/" + id + "/capture",
			{
				method: "POST",
				headers:
					{
						"Authorization": "Bearer " + await this.getAccessToken(),
						"Content-Type": "application/json",
					},

				// Note: This is required for PayPal to not reject the request with an UNSUPPORTED_MEDIA_TYPE error.
				body: JSON.stringify(options),
			});

		const response = await rawResponse.json();

		if (rawResponse.status != 200 && rawResponse.status != 201)
		{
			throw new Error("Failed to capture order payment.");
		}

		return response;
	}

	/**
	 * Creates an order on PayPal.
	 *
	 * @author Loren Goodwin
	 */
	async createOrder(options : PayPalCreateOrderRequest) : Promise<PayPalOrder>
	{
		const rawResponse = await fetch(this.baseUrl + "/v2/checkout/orders",
			{
				method: "POST",
				headers:
					{
						"Authorization": "Bearer " + await this.getAccessToken(),
						"Content-Type": "application/json",
					},
				body: JSON.stringify(options),
			});

		const response = await rawResponse.json();

		if (rawResponse.status != 200)
		{
			throw new Error("Failed to create order.");
		}

		return response;
	}

	/**
	 * Fetches the given order from PayPal.
	 *
	 * @author Loren Goodwin
	 */
	async getOrder(id : string) : Promise<PayPalOrder>
	{
		const rawResponse = await fetch(this.baseUrl + "/v2/checkout/orders/" + id,
			{
				method: "GET",
				headers:
					{
						"Authorization": "Bearer " + await this.getAccessToken(),
					},
			});

		const response = await rawResponse.json();

		if (rawResponse.status != 200)
		{
			throw new Error("Failed to fetch order.");
		}

		return response;
	}

	/**
	 * Verifies the signature of a webhook request.
	 *
	 * @author Loren Goodwin
	 */
	async verifyWebhookSignature(options : PayPalVerifyWebhookSignatureRequest) : Promise<boolean>
	{
		const rawResponse = await fetch(this.baseUrl + "/v1/notifications/verify-webhook-signature",
			{
				method: "POST",
				headers:
					{
						"Authorization": "Bearer " + await this.getAccessToken(),
						"Content-Type": "application/json",
					},
				body: JSON.stringify(options),
			});

		const response = await rawResponse.json() as PayPalVerifyWebhookSignatureResponse;

		if (rawResponse.status != 200)
		{
			throw new Error("Failed to verify webhook signature.");
		}

		return response.verification_status == "SUCCESS";
	}
}