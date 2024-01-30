//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-tax_info */
export interface PayPalTaxInfo
{
	tax_id : string;

	// noinspection SpellCheckingInspection
	tax_id_type : "BR_CPF" | "BR_CNPJ";
}