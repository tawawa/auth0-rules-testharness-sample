# What is it?

Seed project for [auth0-rules-testharness](https://www.npmjs.com/package/auth0-rules-testharness) to help users get started immediately
 
 This sample is intended to allow users to get up and running in less than 2 minutes with a working sample!

Please see here for further documentation on [Auth0 Rules](https://auth0.com/docs/rules) and [webtasks](https://webtask.io/). 

## Prerequisites 

Assumes you have an Auth0 Tenant webtask container to run your Rules against.

#### Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

#### What is Auth0?

See bottom of this README for further info...


## How to use it? 

Clone / download this sample project.

Install the dependencies 

```bash
$ npm install 
```

Create a `.env` file in the base of the project (you can simply copy the .env.sample that comes with this sample).


* `AUTH0_TENANT`: your tenant name in Auth0 
* `SANDBOX_URL`: sandbox container url - 'https://sandbox.it.auth0.com' for public cloud
* `WEBTASK_TOKEN`: the webtask token. You can get your webtask token from [your auth0 dashboard](https://manage.auth0.com/#/account/webtasks).


Example, populated `.env` file:


```
AUTH0_TENANT=arcseldon-tenant
SANDBOX_URL=https://sandbox.it.auth0.com
WEBTASK_TOKEN=eyJhbGciOiJdfdfIsImtpZCI6InVzLTMifQ.eyJqdGkiOiJhOTNlMjU1NzgyYmadsfdfGZmOWU5YTE2YjNkYzFlOCIsImlhdCI6MTQ4Nzc0OTU1NywiY2EiOltdLCJkZCI6MSwidGVuIjoiYWdsLWZsb3dzIn0.wi7c3Qn1x1K3upA2dfdfdLhUUkSbQ9EfH-u_M-RR5Ze4
```

Now, just run 

```
$ npm run test
```

Congratulations, you have just deployed, executed, and tested the output of an Auth0 Rule!



## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
