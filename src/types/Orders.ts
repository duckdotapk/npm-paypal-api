//
// Imports
//

import
{
	PayPalHATEOASLink,
} from "./Shared.js";

//
// Request Interfaces
//

/** Completes an capture payment for an order. */
export interface PayPalCaptureOrderRequest
{
	/** The payment source definition. */
	payment_source? : PayPalPaymentSource;
}

/** The order request details. */
export interface PayPalCreateOrderRequest
{
	/**
	 * An array of purchase units.
	 *
	 * Each purchase unit establishes a contract between a payer and the payee.
	 *
	 * Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.
	 *
	 * 1 to 10 purchase units.
	 */
	purchase_units : PayPalPurchaseUnit[];

	/** The intent to either capture payment immediately or authorize a payment for an order after order creation. */
	intent : PayPalCheckoutPaymentIntent;

	/** 
	 * The customer who approves and pays for the order. 
	 * 
	 * The customer is also known as the payer.
	 */
	payer? : PayPalCustomer;

	/** The payment source definition. */
	payment_source? : PayPalPaymentSource;

	/** Customize the payer experience during the approval process for the payment with PayPal. */
	application_context : unknown;
}

//
// Other Interfaces
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

/** The customer who approves and pays for the order. The customer is also known as the payer. */
export interface PayPalCustomer
{
	/**
	 * The email address of the payer.
	 *
	 * 3 to 254 characters.
	 */
	email_address? : string;

	/** The PayPal-assigned ID for the payer. */
	payer_id? : string;

	/**
	 * The name of the payer.
	 *
	 * Supports only the given_name and surname properties.
	 */
	name? : PayPalName;

	/**
	 * The phone number of the customer.
	 *
	 * Available only when you enable the Contact Telephone Number option in the Profile & Settings for the merchant's PayPal account.
	 *
	 * The phone.phone_number supports only national_number.
	 */
	phone? :
	{
		/**
		 * The phone type.
		 */
		phone_type? : PayPalPhoneType,

		/**
		 * The phone number, in its canonical international E.164 numbering plan format. 
		 * 
		 * Supports only the national_number property.
		 */
		phone_number : PayPalPhone;
	};

	/**
	 * The birth date of the payer in YYYY-MM-DD format.
	 *
	 * 10 characters.
	 */
	birth_date? : string;

	/**
	 * The tax information of the payer.
	 *
	 * Required only for Brazilian payer's.
	 *
	 * Both tax_id and tax_id_type are required.
	 */
	tax_info? : PayPalTaxInformation;

	/**
	 * The address of the payer.
	 *
	 * Supports only the address_line_1, address_line_2, admin_area_1, admin_area_2, postal_code, and country_code properties.
	 *
	 * Also referred to as the billing address of the customer.
	 */
	address? : PayPalPortablePostalAddress;
}

/** Customizes the payer experience during the approval process for the payment. */
export interface PayPalExperienceContext
{
	/**
	 * The label that overrides the business name in the PayPal account on the PayPal site.
	 *
	 * The pattern is defined by an external party and supports Unicode.
	 *
	 * 1 to 127 characters.
	 */
	brand_name? : string;

	/**
	 * The location from which the shipping address is derived.
	 *
	 * GET_FROM_FILE: Get the customer-provided shipping address on the PayPal site.
	 *
	 * NO_SHIPPING: Redacts the shipping address from the PayPal site. Recommended for digital goods.
	 *
	 * SET_PROVIDED_ADDRESS: Get the merchant-provided address.
	 * 	The customer cannot change this address on the PayPal site.
	 * 	If merchant does not pass an address, customer can choose the address on PayPal pages.
	 */
	shipping_preference? : "GET_FROM_FILE" | "NO_SHIPPING" | "SET_PROVIDED_ADDRESS";

	/**
	 * The BCP 47-formatted locale of pages that the PayPal payment experience shows.
	 *
	 * PayPal supports a five-character code. For example:
	 * 	da-DK, he-IL, id-ID, ja-JP, no-NO, pt-BR,
	 * 	ru-RU, sv-SE, th-TH, zh-CN, zh-HK, zh-TW.
	 *
	 * 2 to 10 characters.
	 */
	locale? : string;

	/**
	 * The URL where the customer is redirected after the customer approves the payment.
	 */
	return_url? : string;

