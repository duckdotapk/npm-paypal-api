# PayPalClient API
A class for interacting with the PayPal API.

I made this package because PayPal does not provide a complete solution for doing this and their docs are sorely lacking in quality.

**Note**: This package is in alpha and there may be breaking changes before Major Version 1.0. If you do decide to use it, I suggest you pin your dependency at a specific version and carefully investigate changelogs.

## Installation
Install the package with NPM:

```
npm install @lorenstuff/paypal-api
```

## Documentation
To use the package, simply import the `PayPalClient` class and create an instance of it with your PayPal Client ID and Secret. You will also need to specify whether the credentials are for sandbox mode or live mode:

```ts
import { PayPalClient } from "@lorenstuff/paypal-api";

const payPalClient = new PayPalClient(
	{
		sandbox: true,
		clientId: "YOUR_CLIENT_ID_HERE",
		secret: "YOUR_SECRET_HERE",
	});
```

Once you have an instance of the class, you can use it to instantiate clients for various PayPal APIs such as the Orders API or the Webhooks Management API:
```ts
import { PayPalOrdersClient } from "@lorenstuff/paypal-api";

const payPalOrdersClient = new PayPalOrdersClient(
	{
		payPalClient,
	});

// call stuff on payPalOrdersClient such as createOrder or showOrderDetails
```

Each client implements at least part of its respective API. API coverage information can be found in the next section.

## API Coverage
Currently, this library only covers portions of PayPal's API.

| API                   | Coverage | Class                          |
|-----------------------|----------|--------------------------------|
| Add Tracking          | None     | -                              |
| Catalog Products      | None     | -                              |
| Disputes              | None     | -                              |
| Identity              | None     | -                              | 
| Invoicing             | None     | -                              |
| Orders                | Full     | PayPalOrdersClient             |
| Partner Referrals     | None     | -                              |
| Payment Experience    | None     | -                              |
| Payment Method Tokens | None     | -                              |
| Payments              | None     | -                              |
| Payouts               | None     | -                              |
| Referenced Payouts    | None     | -                              |
| Subscriptions         | None     | -                              |
| Transaction Search    | None     | -                              |
| Webhooks Management   | Partial  | PayPalWebhooksManagementClient |

Portions not covered by the classes and types provided in this package can be manually accessed using the `request` method of a `PayPalClient` instance.

## Changelog
See [CHANGELOG.md](https://github.com/duckdotapk/npm-paypal-api/blob/main/CHANGELOG.md)

## License
[MIT](https://github.com/duckdotapk/npm-paypal-api/blob/main/LICENSE.md)