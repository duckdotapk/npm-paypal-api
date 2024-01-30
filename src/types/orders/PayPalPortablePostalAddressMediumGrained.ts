//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-address_portable */
export interface PayPalPortablePostalAddressMediumGrained
{
	address_line_1? : string;

	address_line_2? : string;

	admin_area_2? : string;

	admin_area_1? : string;

	postal_code? : string;

	country_code : string;
}