	/**
	 * The URL where the customer is redirected after the customer cancels the payment.
	 */
	cancel_url? : string;
}

/** The details for the items to be purchased. */
export interface PayPalItem
{
	/**
	 * The item name or title.
	 *
	 * 1 to 127 characters.
	 */
	name : string;

	/**
	 * The item quantity. Must be a whole number.
	 *
	 * 10 characters max.
	 */
	quantity : string;

	/**
	 * The detailed item description.
	 *
	 * 127 characters max.
	 */
	description? : string;

	/**
	 * The stock keeping unit (SKU) for the item.
	 *
	 * 127 characters max.
	 */
	sku? : string;

	/**
	 * The item category type.
	 *
	 * DIGITAL_GOODS: Goods that are stored, delivered, and used in their electronic format.
	 *
	 * PHYSICAL_GOODS: A tangible item that can be shipped with proof of delivery.
	 *
	 * DONATION: A contribution or gift for which no good or service is exchanged, usually to a not for profit organization.
	 */
	category? : PayPalItemCategory;

	/**
	 * The item price or rate per unit.
	 *
	 * If you specify unit_amount, purchase_units[].amount.breakdown.item_total is required.
	 * Must equal unit_amount * quantity for all items.
	 * unit_amount.value can not be a negative number.
	 */
	unit_amount : PayPalAmount;

	/**
	 * The item tax for each unit.
	 *
	 * If tax is specified, purchase_units[].amount.breakdown.tax_total is required.
	 * Must equal tax * quantity for all items.
	 * tax.value can not be a negative number.
	 */
	tax? : PayPalAmount;
}

/** The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. */
export interface PayPalMerchantBase
{
	/** The email address of merchant. */
	email_address? : string;

	/** The encrypted PayPal account ID of the merchant. */
	merchant_id? : string;
}

/** The name of the party. */
export interface PayPalName
{
	/**
	 * When the party is a person, the party's given, or first, name.
	 *
	 * 140 characters max.
	 */
	given_name? : string;

	/**
	 * When the party is a person, the party's surname or family name.
	 *
	 * Also known as the last name.
	 *
	 * Required when the party is a person.
	 *
	 * Use also to store multiple surnames including the matronymic, or mother's, surname.
	 *
	 * 140 characters max.
	 */
	surname? : string;

	/**
	 * TODO: document this
	 *
	 * This field is only offhandedly mentioned in the PayPal API docs.
	 */
	full_name? : string;
}

/** The order details. */
export interface PayPalOrder
{
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

	/** The ID of the order. */
	id? : string;

	/** The instruction to process an order. */
	processing_instruction? : PayPalOrderProcessingInstruction;

	/**
	 * An array of purchase units. 
	 * 
	 * Each purchase unit establishes a contract between a customer and merchant. 
	 * 
	 * Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant.
	 * 
	 * 1 to 10 items.
	 */
	purchase_units? : PayPalPurchaseUnit[];

	/**
	 * An array of request-related HATEOAS links. 
	 * 
	 * To complete payer approval, use the approve link to redirect the payer.
	 * 
	 * The API caller has 3 hours (default setting, this which can be changed by your account manager to 24/48/72 hours to accommodate your use case) 
	 * 	from the time the order is created, to redirect your payer. 
	 * 
	 * Once redirected, the API caller has 3 hours for the payer to approve the order and either authorize or capture the order. 
	 * 
	 * If you are not using the PayPal JavaScript SDK to initiate PayPal Checkout (in context) ensure that you 
	 * 	include application_context.return_url is specified or you will get 
	 * 	"We're sorry, Things don't appear to be working at the moment" 
	 * 	after the payer approves the payment.
	 */
	links? : PayPalHATEOASLink[];

	/** The payment source used to fund the payment. */
	payment_source? : PayPalPaymentSource;

	/** The intent to either capture payment immediately or authorize a payment for an order after order creation. */
	intent? : PayPalCheckoutPaymentIntent;

	/** The customer who approves and pays for the order. The customer is also known as the payer. */
	payer : PayPalCustomer;

	/** The order status. */
	status : PayPalOrderStatus;
}

/** 
 * Any additional payment instructions to be consider during payment processing. 
 * 
 * This processing instruction is applicable for Capturing an order or Authorizing an Order.
 */
