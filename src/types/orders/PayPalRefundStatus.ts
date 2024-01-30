//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-refund_status */
export interface PayPalRefundStatus
{
	status? : "CANCELLED" | "FAILED" | "PENDING" | "COMPLETED";
}