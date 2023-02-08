//
// Imports
//

import
{
	PayPalHATEOASLink,
} from "./Shared.js";

//
// Option Interfaces
//

/** Options for PayPal.verifyWebhookSignature. */
export interface PayPalVerifyWebhookSignatureOptions
{
	/** The URL to the certificate used to verify the event from the PAYPAL-CERT-URL header. */
	certificateUrl : string;
	
	/** The raw body of the webhook event. */
	rawBody : string;

	/** The transmission ID from the PAYPAL-TRANSMISSION-ID header. */
	transmissionId : string;
	
	/** The base64 signature from the PAYPAL-TRANSMISSION-SIG header. */
	transmissionSignature : string;
	
	/** The transmission time from the PAYPAL-TRANSMISSION-TIME header. */
	transmissionTime : string;
	
	/** The ID of your webhook. */
	webhookId : string;
}

//
// Request Interfaces
//

/** A verify webhook signature request. */
export interface PayPalVerifyWebhookSignatureRequest
{
	/**
	 * The algorithm that PayPal uses to generate the signature and that you can use to verify the signature.
	 *
	 * Extract this value from the PAYPAL-AUTH-ALGO response header, which is received with the webhook notification.
	 */
	auth_algo : string;

	/**
	 * The X.509 public key certificate.
	 *
	 * Download the certificate from this URL and use it to verify the signature.
	 *
	 * Extract this value from the PAYPAL-CERT-URL response header, which is received with the webhook notification.
	 */
	cert_url : string;

	/**
	 * The ID of the HTTP transmission.
	 *
	 * Contained in the PAYPAL-TRANSMISSION-ID header of the notification message.
	 */
	transmission_id : string;

	/**
	 * The PayPal-generated asymmetric signature.
	 *
	 * Appears in the PAYPAL-TRANSMISSION-SIG header of the notification message.
	 */
	transmission_sig : string;

	/**
	 * The date and time of the HTTP transmission, in Internet date and time format.
	 *
	 * Appears in the PAYPAL-TRANSMISSION-TIME header of the notification message.
	 */
	transmission_time : string;

	/** The ID of the webhook as configured in your Developer Portal account. */
	webhook_id : string;

	/** A webhook event notification. */
	webhook_event : PayPalWebhookEvent;
}

//
// Response Interfaces
//

/** The verify webhook signature response. */
export interface PayPalVerifyWebhookSignatureResponse
{
	verification_status : "SUCCESS" | "FAILURE";
}

//
// Other Interfaces
//

/** A webhook event notification. */
export interface PayPalWebhookEvent
{
	id : string;

	create_time : string;

	resource_type : string;

	event_version : string;

	event_type : PayPalWebhookEventType;

	summary : string;

	resource_version : string;

	resource : unknown;

	links : PayPalHATEOASLink[];
}

//
// Types
//

/** The various types of webhook events. */
export type PayPalWebhookEventType =
	AuthorizedAndCapturedPaymentsWebhookEventType |
	BatchPayoutsWebhookEventType |
	BillingPlansAndAgreementsWebhookEventType |
	LogInWithPayPalWebhookEventType |
	CheckoutBuyerApprovalWebhookEventType |
	DisputesWebhookEventType |
	InvoicingWebhookEventType |
	MarketplacesAndPlatformsWebhookEventType |
	MerchantOnboardingWebhookEventType |
	OrdersWebhookEventType |
	PaymentOrdersWebhookEventType |
	ReferencedPayoutsWebhookEventType |
	SalesWebhookEventType |
	SubscriptionsWebhookEventType |
	VaultWebhookEventType;

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#authorized-and-captured-payments */
type AuthorizedAndCapturedPaymentsWebhookEventType =
	"PAYMENT.AUTHORIZATION.CREATED" |
	"PAYMENT.AUTHORIZATION.VOIDED" |
	"PAYMENT.CAPTURE.COMPLETED" |
	"PAYMENT.CAPTURE.DENIED" |
	"PAYMENT.CAPTURE.PENDING" |
	"PAYMENT.CAPTURE.REFUNDED" |
	"PAYMENT.CAPTURE.REVERSED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#batch-payouts */
