import Constants from 'expo-constants';

export const env = {
  ENV: Constants.expoConfig?.extra?.ENV,
  SENTRY_DSN: Constants.expoConfig?.extra?.SENTRY_DSN,
  supportLogin: Constants.expoConfig?.extra?.supportLogin,
} as const;
