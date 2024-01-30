//
// Imports
//

import { PayPalCustomer } from "./PayPalCustomer.js";
import { PayPalVaultInstructionBase } from "./PayPalVaultInstructionBase.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_attributes */
export interface PayPalCardAttributes
{
	customer? : PayPalCustomer;

	vault? : PayPalVaultInstructionBase;
}