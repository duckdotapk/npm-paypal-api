// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPayee } from "./PayPalPayee.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-cobranded_card */
export interface PayPalCobrandedCard
{
	labels? : string[];

	payee? : PayPalPayee;

	amount? : PayPalMoney;
}