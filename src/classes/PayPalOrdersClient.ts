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

export interface PayPalOrdersClientOptions
{
	payPalClient : PayPalClient;
}

export interface PayPalCreateOrderResult
{
	requestId : string;

	orderOrError : PayPalOrder | PayPalError;
}

export interface PayPalShowOrderDetailsResult
{
	orderOrError : PayPalError | PayPalOrder;
}

export class PayPalOrdersClient
{
	payPalClient : PayPalClient;

	constructor(options : PayPalOrdersClientOptions)
	{
		this.payPalClient = options.payPalClient;
	}

	async createOrder(body : PayPalOrderRequest) : Promise<PayPalCreateOrderResult>
	{
		const requestId = Math.random().toString();

		const headers = new Headers();

		headers.set("PayPal-Request-Id", requestId);

		headers.set("Prefer", "return=representation");

		const orderOrError = await this.payPalClient.request<PayPalOrder>(
			{
				method: "POST",
				path: "/v2/checkout/orders",
				headers,
				body,
			});

		return {
			requestId,
			orderOrError,
		};
	}

	async showOrderDetails(id : string) : Promise<PayPalShowOrderDetailsResult>
	{
		const orderOrError = await this.payPalClient.request<PayPalOrder>(
			{
				method: "GET",
				path: "/v2/checkout/orders/" + id,
			});

		return {
			orderOrError,
		};
	}
}