import "dotenv/config";
export default {
  expo: {
    name: "Auto-mate",
    slug: "automate",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/main-icon/app-icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/main-icon/loading-photo.jpg",
      resizeMode: "contain",
      backgroundColor: "#d11515",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/main-icon/app-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/main-icon/app-icon.png",
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGINGSENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
    plugins: ["expo-build-properties"],
  },
};
