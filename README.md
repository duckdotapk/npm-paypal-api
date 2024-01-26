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

const paypal = new PayPalClient(
	{
		sandbox: true,
		clientId: "YOUR_CLIENT_ID_HERE",
		secret: "YOUR_SECRET_HERE",
	});
```

Once you have an instance of the class, you can call various methods on it such as `createOrder` to interact with the API. There are exhaustive types included as part of this module to help you know what to put.

Also, this is by no means a complete library at the moment and it may be quite some time before it is. That said, I still hope it helps.

More detailed documentation will be coming at a later date.

## Changelog
See [CHANGELOG.md](https://github.com/duckdotapk/npm-paypal-api/blob/main/CHANGELOG.md)

## License
[MIT](https://github.com/duckdotapk/npm-paypal-api/blob/main/LICENSE.md)