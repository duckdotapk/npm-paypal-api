//
// Imports
//

import { PayPalVaultVenmoWalletBase } from "./PayPalVaultVenmoWalletBase.js";
import { PayPalWalletCustomer } from "./PayPalWalletCustomer.js";

//
// Type
//


export interface PayPalVenmoWalletAttributes
{
	customer? : PayPalWalletCustomer; // TODO: This only has the "id" field in the docs

	vault? : PayPalVaultVenmoWalletBase;
}