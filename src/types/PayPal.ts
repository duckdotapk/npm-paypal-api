//
// Types
//

export interface PayPalError
{
	name : string;

	message : string;

	debug_id : string;

	information_link? : string;

	details? : PayPalErrorDetails[];

	links? : PayPalLinkDescription[];
}

export interface PayPalErrorDetails
{
	field? : string;

	value? : string;

	location? : "body" | "path" | "query";

	issue : string;

	description? : string;
}

export interface PayPalLinkDescription
{
	href : string;

	rel : string;

	method? : "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "CONNECT" | "OPTIONS" | "PATCH";
}