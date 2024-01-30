// noinspection SpellCheckingInspection

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-tax_info */
export interface PayPalTaxInfo
{
	tax_id : string;

	tax_id_type : "BR_CPF" | "BR_CNPJ";
}