export interface PayPalPaymentInstruction
{
	/**
	 * An array of various fees, commissions, tips, or donations.
	 *
	 * This field is only applicable to merchants that been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability.
	 */
	platform_fees? : PayPalPlatformFee[];

	/**
	 * This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction.
	 *
	 * The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager.
	 *
	 * Specifying values other than the one provided to you by your account manager would result in an error.
	 *
	 * 1 to 20 characters.
	 */
	payee_pricing_tier_id? : string;

	/**
	 * FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.
	 *
	 * 1 to 4000 characters.
	 */
	payee_receivable_fx_rate_id? : string;

	/**
	 * The funds that are held payee by the marketplace/platform.
	 *
	 * This field is only applicable to merchants that been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability.
	 */
	disbursement_mode? : PayPalDisbursementMode;
}

/** The payment source used to fund the payment. */
export interface PayPalPaymentSource
{
	/** The payment card to use to fund a payment. Card can be a credit or debit card. */
	card? : unknown;

	/** Information used to pay Bancontact. */
	bancontact? : unknown;

	/** Information used to pay using BLIK. */
	blik? : unknown;

	/** Information used to pay using eps. */
	eps? : unknown;

	/** Information needed to pay using giropay. */
	giropay? : unknown;

	/** Information used to pay using iDEAL. */
	ideal? : unknown;

	/** Information used to pay using MyBank. */
	mybank? : unknown;

	/** Information used to pay using P24(Przelewy24). */
	p24? : unknown;

	/** Information used to pay using Sofort. */
	sofort? : unknown;

	/** Information needed to pay using Trustly. */
	trustly? : unknown;

	/** The PayPal Wallet response. */
	paypal? : PayPalPayPalPaymentObject | PayPalWallet;
}

/** The PayPal wallet response. */
export interface PayPalPayPalPaymentObject
{
	/** The phone type. */
	phone_type : PayPalPhoneType;

	/** The email address of the PayPal account holder. */
	email_address : string;

	/** The PayPal-assigned ID for the PayPal account holder. */
	account_id : string;

	/**
	 * The name of the PayPal account holder. 
	 * 
	 * Supports only the given_name and surname properties.
	 */
	name : PayPalName;

	/**
	 * The phone number, in its canonical international E.164 numbering plan format. 
	 * 
	 * Available only when you enable the Contact Telephone Number option in the Profile & Settings for the merchant's PayPal account. 
	 * 
	 * Supports only the national_number property.
	 */
	phone_number : PayPalPhone;

	/** The birth date of the PayPal account holder in YYYY-MM-DD format. */
	birth_date : string;

	/** 
	 * The tax information of the PayPal account holder. 
	 * 
	 * Required only for Brazilian PayPal account holder's. 
	 * 
	 * Both tax_id and tax_id_type are required.
	 */
	tax_info : PayPalTaxInformation;

	/**
	 * The address of the PayPal account holder. 
	 * 
	 * Supports only the address_line_1, address_line_2, admin_area_1, admin_area_2, postal_code, and country_code properties. 
	 * 
	 * Also referred to as the billing address of the customer.
	 */
	address : PayPalPortablePostalAddress;
}

/** The phone number in its canonical international E.164 numbering plan format. */
export interface PayPalPhone
{
	/**
	 * The national number, in its canonical international E.164 numbering plan format.
	 *
	 * See https://www.itu.int/rec/T-REC-E.164/en
	 *
	 * The combined length of the country calling code (CC) and the national number must not be greater than 15 digits.
	 *
	 * The national number consists of a national destination code (NDC) and subscriber number (SN).
	 *
	 * 1 to 14 characters.
	 */
	national_number : string;
}

/** Disbursement */
export interface PayPalPlatformFee
{
	/** The fee for this transaction. */
	amount : PayPalAmount;

	/** The recipient of the fee for this transaction. If you omit this value, the default is the API caller. */
	payee? : PayPalMerchantBase;
}

/**
 * The portable international postal address. 
 * 
 * Maps to AddressValidationMetadata and HTML 5.1 Autofilling form controls: the autocomplete attribute.
 * 
 * @see https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata
 * @see https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute
 */
export interface PayPalPortablePostalAddress
{
	/**
	 * The first line of the address, such as number and street, for example, 173 Drury Lane.
	 *
	 * Needed for data entry, and Compliance and Risk checks.
	 *
	 * This field needs to pass the full address.
	 *
	 * 300 characters max.
	 */
	address_line_1? : string;

