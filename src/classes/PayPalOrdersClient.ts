//
// Imports
//

import { PayPalClient } from "./PayPalClient.js";

import { PayPalAuthorizeRequest } from "../types/orders/PayPalAuthorizeRequest.js";
import { PayPalConfirmOrderRequest } from "../types/orders/PayPalConfirmOrderRequest.js";
import { PayPalOrder } from "../types/orders/PayPalOrder.js";
import { PayPalOrderCaptureRequest } from "../types/orders/PayPalOrderCaptureRequest.js";
import { PayPalOrderRequest } from "../types/orders/PayPalOrderRequest.js";
import { PayPalTrackerRequest } from "../types/orders/PayPalTrackerRequest.js";

import { PayPalError } from "../types/PayPalError.js";
import { PayPalPatchRequest } from "../types/PayPalPatchRequest.js";

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
	orderOrError : PayPalOrder | PayPalError;
}

export interface PayPalUpdateOrderResult
{
	emptyOrError : {} | PayPalError;
}

export interface PayPalConfirmOrderResult
{
	orderOrError : PayPalOrder | PayPalError;
}

export interface PayPalAuthorizePaymentForOrderResult
{
	requestId : string;

	orderOrError : PayPalOrder | PayPalError;
}

export interface PayPalCapturePaymentForOrderResult
{
	requestId : string;

	orderOrError : PayPalOrder | PayPalError;
}

export interface PayPalAddTrackingToOrderResult
{
	orderOrError : PayPalOrder | PayPalError;
}

export interface PayPalUpdateOrCancelTrackingForOrderResult
{
	emptyOrError : {} | PayPalError;
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

	async updateOrder(id : string, body : PayPalPatchRequest) : Promise<PayPalUpdateOrderResult>
	{
		const emptyOrError = await this.payPalClient.request<{}>(
			{
				method: "PATCH",
				path: "/v2/checkout/orders/" + id,
				body,
			});

		return {
			emptyOrError,
		};
	}

	async confirmOrder(id : string, body : PayPalConfirmOrderRequest) : Promise<PayPalConfirmOrderResult>
	{
		const headers = new Headers();

		headers.set("Prefer", "return=representation");

		const orderOrError = await this.payPalClient.request<PayPalOrder>(
			{
				method: "POST",
				path: "/v2/checkout/orders/" + id + "/confirm-payment-source",
				headers,
				body,
			});

		return {
			orderOrError,
		};
	}

	async authorizePaymentForOrder(id : string, body : PayPalAuthorizeRequest) : Promise<PayPalAuthorizePaymentForOrderResult>
	{
		const requestId = Math.random().toString();

		const headers = new Headers();

		headers.set("PayPal-Request-Id", requestId);

		headers.set("Prefer", "return=representation");

		const orderOrError = await this.payPalClient.request<PayPalOrder>(
			{
				method: "POST",
				path: "/v2/checkout/orders/" + id + "/authorize",
				headers,
				body,
			});

		return {
			requestId,
			orderOrError,
		};
	}

	async capturePaymentForOrder(id : string, body : PayPalOrderCaptureRequest) : Promise<PayPalCapturePaymentForOrderResult>
	{
		const requestId = Math.random().toString();

		const headers = new Headers();

		headers.set("PayPal-Request-Id", requestId);

		headers.set("Prefer", "return=representation");

		const orderOrError = await this.payPalClient.request<PayPalOrder>(
			{
				method: "POST",
				path: "/v2/checkout/orders/" + id + "/capture",
				headers,
				body,
			});

		return {
			requestId,
			orderOrError,
		};
	}

	async addTrackingToOrder(id : string, body : PayPalTrackerRequest) : Promise<PayPalAddTrackingToOrderResult>
	{
		const orderOrError = await this.payPalClient.request<PayPalOrder>(
			{
				method: "POST",
				path: "/v2/checkout/orders/" + id + "/track",
				body,
			});

		return {
			orderOrError,
		};
	}

	async updateOrCancelTrackingForOrder(order_id : string, tracker_id : string, body : PayPalPatchRequest) : Promise<PayPalUpdateOrCancelTrackingForOrderResult>
	{
		const emptyOrError = await this.payPalClient.request<{}>(
			{
				method: "PATCH",
				path: "/v2/checkout/orders/" + order_id + "/trackers/" + tracker_id,
				body,
			});

		return {
			emptyOrError,
		};
	}
}