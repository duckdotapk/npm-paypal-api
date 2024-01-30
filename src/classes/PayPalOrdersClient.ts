//
// Imports
//

import { PayPalClient } from "./PayPalClient.js";

import { PayPalOrder } from "../types/orders/PayPalOrder.js";
import { PayPalOrderRequest } from "../types/orders/PayPalOrderRequest.js";

import { PayPalError } from "../types/PayPalError.js";

//
// Class
//

export interface CreateOrderRequestHeaders
{
	"PayPal-Request-Id"? : string;

	"PayPal-Partner-Attribution-Id"? : string;

	"PayPal-Client-Metadata-Id"? : string;

	"Prefer"? : string;

	"Authorization" : string;

	"Content-Type" : string;
}

export interface PayPalOrdersClientOptions
{
	payPalClient : PayPalClient;
}

export class PayPalOrdersClient
{
	payPalClient : PayPalClient;

	constructor(options : PayPalOrdersClientOptions)
	{
		this.payPalClient = options.payPalClient;
	}

	async createOrder(headers : Omit<CreateOrderRequestHeaders, "Prefer" | "Authorization" | "Content-Type">, body : PayPalOrderRequest) : Promise<PayPalError | PayPalOrder>
	{
		const accessToken = await this.payPalClient.getAccessToken();

		const response = await fetch(this.payPalClient.baseUrl + "/v2/checkout/orders",
			{
				method: "POST",
				headers:
					{
						...headers,

						"Prefer": "return=representation",
						"Authorization": "Bearer " + accessToken,
						"Content-Type": "application/json",
					},
				body: JSON.stringify(body),
			});

		return await response.json();
	}
}