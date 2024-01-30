//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-capture_status_details */
export interface PayPalCaptureStatusDetails
{
	// noinspection SpellCheckingInspection
	reason? : "BUYER_COMPLAINT" | "CHARGEBACK" | "ECHECK" | "INTERNATIONAL_WITHDRAWAL" | "OTHER" | "PENDING_REVIEW" | "RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION" | "REFUNDED" | "TRANSACTION_APPROVED_AWAITING_FUNDING" | "UNILATERAL" | "VERIFICATION_REQUIRED";
}