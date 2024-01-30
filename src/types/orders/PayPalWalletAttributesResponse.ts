//
// Imports
//

import { PayPalCobrandedCard } from "./PayPalCobrandedCard.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_attributes_response */
export interface PayPalWalletAttributesResponse
{
	vault? : unknown; // TODO

	// noinspection SpellCheckingInspection
	cobranded_cards? : PayPalCobrandedCard[];
}