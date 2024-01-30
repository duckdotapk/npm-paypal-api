//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-authorization_status */
export type PayPalAuthorizationStatus = "CREATED" | "CAPTURED" | "DENIED" | "PARTIALLY_CAPTURED" | "VOIDED" | "PENDING";