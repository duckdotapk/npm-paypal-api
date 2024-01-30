//
// Imports
//

import { PayPalAuthenticationResponse } from "./PayPalAuthenticationResponse.js";
import { PayPalBINDetails } from "./PayPalBINDetails.js";
import { PayPalCardAttributesResponse } from "./PayPalCardAttributesResponse.js";
import { PayPalCardBrand } from "./PayPalCardBrand.js";
import { PayPalCardFromRequest } from "./PayPalCardFromRequest.js";
import { PayPalCardType } from "./PayPalCardType.js";

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_response */
export interface PayPalCardResponse
{
	name? : string;

	last_digits? : string;

	available_networks? : PayPalCardBrand[];

	type? : Omit<PayPalCardType, "STORE">; // Note: This doesn't include "STORE" in the docs

	from_request? : PayPalCardFromRequest;

	brand? : PayPalCardBrand;

	authentication_result? : PayPalAuthenticationResponse;

	attributes? : PayPalCardAttributesResponse;

	expiry? : string;

	bin_details? : PayPalBINDetails;
}