type BatchPayoutsWebhookEventType =
	"PAYMENT.PAYOUTSBATCH.DENIED" |
	"PAYMENT.PAYOUTSBATCH.PROCESSING" |
	"PAYMENT.PAYOUTSBATCH.SUCCESS" |
	"PAYMENT.PAYOUTS-ITEM.BLOCKED" |
	"PAYMENT.PAYOUTS-ITEM.CANCELED" |
	"PAYMENT.PAYOUTS-ITEM.DENIED" |
	"PAYMENT.PAYOUTS-ITEM.FAILED" |
	"PAYMENT.PAYOUTS-ITEM.HELD" |
	"PAYMENT.PAYOUTS-ITEM.REFUNDED" |
	"PAYMENT.PAYOUTS-ITEM.RETURNED" |
	"PAYMENT.PAYOUTS-ITEM.SUCCEEDED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#billing-plans-and-agreements */
type BillingPlansAndAgreementsWebhookEventType =
	"BILLING.PLAN.CREATED" |
	"BILLING.PLAN.UPDATED" |
	"BILLING.SUBSCRIPTION.CANCELLED" |
	"BILLING.SUBSCRIPTION.CREATED" |
	"BILLING.SUBSCRIPTION.RE-ACTIVATED" |
	"BILLING.SUBSCRIPTION.SUSPENDED" |
	"BILLING.SUBSCRIPTION.UPDATED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#log-in-with-paypal */
type LogInWithPayPalWebhookEventType =
	"IDENTITY.AUTHORIZATION-CONSENT.REVOKED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#checkout-buyer-approval */
type CheckoutBuyerApprovalWebhookEventType =
	"PAYMENTS.PAYMENT.CREATED" |
	"CHECKOUT.ORDER.APPROVED" |
	"CHECKOUT.CHECKOUT.BUYER-APPROVED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#disputes */
type DisputesWebhookEventType =
	"CUSTOMER.DISPUTE.CREATED" |
	"CUSTOMER.DISPUTE.RESOLVED" |
	"CUSTOMER.DISPUTE.UPDATED" |
	"RISK.DISPUTE.CREATED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#invoicing */
type InvoicingWebhookEventType =
	"INVOICING.INVOICE.CANCELLED" |
	"INVOICING.INVOICE.CREATED" |
	"INVOICING.INVOICE.PAID" |
	"INVOICING.INVOICE.REFUNDED" |
	"INVOICING.INVOICE.SCHEDULED" |
	"INVOICING.INVOICE.UPDATED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#marketplaces-and-platforms */
type MarketplacesAndPlatformsWebhookEventType =
	"CHECKOUT.ORDER.COMPLETED" |
	"CHECKOUT.ORDER.APPROVED" |
	"CHECKOUT.ORDER.PROCESSED" |
	"CUSTOMER.ACCOUNT-LIMITATION.ADDED" |
	"CUSTOMER.ACCOUNT-LIMITATION.ESCALATED" |
	"CUSTOMER.ACCOUNT-LIMITATION.LIFTED" |
	"CUSTOMER.ACCOUNT-LIMITATION.UPDATED" |
	"CUSTOMER.MERCHANT-INTEGRATION.CAPABILITY-UPDATED" |
	"CUSTOMER.MERCHANT-INTEGRATION.PRODUCT-SUBSCRIPTION-UPDATED" |
	"CUSTOMER.MERCHANT-INTEGRATION.SELLER-ALREADY-INTEGRATED" |
	"CUSTOMER.MERCHANT-INTEGRATION.SELLER-ONBOARDING-INITIATED" |
	"CUSTOMER.MERCHANT-INTEGRATION.SELLER-CONSENT-GRANTED" |
	"CUSTOMER.MERCHANT-INTEGRATION.SELLER-EMAIL-CONFIRMED" |
	"MERCHANT.ONBOARDING.COMPLETED" |
	"MERCHANT.PARTNER-CONSENT.REVOKED" |
	"PAYMENT.CAPTURE.COMPLETED" |
	"PAYMENT.CAPTURE.DENIED" |
	"PAYMENT.CAPTURE.REFUNDED" |
	"PAYMENT.REFERENCED-PAYOUT-ITEM.COMPLETED" |
	"PAYMENT.REFERENCED-PAYOUT-ITEM.FAILED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#merchant-onboarding */
