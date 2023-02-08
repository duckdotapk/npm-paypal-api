//
// Interfaces
//

/** The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any. */
export interface PayPalAmountBreakdown
{
	/**
	 * The subtotal for all items.
	 *
	 * Required if the request includes purchase_units[].items[].unit_amount.
	 * Must equal the sum of (items[].unit_amount * items[].quantity) for all items.
	 * item_total.value can not be a negative number.
	 */
	item_total? : PayPalAmount;

	/**
	 * The shipping fee for all items within a given purchase_unit.
	 *
	 * shipping.value can not be a negative number.
	 */
	shipping? : PayPalAmount;

	/**
	 * The handling fee for all items within a given purchase_unit.
	 *
	 * handling.value can not be a negative number.
	 */
	handling? : PayPalAmount;

	/**
	 * The total tax for all items.
	 *
	 * Required if the request includes purchase_units.items.tax.
	 * Must equal the sum of (items[].tax * items[].quantity) for all items.
	 * tax_total.value can not be a negative number.
	 */
	tax_total? : PayPalAmount;

	/**
	 * The insurance fee for all items within a given purchase_unit.
	 *
	 * insurance.value can not be a negative number.
	 */
	insurance? : PayPalAmount;

	/**
	 * The shipping discount for all items within a given purchase_unit.
	 *
	 * shipping_discount.value can not be a negative number.
	 */
	shipping_discount? : PayPalAmount;

	/**
	 * The discount for all items within a given purchase_unit.
	 *
	 * discount.value can not be a negative number.
	 */
	discount? : PayPalAmount;
}

/**
 * The total order amount.
 * 
 * The amount must be a positive number.
 * 
 * For listed of supported currencies and decimal precision,
 * @see https://developer.paypal.com/docs/integration/direct/rest/currency-codes/
 */
export interface PayPalAmount
{
	/**
	 * The three-character ISO-4217 currency code that identifies the currency.
	 *
	 * See https://developer.paypal.com/api/rest/reference/currency-codes/
	 *
	 * 3 characters.
	 */
	currency_code : string;

	/**
	 * The value, which might be:
	 * 	- An integer for currencies like JPY that are not typically fractional.
	 * 	- A decimal fraction for currencies like TND that are subdivided into thousandths.
	 *
	 * For the required number of decimal places for a currency code, see https://developer.paypal.com/api/rest/reference/currency-codes/
	 *
	 * 32 characters max.
	 */
	value : string;
}

/**
 * The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.
 * 
 * If you specify amount.breakdown, the amount equals item_total plus tax_total plus shipping plus handling plus insurance minus shipping_discount minus discount.
 * 
 * The amount must be a positive number.
 * 
 * For listed of supported currencies and decimal precision,
 * @see https://developer.paypal.com/docs/integration/direct/rest/currency-codes/
 */
export interface PayPalAmountWithBreakdown extends PayPalAmount
{
	/**
	 * The breakdown of the amount.
	 *
	 * Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.
	 */
	breakdown? : PayPalAmountBreakdown;
}

/** The error details. */
export interface PayPalError
{
	/** The human-readable, unique name of the error. */
	name : string;

	/** The message that describes the error. */
	message : string;

	/** The PayPal internal ID. Used for correlation purposes. */
	debug_id : string;

	/** The information link, or URI, that shows detailed information about this error for the developer. */
	information_link? : string;

	/** An array of additional details about the error. */
	details? : unknown[];

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}

/** The error details. Required for client-side 4XX errors. */
export interface PayPalErrorDetails
{
	/**
	 * The field that caused the error. 
	 * 
	 * If this field is in the body, set this value to the field's JSON pointer value. 
	 * 
	 * Required for client-side errors.
	 */
	field? : string;

	/** The value of the field that caused the error. */
	value? : string;

	/** 
	 * The location of the field that caused the error. 
	 * 
	 * Value is "body", "path", or "query".
	 * 
	 * Defaults to "body".
	 */
	location? : string;

	/** The unique, fine-grained application-level error code. */
	string : string;

	/**
	 * The human-readable description for an issue. 
	 * 
	 * The description can change over the lifetime of an API, so clients must not depend on this value.
	 */
	description? : string;
}

/** Hypermedia as the Engine of Application State (HATEOAS) is a constraint of the REST application architecture that distinguishes it from other network application architectures. */
export interface PayPalHATEOASLink
{
	/**
	 * The complete target URL.
	 *
	 * To make the related call, combine the method with this URI Template-formatted link.
	 *
	 * See https://tools.ietf.org/html/rfc6570
	 *
	 * For pre-processing, include the $, (, and ) characters.
	 *
	 * The href is the key HATEOAS component that links a completed call with a subsequent call.
	 */
	href : string;

	/**
	 * The link relation type, which serves as an ID for a link that unambiguously describes the semantics of the link.
	 *
	 * See https://www.iana.org/assignments/link-relations/link-relations.xhtml
	 */
	rel : string;

	/** The HTTP method required to make the related call. */
	method? : "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "CONNECT" | "OPTIONS" | "PATCH";

	/** The encoding type for the link's response. */
	encType? : string;
}

/** The JSON patch object to apply partial updates to resources. */
export interface PayPalPatch
{
	/** The operation. */
	op : PayPalPatchOperation;

	/** 
	 * The JSON Pointer to the target document location at which to complete the operation. 
	 * 
	 * @see https://tools.ietf.org/html/rfc6901
	 */
	path? : string;

	/**
	 * The value to apply. 
	 * 
	 * The "remove" operation does not require a value.
	 */
	value? : object;

	/**
	 * The JSON Pointer to the target document location from which to move the value. 
	 * 
	 * Required for the "move" operation.
	 * 
	 * @see https://tools.ietf.org/html/rfc6901
	 */
	from? : string;
}

//
// Types
//

/**
 * The funds that are held on behalf of the merchant.
 *
 * INSTANT: The funds are released to the merchant immediately.
 * DELAYED: The funds are held for a finite number of days. The actual duration depends on the region and type of integration.
 * 	You can release the funds through a referenced payout.
 * 	Otherwise, the funds disbursed automatically after the specified duration.
 */
export type PayPalDisbursementMode = "INSTANT" | "DELAYED";

/**
 * The operation.
 * 
 * @see https://www.rfc-editor.org/rfc/rfc6902#section-4.1
 */
export type PayPalPatchOperation = "add" | "remove" | "replace" | "move" | "copy" | "test";