import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mikepfunk.portfolio',
  appName: 'funk-folio-3d-mobile',
  webDir: 'dist',
  server: {
    url: "https://mikepfunk.github.io/mikepfunk-mobile-mock",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#1A1F2C",
      showSpinner: true,
      spinnerColor: "#33C3F0",
    }
  }
};

export default config;
