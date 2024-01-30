// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalCobrandedCard } from "./PayPalCobrandedCard.js";
import { PayPalWalletVaultResponse } from "./PayPalWalletVaultResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_attributes_response */
export interface PayPalWalletAttributesResponse
{
	vault? : PayPalWalletVaultResponse;

	cobranded_cards? : PayPalCobrandedCard[];
}