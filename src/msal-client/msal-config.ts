// export const msalConfig = {
//     auth: {
//         clientId: 'process.env['REACT_APP_MSAL_CLIENT_ID']',
//         redirectUri: process.env['REACT_APP_REDIRECT_URI'],
//         authority: process.env['REACT_APP_AUTHORITY'],
//         knownAuthorities: ['login.live.com'],
//         validateAuthority: false,
//         navigateToLoginRequestUrl: true,
//         postLogoutRedirectUri: '/'
//     },
//     cache: {
//         cacheLocation: 'localStorage', // This configures where your cache will be stored
//         storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
//     }
// };
// export const loginScopes = {
//     scopes: [
//         'openid',
//         'profile',
//         'User.Read',
//         'User.Read.All',
//         'User.ReadBasic.All'
//     ]
// };
// export const tokenScope = {
//     scopes: ['api://2e72619e-ff60-4354-95a5-ec864d56dc76/access_as_user'],
//     redirectUri: msalConfig.auth.redirectUri
// };
//
// export const authTemplateLoginScope = {
//     scopes: [
//         'api://2e72619e-ff60-4354-95a5-ec864d56dc76/access_as_user',
//         'openid',
//         'profile',
//         'User.Read',
//         'email'
//     ]
// };
