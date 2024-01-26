// import config from 'react-native-config';
  
  
  const env = {
      api: {
    envId: process.env.EXPO_PUBLIC_ENV_ID, // [authorizationService] This line is generated automatically. Please don't remove it
    appId: process.env.EXPO_PUBLIC_APP_ID, // [authorizationService] This line is generated automatically. Please don't remove it
    codeChallenge: process.env.EXPO_PUBLIC_CODE_CHALLENGE, // [authorizationService] This line is generated automatically. Please don't remove it
    codeVerifier: process.env.EXPO_PUBLIC_CODE_VERIFIER, // [authorizationService] This line is generated automatically. Please don't remove it
    bankId: process.env.EXPO_PUBLIC_BANK_ID, // [authorizationService] This line is generated automatically. Please don't remove it
    authBaseUrl: process.env.EXPO_PUBLIC_AUTH_BASE_URL, // [authorizationService] This line is generated automatically. Please don't remove it
    redirectUrl: process.env.EXPO_PUBLIC_REDIRECT_URL, // [authorizationService] This line is generated automatically. Please don't remove it
    apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL, // [authorizationService] This line is generated automatically. Please don't remove it
    membershipBaseUrl: process.env.EXPO_PUBLIC_MEMBERSHIP_BASE_URL, // [membershipService] This line is generated automatically. Please don't remove it
  },
  };
  console.log('process.env ',env);
  export default env;