	/**
	 * The second line of the address, for example, a suite or apartment number.
	 *
	 * 300 characters max.
	 */
	address_line_2? : string;

	/**
	 * A city, town, or village. Smaller than admin_area_level_1.
	 *
	 * 120 characters max.
	 */
	admin_area_2? : string;

	/**
	 * The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision.
	 *
	 * This data is formatted for postal delivery, for example, CA and not California. Value, by country, is:
	 * 	- UK. A county.
	 * 	- US. A state.
	 * 	- Canada. A province.
	 * 	- Japan. A prefecture.
	 * 	- Switzerland. A kanton.
	 *
	 * 300 characters max.
	 */
	admin_area_1? : string;

	/**
	 * The postal code, which is the ZIP code or equivalent.
	 *
	 * Typically required for countries with a postal code or an equivalent.
	 *
	 * See https://en.wikipedia.org/wiki/Postal_code
	 */
	postal_code? : string;

	/**
	 * The 2-character ISO 3166-1 code that identifies the country or region.
	 *
	 * See https://developer.paypal.com/api/rest/reference/country-codes/
	 *
	 * Note: The country code for Great Britain is GB and not UK as used in the top-level domain names for that country.
	 * 	Use the C2 country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.
	 *
	 * 2 characters.
	 */
	country_code : string;
}

/** The purchase unit details. Used to capture required information for the payment contract. */
export interface PayPalPurchaseUnit
{	
	/**
	 * The API caller-provided external ID for the purchase unit.
	 *
	 * Required for multiple purchase units when you must update the order through PATCH.
	 *
	 * If you omit this value and the order contains only one purchase unit, PayPal sets this value to default.
	 *
	 * 1 to 256 characters.
	 * 
	 * Note: If there are multiple purchase units, reference_id is required for each purchase unit.
	 */
	reference_id? : string;

	/**
	 * The purchase description.
	 *
	 * The maximum length of the character is dependent on the type of characters used.
	 *
	 * The character length is specified assuming a US ASCII character.
	 *
	 * Depending on type of character; (e.g. accented character, Japanese characters)
	 * 	the number of characters that that can be specified as input might not equal the permissible max length.
	 *
	 * 1 to 127 characters.
	 */
	description? : string;

	/**
	 * The API caller-provided external ID.
	 *
	 * Used to reconcile client transactions with PayPal transactions.
	 *
	 * Appears in transaction and settlement reports but is not visible to the payer.
	 *
	 * 1 to 127 characters.
	 */
	custom_id? : string;

	/**
	 * The API caller-provided external invoice number for this order.
	 *
	 * Appears in both the payer's transaction history and the emails that the payer receives.
	 *
	 * 1 to 127 characters.
	 */
	invoice_id? : string;

	/**
	 * The PayPal-generated ID for the purchase unit.
	 *
	 * This ID appears in both the payer's transaction history and the emails that the payer receives.
	 *
	 * In addition, this ID is available in transaction and settlement reports that merchants and API callers can use to reconcile transactions.
	 *
	 * This ID is only available when an order is saved by calling v2/checkout/orders/id/save.
	 */
	id? : string;

	/**
	 * The soft descriptor is the dynamic text used to construct the statement descriptor that appears on a payer's card statement.
	 *
	 * If an Order is paid using the "PayPal Wallet", the statement descriptor will appear in following format on the payer's card statement:
	 * 	PAYPAL_prefix+(space)+merchant_descriptor+(space)+soft_descriptor
	 *
	 * The PAYPAL prefix uses 8 characters. Only the first 22 characters will be displayed in the statement.
	 * 	For example, if:
	 * 	   - The PayPal prefix toggle is PAYPAL *.
	 *     - The merchant descriptor in the profile is Janes Gift.
	 *     - The soft descriptor is 800-123-1234.
	 *
	 * Then, the statement descriptor on the card is PAYPAL * Janes Gift 80.
	 *
	 * 1 to 22 characters.
	 */
	soft_descriptor? : string;

	/** An array of items that the customer purchases from the merchant. */
	items? : PayPalItem[];

	/** The total order amount. */
	amount : PayPalAmountWithBreakdown;

	/** The merchant who receives payment for this transaction. */
	payee? : PayPalMerchantBase;

	/** Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. */
	payment_instruction? : PayPalPaymentInstruction;

