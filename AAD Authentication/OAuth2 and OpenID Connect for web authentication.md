# OAuth2 and OpenID Connect for web authorization
When you are developing a web applicaiton that needs to authenticate and authorize users, you have two standards - OAuth2 and OpenID Connect.

OAuth2 is a framework that allows a third-party application (called a client) to access resources from a resource server(such as an API) on hehalf of a user (called a resource owner), the user grants the client a limited access token, which the client can use to request resources from the resource server. the access token is issued by an authorization server, which verifies the identity and consent of the user.

OpenID connect is an extension of OAuth2 that adds an identity layer to the authorization framework, it allows a client to verify the identity of the user and obtain basic profile information, the user logs in to an identity provider (like Google or Facebook) using openID Connect, and the identity provider returns an ID Token to the client, the ID Token is a json web token (JWT) that contains infromation about the user, the client can also request an access token and refresh toen from the identity provider, which can be used to access other resources.

## An Introduction to OAuth 2
OAuth defines four roles:
* <b>Client: </b>The client is the application that wants to access the user’s account
* <b>Resource Server: </b>The resource server hosts the protected user accounts.
* <b>Resource Owner: </b>The resource owner is the user who authorizes an application to access their account. The application’s access to the user’s account is limited to the scope of the authorization granted (e.g. read or write access)
* <b>Authorization Server: </b>The authorization server verifies the identity of the user then issues access tokens to the application.

Abstract Protocol Flow:

![](../imgs/abstract_flow.png)

Here is a more detailed explanation of the steps in the diagram:

1. The application requests authorization to access service resources from the user
2. If the user authorized the request, the application receives an authorization grant
3. The application requests an access token from the authorization server (API) by presenting authentication of its own identity, and the authorization grant
4. If the application identity is authenticated and the authorization grant is valid, the authorization server (API) issues an access token to the application. Authorization is complete.
5. The application requests the resource from the resource server (API) and presents the access token for authentication
6. If the access token is valid, the resource server (API) serves the resource to the application

### Application Registration
Before using OAuth with your application, you must register your application and provide the following information:
* Application Name
* Application Website
* Redirect URI or Callback URL
The redirect URI is where the service will redirect the user after they authorize (or deny) your application, and therefore the part of your application that will handle authorization codes or access tokens.
### Client ID and Client Secret
Once your application is registered, the service will issue client credentials in the form of a client identifier and a client secret.
### Authorization Grant
In the Abstract Protocol Flow outlined previously, the first four steps cover obtaining an authorization grant and access token. The authorization grant type depends on the method used by the application to request authorization.
OAuth 2 defines three primary grant types, each of which is useful in different cases:

* Authorization Code: used with server-side Applications
* Client Credentials: used with Applications that have API access
* Device Code: used for devices that lack browsers or have input limitations
#### Grant Type: Authorization Code
#### Grant Type: Client Credentials
#### Grant Type: Device Code
