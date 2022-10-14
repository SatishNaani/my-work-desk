// import { PublicClientApplication } from '@azure/msal-browser';
// import { msalConfig, loginScopes, tokenScope } from './msal-config';
//
// // @ts-ignore
// export const msalInstance = new PublicClientApplication(msalConfig);
//
// export const login = instance => {
//     instance.loginRedirect(loginScopes);
// };
//
// export const logout = instance => {
//     instance.logoutRedirect().catch(e => {
//         console.error(e);
//     });
// };
//
// export const acquireToken = async () => {
//     const account = msalInstance.getActiveAccount();
//
//     return await msalInstance.acquireTokenSilent({
//         ...tokenScope, // @ts-ignore
//         account: account
//     });
// };