	/** The name and address of the person to whom to ship the items. */
	shipping? : PayPalShippingDetails;
}

/** The shipping details. */
export interface PayPalShippingDetails
{
	/** The method by which the payer wants to get their items from the payee e.g shipping, in-person pickup. */
	type? : "SHIPPING" | "PICKUP_IN_PERSON";

	/**
	 * The name of the person to whom to ship the items.
	 *
	 * Supports only the full_name property.
	 */
	name? : PayPalName;

	/**
	 * The address of the person to whom to ship the items.
	 *
	 * Supports only the address_line_1, address_line_2, admin_area_1, admin_area_2, postal_code, and country_code properties.
	 */
	address? : PayPalPortablePostalAddress;
}

/** The tax ID of the customer. The customer is also known as the payer. Both tax_id and tax_id_type are required. */
export interface PayPalTaxInformation
{
	/**
	 * The customer's tax ID value.
	 *
	 * 1 to 14 characters.
	 */
	tax_id : string;

	/**
	 * The customer's tax ID type.
	 *
	 * BR_CPF: The individual tax ID type, typically is 11 characters long.
	 * BR_CNPJ: The business tax ID type, typically is 14 characters long.
	 */
	tax_id_type : "BR_CPF" | "BR_CNPJ";
}

/** A resource that identifies a PayPal Wallet is used for payment. */
export interface PayPalWallet
{
	/**
	 * Customizes the payer experience during the approval process for payment with PayPal.
	 * 
	 * Note: Partners and Marketplaces might configure brand_name and shipping_preference during partner account setup, which overrides the request values.
	 */
	experience_context : PayPalWalletExperienceContext;

	/**
	 * The email address of the PayPal account holder.
	 * 
	 * 3 to 254 characters.
	 */
	email_address : string;

	/**
	 * The name of the PayPal account holder. 
	 * 
	 * Supports only the given_name and surname properties.
	 */
	name : PayPalName;

	/** The birth date of the PayPal account holder in YYYY-MM-DD format. */
	birth_date : string;

	/**
	 * The tax information of the PayPal account holder. 
	 * 
	 * Required only for Brazilian PayPal account holder's. 
	 * 
	 * Both tax_id and tax_id_type are required.
	 */
	tax_info : PayPalTaxInformation;


	/**
	 * The address of the PayPal account holder. 
	 * 
	 * Supports only the address_line_1, address_line_2, admin_area_1, admin_area_2, postal_code, and country_code properties. 
	 * 
	 * Also referred to as the billing address of the customer.
	 */
	address : PayPalPortablePostalAddress;
}

/** Customizes the payer experience during the approval process for payment with PayPal. */
export interface PayPalWalletExperienceContext extends PayPalExperienceContext
{
	/**
	 * The type of landing page to show on the PayPal site for customer checkout.
	 *
	 * LOGIN: When the customer clicks PayPal Checkout, the customer is redirected to a page to log in to PayPal and approve the payment.
	 *
	 * GUEST_CHECKOUT: When the customer clicks PayPal Checkout, the customer is redirected to a page to enter credit
	 * 	or debit card and other relevant billing information required to complete the purchase.
	 * 	This option has previously been also called as "BILLING".
	 *
	 * NO_PREFERENCE: When the customer clicks PayPal Checkout, the customer is redirected to either a page to log in
	 * 	to PayPal and approve the payment or to a page to enter credit or debit card and other relevant billing
	 * 	information required to complete the purchase, depending on their previous interaction with PayPal.
	 */
	landing_page? : "LOGIN" | "GUEST_CHECKOUT" | "NO_PREFERENCE";

	/**
	 * Configures a Continue or Pay Now checkout flow.
	 *
	 * CONTINUE: After you redirect the customer to the PayPal payment page, a Continue button appears.
	 * 	Use this option when the final amount is not known when the checkout flow is initiated and you want
	 * 	to redirect the customer to the merchant page without processing the payment.
	 *
	 * PAY_NOW: After you redirect the customer to the PayPal payment page, a Pay Now button appears.
	 * 	Use this option when the final amount is known when the checkout is initiated and you want
	 * 	to process the payment immediately when the customer clicks Pay Now.
	 */
	user_action? : "CONTINUE" | "PAY_NOW";

