//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-capture_status */
export type PayPalCaptureStatus = "COMPLETED" | "DECLINED" | "PARTIALLY_REFUNDED" | "PENDING" | "REFUNDED" | "FAILED";