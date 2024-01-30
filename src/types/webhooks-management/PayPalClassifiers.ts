//
// Type
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-Classifiers */
export interface PayPalClassifiers
{
	tags? : string[];

	pairs? : Record<string, string>;
}