	/**
	 * The merchant-preferred payment methods.
	 *
	 * UNRESTRICTED: Accepts any type of payment from the customer.
	 *
	 * IMMEDIATE_PAYMENT_REQUIRED: Accepts only immediate payment from the customer.
	 * 	For example, credit card, PayPal balance, or instant ACH.
	 * 	Ensures that at the time of capture, the payment does not have the pending status.
	 */
	payment_method_preference? : "UNRESTRICTED" | "IMMEDIATE_PAYMENT_REQUIRED";
}

//
// Types
//

/**
 * The intent to either capture payment immediately or authorize a payment for an order after order creation.
 * 
 * CAPTURE: The merchant intends to capture payment immediately after the customer makes a payment.
 *
 * AUTHORIZE: The merchant intends to authorize a payment and place funds on hold after the customer makes a payment.
 * 	Authorized payments are best captured within three days of authorization but are available to capture for up to 29 days.
 * 	After the three-day honor period, the original authorized payment expires and you must re-authorize the payment.
 * 	You must make a separate request to capture payments on demand.
 * 	This intent is not supported when you have more than one purchase_unit within your order.
 */
export type PayPalCheckoutPaymentIntent = "CAPTURE" | "AUTHORIZE";

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
 * The item category type.
 *
 * DIGITAL_GOODS: Goods that are stored, delivered, and used in their electronic format.
 * PHYSICAL_GOODS: A tangible item that can be shipped with proof of delivery.
 * DONATION: A contribution or gift for which no good or service is exchanged, usually to a not for profit organization.
 */
export type PayPalItemCategory = "DIGITAL_GOODS" | "PHYSICAL_GOODS" | "DONATION";

/**
 * The instruction to process an order.
 *
 * ORDER_COMPLETE_ON_PAYMENT_APPROVAL: API Caller expects the Order to be auto completed (i.e. for PayPal to authorize or capture depending on the intent) on completion of payer approval.
 * 	This option is not relevant for payment_source that typically do not require a payer approval or interaction.
 * 	This option is currently only available for the following payment_source:
 * 		- Alipay
 * 		- Bancontact
 * 		- BLIK
 * 		- boletobancario
 * 		- eps
 * 		- giropay
 * 		- GrabPay
 * 		- iDEAL
 * 		- Multibanco
 * 		- MyBank
 * 		- OXXO
 * 		- P24
 * 		- PayU
 * 		- PUI
 * 		- SafetyPay
 * 		- SatisPay
 * 		- Sofort
 * 		- Trustly
 * 		- Verkkopankki
 * 		- WeChat Pay
 *
 * NO_INSTRUCTION: The API caller intends to authorize v2/checkout/orders/id/authorize or
 * 	capture v2/checkout/orders/id/capture after the payer approves the order.
 */
export type PayPalOrderProcessingInstruction = "ORDER_COMPLETE_ON_PAYMENT_APPROVAL" | "NO_INSTRUCTION";

/**
 * The order status.
 *
 * CREATED: The order was created with the specified context.
 *
 * SAVED: The order was saved and persisted.
 * 	The order status continues to be in progress until a capture is made with final_capture = true for all purchase units within the order.
 *
 * APPROVED: The customer approved the payment through the PayPal wallet or another form of guest or unbranded payment.
 * 	For example, a card, bank account, or so on.
 *
 * VOIDED: All purchase units in the order are voided.
 *
 * COMPLETED: The payment was authorized or the authorized payment was captured for the order.
 *
 * PAYER_ACTION_REQUIRED: The order requires an action from the payer (e.g. 3DS authentication).
 * 	Redirect the payer to the "rel":"payer-action" HATEOAS link returned as part of
 * 	the response prior to authorizing or capturing the order.
 */
export type PayPalOrderStatus = "CREATED" | "SAVED" | "APPROVED" | "VOIDED" | "COMPLETED" | "PAYER_ACTION_REQUIRED";

/** The phone type. */
export type PayPalPhoneType = "FAX" | "HOME" | "MOBILE" | "OTHER" | "PAGER" | "WORK";

/**
 * The method by which the payer wants to get their items from the payee e.g shipping, in-person pickup.
 *
 * Either type or options but not both may be present.
 *
 * SHIPPING: The payer intends to receive the items at a specified address.
 *
 * PICKUP_IN_PERSON: The payer intends to pick up the items from the payee in person.
 */
export type PayPalShippingDetailsType = "SHIPPING" | "PICKUP_IN_PERSON";