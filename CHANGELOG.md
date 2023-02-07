## 0.1.8

* **[BREAKING CHANGE]** Changed `verifyWebhookSignature` to return the actual response instead of a boolean.

## 0.1.7

* **[BREAKING CHANGE]** Added new `paypal_request_id` argument to `createOrder`.

## 0.1.6
Adding `"type": "module"` to package.json.

## 0.1.5
Fixed a mistake where the `application_context` property on a `PayPalCreateOrderRequest` was not optional.

## 0.1.4

* **[BREAKING CHANGE]** Renamed `PayPalPayPalPaymentObject` to `PayPalWalletResponse`.
	* This is a better name that I did not notice on PayPal's confusing, badly laid out documentation.
	* Also fixed a mistake where the properties of this object were not optional.
* Fixed a mistake where the properties of a `PayPalWallet` were not optional.

## 0.1.3

* Fixed a mistake where the `payment_source` property on a `PayPalOrder` was not optional.
* Fixed a mistake where the properties of a `PayPalPaymentSource` were not optional.

## 0.1.2
Adding exports I forgot for `Orders` and `WebhooksManagement` types.

## 0.1.1
Added build scripts that actually compile the TypeScript to JavaScript before publishing.

(This is, as a result, the first version that actually contains code.)

## 0.1.0
Initial version.