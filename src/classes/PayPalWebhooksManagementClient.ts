//
// Imports
//

import { PayPalClient } from "./PayPalClient.js";

import { PayPalVerifyWebhookSignature } from "../types/webhooks-management/PayPalVerifyWebhookSignature.js";
import { PayPalVerifyWebhookSignatureResponse } from "../types/webhooks-management/PayPalVerifyWebhookSignatureResponse.js";

import { PayPalError } from "../types/PayPalError.js";

//
// Class
//

export interface PayPalWebhooksManagementClientOptions
{
	payPalClient : PayPalClient;
}

export interface PayPalVerifyWebhookSignatureResult
{
	verifyWebhookSignatureResponseOrError : PayPalVerifyWebhookSignatureResponse | PayPalError;
}

export class PayPalWebhooksManagementClient
{
	payPalClient : PayPalClient;

	constructor(options : PayPalWebhooksManagementClientOptions)
	{
		this.payPalClient = options.payPalClient;
	}

	/**
	 * Verifies the signature of a webhook request.
	 *
	 * @param partialBody The body of the request, excluding "webhook_event" for technical reasons.
	 * @param rawBody The raw body of the request. THIS MUST NOT BE TAMPERED WITH OR VERIFICATION WILL FAIL.
	 * @see https://stackoverflow.com/a/61420573/18030485
	 */
	async verifyWebhookSignature(partialBody : Omit<PayPalVerifyWebhookSignature, "webhook_event">, rawBody : string) : Promise<PayPalVerifyWebhookSignatureResult>
	{
		const body =
			{
				...partialBody,

				webhook_event: "__RAW_BODY__",
			};

		// HACK: This is a hack to workaround PayPal not doing canonicalization on the JSON body.
		//	See https://stackoverflow.com/a/61420573/18030485 for more details and
		//	also the code that inspired this.
		const jsonBody = JSON.stringify(body).replace("\"__RAW_BODY__\"", rawBody);

		const verifyWebhookSignatureResponseOrError = await this.payPalClient.request<PayPalVerifyWebhookSignatureResponse>(
			{
				method: "POST",
				path: "/v1/notifications/verify-webhook-signature",
				body: jsonBody,
			});

		return {
			verifyWebhookSignatureResponseOrError,
		};
	}
}