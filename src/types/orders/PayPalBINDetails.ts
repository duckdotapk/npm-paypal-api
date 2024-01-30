//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-bin_details */
export interface PayPalBINDetails
{
	bin? : string;

	issuing_bank? : string;

	products? : string[];

	bin_country_code? : string;
}