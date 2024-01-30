//
// Type
//

/** @note Documented in various places throughout the API docs. */
export interface PayPalLinkDescription
{
	href : string;

	rel : string;

	method? : "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "CONNECT" | "OPTIONS" | "PATCH";
}