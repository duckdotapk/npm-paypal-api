//
// Imports
//

import 
{ 
	PayPalAmount,
	PayPalDisbursementMode,
	PayPalHATEOASLink, 
} from "./Shared.js";

//
// Other Interfaces
//

/** A captured payment. */
export interface PayPalCapture
{
	/** The status of the captured payment. */
	status? : PayPalCaptureStatus;

	/** The details of the captured payment status. */
	status_details? : PayPalCaptureStatusDetails;

	/** The PayPal-generated ID for the captured payment. */
	id? : string;

	/** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
	invoice_id? : string;

	/** The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. */
	custom_id? : string;

	/**  
	 * Indicates whether you can make additional captures against the authorized payment. 
	 * 
	 * Set to true if you do not intend to capture additional payments against the authorization. 
	 * 
	 * Set to false if you intend to capture additional payments against the authorization.
	 */
	final_capture? : boolean;

	/** The funds that are held on behalf of the merchant. */
	disbursement_mode? : PayPalDisbursementMode;

	/** An array of related HATEOAS links. */
	links? : PayPalHATEOASLink[];

	/** The amount for this captured payment. */
	amount? : PayPalAmount,

	/** The level of protection offered as defined by PayPal Seller Protection for Merchants. */
	seller_protection? : PayPalSellerProtection;

	/** 
	 * The detailed breakdown of the capture activity. 
	 * 
	 * This is not available for transactions that are in pending state.
	 * 
	 * TODO: this
	 */
	seller_receivable_breakdown? : unknown;

	/**
	 * An object that provides additional processor information for a direct credit card transaction.
	 * 
	 * TODO: this
	 */
	processor_response? : unknown;

	/** 
	 * The date and time when the transaction occurred, in Internet date and time format.
	 * 
	 * @see https://tools.ietf.org/html/rfc3339#section-5.6
	 */
	create_time? : string;

	/**
	 * The date and time when the transaction was last updated, in Internet date and time format.
	 * 
	 * @see https://tools.ietf.org/html/rfc3339#section-5.6
	 */
	update_time? : string;

	/** An object that provides supplementary/additional data related to a payment transaction. */
	supplementary_data? : PayPalCaptureSupplementaryData;
}

/** The details of the captured payment status. */
export interface PayPalCaptureStatusDetails
{
	/** The reason why the captured payment status is PENDING or DENIED. */
	reason? : PayPalCaptureStatusReason;
}

/** An object that provides supplementary/additional data related to a payment transaction. */
export interface PayPalCaptureSupplementaryData
{
	/** Identifiers related to a specific resource. */
	related_ids? : PayPalCaptureSupplementaryDataRelatedIds;
}

/** Identifiers related to a specific resource. */
export interface PayPalCaptureSupplementaryDataRelatedIds
{
	/** Order ID related to the resource. */
	order_id? : string;

	/** Authorization ID related to the resource. */
	authorization_id? : string;

	/** Capture ID related to the resource. */
	capture_id? : string;
}

/** The level of protection offered as defined by PayPal Seller Protection for Merchants. */
export interface PayPalSellerProtection
{
	/** Indicates whether the transaction is eligible for seller protection. For information, see PayPal Seller Protection for Merchants. */
	status? : PayPalSellerProtectionStatus;

	/** An array of conditions that are covered for the transaction. */
	dispute_categories? : string[];
}

//
// Types
//

/**
 * The status of a PayPal capture.
 * 
 * COMPLETED: The funds for this captured payment were credited to the payee's PayPal account.
 * DECLINED: The funds could not be captured.
 * PARTIALLY_REFUNDED: An amount less than this captured payment's amount was partially refunded to the payer.
 * PENDING: The funds for this captured payment was not yet credited to the payee's PayPal account. For more information, see status.details.
 * REFUNDED: An amount greater than or equal to this captured payment's amount was refunded to the payer.
 * FAILED: There was an error while capturing payment. 
 */
export type PayPalCaptureStatus = "COMPLETED" | "DECLINED" | "PARTIALLY_REFUNDED" | "PENDING" | "REFUNDED" | "FAILED";

/**
 * The reason why the captured payment status is PENDING or DENIED.
 * 
 * BUYER_COMPLAINT: The payer initiated a dispute for this captured payment with PayPal.
 * CHARGEBACK: The captured funds were reversed in response to the payer disputing this captured payment with the issuer of the financial instrument used to pay for this captured payment.
 * ECHECK: The payer paid by an eCheck that has not yet cleared.
 * INTERNATIONAL_WITHDRAWAL: Visit your online account. In your Account Overview, accept and deny this payment.
 * OTHER: No additional specific reason can be provided. For more information about this captured payment, visit your account online or contact PayPal.
 * PENDING_REVIEW: The captured payment is pending manual review.
 * RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION: The payee has not yet set up appropriate receiving preferences for their account. 
 * 	For more information about how to accept or deny this payment, visit your account online. 
 * 	This reason is typically offered in scenarios such as when the currency of the captured payment is different from the primary holding currency of the payee.
 * REFUNDED: The captured funds were refunded.
 * TRANSACTION_APPROVED_AWAITING_FUNDING: The payer must send the funds for this captured payment. This code generally appears for manual EFTs. 
 * UNILATERAL: The payee does not have a PayPal account.
 * VERIFICATION_REQUIRED: The payee's PayPal account is not verified.
 */
export type PayPalCaptureStatusReason = "BUYER_COMPLAINT" | "CHARGEBACK" | "ECHECK" | "INTERNATIONAL_WITHDRAWAL" | "OTHER" | "PENDING_REVIEW" | "RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION" | "REFUNDED" | "TRANSACTION_APPROVED_AWAITING_FUNDING" | "UNILATERAL" | "VERIFICATION_REQUIRED";

/**
 * Indicates whether the transaction is eligible for seller protection. For information, see PayPal Seller Protection for Merchants.
 * 
 * ELIGIBLE: Your PayPal balance remains intact if the customer claims that they did not receive an item or the account holder claims that they did not authorize the payment.
 * PARTIALLY_ELIGIBLE: Your PayPal balance remains intact if the customer claims that they did not receive an item.
 * NOT_ELIGIBLE: This transaction is not eligible for seller protection.
 */
export type PayPalSellerProtectionStatus = "ELIGIBLE" | "PARTIALLY_ELIGIBLE" | "NOT_ELIGIBLE";