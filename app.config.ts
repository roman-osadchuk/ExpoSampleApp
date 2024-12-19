import { ExpoConfig } from 'expo/config';

require('dotenv').config();

export const config: ExpoConfig = {
  name: 'sampleexpoapp',
  slug: 'sample-expo-app',
  owner: 'romanosadchuk94',
  privacy: 'public',
  platforms: ['ios', 'android'],
  orientation: 'portrait',
  icon: './assets/icon.png',
  android: {
    // icon: './assets/icon.png',
    package: 'sampleexpoapp.com',
    softwareKeyboardLayoutMode: 'pan',
  },
  ios: {
    // icon: './assets/icon.png',
    bundleIdentifier: 'sampleexpoapp.com',
    buildNumber: '1',
  },
  extra: {
    eas: {
      projectId: 'f50517b8-f6e3-4ba7-9ee9-301932e27838',
    },
    ENV: process.env.ENV ?? 'prod',
  },
  runtimeVersion: '1.5.0',
};

export default config;