type MerchantOnboardingWebhookEventType =
	"MERCHANT.ONBOARDING.COMPLETED" |
	"MERCHANT.PARTNER-CONSENT.REVOKED" |
	"CUSTOMER.MANAGED-ACCOUNT.ACCOUNT-CREATED" |
	"CUSTOMER.MANAGED-ACCOUNT.CREATION-FAILED" |
	"CUSTOMER.MANAGED-ACCOUNT.ACCOUNT-UPDATED" |
	"CUSTOMER.MANAGED-ACCOUNT.ACCOUNT-STATUS-CHANGED" |
	"CUSTOMER.MANAGED-ACCOUNT.RISK-ASSESSED" |
	"CUSTOMER.MANAGED-ACCOUNT.NEGATIVE-BALANCE-NOTIFIED" |
	"CUSTOMER.MANAGED-ACCOUNT.NEGATIVE-BALANCE-DEBIT-INITIATED" |
	"CUSTOMER.ACCOUNT-LIMITATION.ADDED" |
	"CUSTOMER.ACCOUNT-LIMITATION.LIFTED" |
	"CUSTOMER.ACCOUNT-LIMITATION.UPDATED" |
	"CUSTOMER.ACCOUNT-LIMITATION.ESCALATED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#orders */
type OrdersWebhookEventType =
	"CHECKOUT.ORDER.COMPLETED" |
	"CHECKOUT.ORDER.APPROVED" |
	"CHECKOUT.ORDER.PROCESSED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#payment-orders */
type PaymentOrdersWebhookEventType =
	"PAYMENT.ORDER.CANCELLED" |
	"PAYMENT.ORDER.CREATED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#referenced-payouts */
type ReferencedPayoutsWebhookEventType =
	"PAYMENT.REFERENCED-PAYOUT-ITEM.COMPLETED" |
	"PAYMENT.REFERENCED-PAYOUT-ITEM.FAILED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#sales */
type SalesWebhookEventType =
	"PAYMENT.SALE.COMPLETED" |
	"PAYMENT.SALE.DENIED" |
	"PAYMENT.SALE.PENDING" |
	"PAYMENT.SALE.REFUNDED" |
	"PAYMENT.SALE.REVERSED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#subscriptions */
type SubscriptionsWebhookEventType =
	"CATALOG.PRODUCT.CREATED" |
	"CATALOG.PRODUCT.UPDATED" |
	"PAYMENT.SALE.COMPLETED" |
	"PAYMENT.SALE.REFUNDED" |
	"PAYMENT.SALE.REVERSED" |
	"BILLING.PLAN.CREATED" |
	"BILLING.PLAN.UPDATED" |
	"BILLING.PLAN.ACTIVATED" |
	"BILLING.PLAN.PRICING-CHANGE.ACTIVATED" |
	"BILLING.PLAN.DEACTIVATED" |
	"BILLING.SUBSCRIPTION.CREATED" |
	"BILLING.SUBSCRIPTION.ACTIVATED" |
	"BILLING.SUBSCRIPTION.UPDATED" |
	"BILLING.SUBSCRIPTION.EXPIRED" |
	"BILLING.SUBSCRIPTION.CANCELLED" |
	"BILLING.SUBSCRIPTION.SUSPENDED" |
	"BILLING.SUBSCRIPTION.PAYMENT.FAILED";

/** @see https://developer.paypal.com/api/rest/webhooks/event-names/#vault */
type VaultWebhookEventType =
	"VAULT.CREDIT-CARD.CREATED" |
	"VAULT.CREDIT-CARD.DELETED" |
	"VAULT.CREDIT-CARD.UPDATED";