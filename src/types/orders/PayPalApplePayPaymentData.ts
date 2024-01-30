//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-apple_pay_payment_data */
export interface PayPalApplePayPaymentData
{
	cryptogram? : string;

	eci_indicator? : string;

	emv_data? : string;

	pin? : string;
}