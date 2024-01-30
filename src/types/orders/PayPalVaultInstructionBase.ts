//
// Imports
//

import { PayPalStoreInVaultInstruction } from "./PayPalStoreInVaultInstruction.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_instruction_base */
export interface PayPalVaultInstructionBase
{
	store_in_vault? : PayPalStoreInVaultInstruction;
}