import config from 'react-native-config';
  
  const env = {
      api: {
    envId: config.ENV_ID, // [authorizationService] This line is generated automatically. Please don't remove it
    appId: config.APP_ID, // [authorizationService] This line is generated automatically. Please don't remove it
    codeChallenge: config.CODE_CHALLENGE, // [authorizationService] This line is generated automatically. Please don't remove it
    codeVerifier: config.CODE_VERIFIER, // [authorizationService] This line is generated automatically. Please don't remove it
    bankId: config.BANK_ID, // [authorizationService] This line is generated automatically. Please don't remove it
    authBaseUrl: config.AUTH_BASE_URL, // [authorizationService] This line is generated automatically. Please don't remove it
    redirectUrl: config.REDIRECT_URL, // [authorizationService] This line is generated automatically. Please don't remove it
    apiBaseUrl: config.API_BASE_URL, // [authorizationService] This line is generated automatically. Please don't remove it
    membershipBaseUrl: config.MEMBERSHIP_BASE_URL, // [membershipService] This line is generated automatically. Please don't remove it
  },
  };
  
  export default env;
