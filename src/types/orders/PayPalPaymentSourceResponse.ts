// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalBancontact } from "./PayPalBancontact.js";
import { PayPalBLIK } from "./PayPalBLIK.js";
import { PayPalCardResponse } from "./PayPalCardResponse.js";
import { PayPalEPS } from "./PayPalEPS.js";
import { PayPalGiropay } from "./PayPalGiropay.js";
import { PayPalIdeal } from "./PayPalIdeal.js";
import { PayPalMyBank } from "./PayPalMyBank.js";
import { PayPalP24 } from "./PayPalP24.js";
import { PayPalWalletResponse } from "./PayPalWalletResponse.js";
import { PayPalSofort } from "./PayPalSofort.js";
import { PayPalTrustly } from "./PayPalTrustly.js";
import { PayPalVenmoWalletResponse } from "./PayPalVenmoWalletResponse.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payment_source_response */
export interface PayPalPaymentSourceResponse
{
	card? : PayPalCardResponse;

	bancontact? : PayPalBancontact;

	blik? : PayPalBLIK;

	eps? : PayPalEPS;

	giropay? : PayPalGiropay;

	ideal? : PayPalIdeal;

	mybank? : PayPalMyBank;

	p24? : PayPalP24;

	sofort? : PayPalSofort;

	trustly? : PayPalTrustly;

	venmo? : PayPalVenmoWalletResponse;

	paypal? : PayPalWalletResponse;
}