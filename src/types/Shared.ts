//
// Types
//

/** The error details. */
export interface PayPalError
{
	/** The human-readable, unique name of the error. */
	name : string;

	/** The message that describes the error. */
	message : string;

	/** The PayPal internal ID. Used for correlation purposes. */
	debug_id : string;

	/** The information link, or URI, that shows detailed information about this error for the developer. */
	information_link? : string;

	/** An array of additional details about the error. */
	details? : unknown[];

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}

/** Hypermedia as the Engine of Application State (HATEOAS) is a constraint of the REST application architecture that distinguishes it from other network application architectures. */
export interface PayPalHATEOASLink
{
	/**
	 * The complete target URL.
	 *
	 * To make the related call, combine the method with this URI Template-formatted link.
	 *
	 * See https://tools.ietf.org/html/rfc6570
	 *
	 * For pre-processing, include the $, (, and ) characters.
	 *
	 * The href is the key HATEOAS component that links a completed call with a subsequent call.
	 */
	href : string;

	/**
	 * The link relation type, which serves as an ID for a link that unambiguously describes the semantics of the link.
	 *
	 * See https://www.iana.org/assignments/link-relations/link-relations.xhtml
	 */
	rel : string;

	/** The HTTP method required to make the related call. */
	method? : "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "CONNECT" | "OPTIONS" | "PATCH";

	/** The encoding type for the link's response. */
	encType? : string;
}