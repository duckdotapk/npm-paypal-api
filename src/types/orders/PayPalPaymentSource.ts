// noinspection SpellCheckingInspection

//
// Imports
//

import { PayPalApplePayRequest } from "./PayPalApplePayRequest.js";
import { PayPalBancontactRequest } from "./PayPalBancontactRequest.js";
import { PayPalBLIKRequest } from "./PayPalBLIKRequest.js";
import { PayPalCardRequest } from "./PayPalCardRequest.js";
import { PayPalEPSRequest } from "./PayPalEPSRequest.js";
import { PayPalGiropayRequest } from "./PayPalGiropayRequest.js";
import { PayPalIdealRequest } from "./PayPalIdealRequest.js";
import { PayPalMyBankRequest } from "./PayPalMyBankRequest.js";
import { PayPalP24Request } from "./PayPalP24Request.js";
import { PayPalToken } from "./PayPalToken.js";
import { PayPalWallet } from "./PayPalWallet.js";
import { PayPalSofortRequest } from "./PayPalSofortRequest.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payment_source */
export interface PayPalPaymentSource
{
	card? : PayPalCardRequest;

	token? : PayPalToken;

	paypal? : PayPalWallet;

	bancontact? : PayPalBancontactRequest;

	blik? : PayPalBLIKRequest;

	eps? : PayPalEPSRequest;

	giropay? : PayPalGiropayRequest;

	ideal? : PayPalIdealRequest;

	mybank? : PayPalMyBankRequest;

	p24? : PayPalP24Request;

	sofort? : PayPalSofortRequest;

	trustly? : unknown; // TODO

	apple_pay? : PayPalApplePayRequest;

	venmo? : unknown; // TODO
}