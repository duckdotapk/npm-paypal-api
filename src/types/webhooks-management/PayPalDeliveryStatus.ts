//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-DeliveryStatus */
export type PayPalDeliveryStatus = "SENT" | "DELIVERED" | "OPENED" | "FAIL_HARD" | "FAIL_SOFT" | "EXPIRED_BEFORE_DELIVERY";