
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6618707f48f84854bb2e335f02395d06',
  appName: 'funk-folio-3d-mobile',
  webDir: 'dist',
  server: {
    url: "https://6618707f-48f8-4854-bb2e-335f02395d06.lovableproject.com?forceHideBadge=true",
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
